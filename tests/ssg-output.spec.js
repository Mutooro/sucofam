import { describe, expect, it } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

// Guards the real end of the pipeline: the views' metadata must survive pre-rendering.
// This silently stopped being true once vite-ssg and the app resolved different
// @unhead/vue majors, so it is asserted rather than eyeballed. Skipped until `npm run build`
// has produced dist/.
const DIST = join(process.cwd(), 'dist')
// The right-hand column is the canonical path each pre-rendered file must advertise. It is
// deliberately the slash-free spelling that nginx resolves back to the file itself
// (try_files $uri $uri/ $uri.html), so a canonical can never point at a URL that serves the
// homepage shell instead.
const pages = [
  ['index.html', '/'],
  ['about.html', '/about'],
  ['programs.html', '/programs'],
  ['value-chains.html', '/value-chains'],
  ['products.html', '/value-chains'],
  ['impact.html', '/impact'],
  ['gallery.html', '/gallery'],
  ['news.html', '/news'],
  ['accountability.html', '/accountability'],
  ['contact.html', '/contact']
]

const readPage = (file) => (existsSync(join(DIST, file)) ? readFileSync(join(DIST, file), 'utf8') : null)
const describeBuilt = existsSync(DIST) ? describe : describe.skip

describeBuilt('pre-rendered document head', () => {
  it('gives every route its own title', () => {
    const titles = pages.map(([file]) => readPage(file)?.match(/<title>([^<]*)<\/title>/)?.[1])
    expect(titles.every(Boolean)).toBe(true)
    // /value-chains and /products are the same route, so exactly one duplicate is expected.
    expect(new Set(titles).size).toBe(titles.length - 1)
  })

  it('points each page at its own canonical, never the homepage', () => {
    for (const [file, expected] of pages) {
      const html = readPage(file)
      const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1]
      expect(`${canonical.replace('https://www.sucofam.org', '') || '/'}`).toBe(expected)
      expect(html.match(/rel="canonical"/g)).toHaveLength(1)
    }
  })

  it('only advertises canonicals the server can actually resolve', () => {
    // Mirrors the nginx contract `try_files $uri $uri/ $uri.html /index.html`: every canonical
    // path has to map onto a real pre-rendered file. A canonical that misses (for example a
    // trailing-slash spelling with no matching directory) resolves to the /index.html fallback,
    // so the page would advertise a URL that serves the homepage.
    for (const [file, canonicalPath] of pages) {
      const resolved = canonicalPath === '/' ? 'index.html' : `${canonicalPath.replace(/^\//, '')}.html`
      expect(existsSync(join(DIST, resolved)), `${file} canonicalises to ${canonicalPath}`).toBe(true)
    }
  })

  it('keeps the JSON-LD body valid and free of the children-attribute leak', () => {
    for (const [file] of pages) {
      const html = readPage(file)
      expect(html).not.toContain('children="{')

      for (const block of html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g) || []) {
        const json = block.replace(/^<script[^>]*>/, '').replace(/<\/script>$/, '')
        expect(() => JSON.parse(json)).not.toThrow()
      }
    }
  })

  it('ships the security policy and skip link in every page shell', () => {
    for (const [file] of pages) {
      const html = readPage(file)
      expect(html).toContain('Content-Security-Policy')
      expect(html).toContain('skip-link')
      expect(html).toContain('connect-src \'self\';')
      expect(html).not.toContain("connect-src 'self' https:")
    }
  })
})
