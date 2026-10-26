import { describe, expect, it, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createHead } from '@unhead/vue/client'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { SITE_URL, toCanonical, usePageSeo } from '../src/composables/usePageSeo.js'

// unhead flushes its queue asynchronously, so every assertion against the document
// has to wait one macrotask after mounting.
const flushHead = async () => {
  await new Promise((resolve) => setTimeout(resolve, 0))
}

describe('toCanonical', () => {
  it('maps every route onto its single clean canonical URL', () => {
    expect(toCanonical('/')).toBe(`${SITE_URL}/`)
    expect(toCanonical('/index.html')).toBe(`${SITE_URL}/`)
    expect(toCanonical('/about')).toBe(`${SITE_URL}/about`)
    expect(toCanonical('/about/')).toBe(`${SITE_URL}/about`)
    expect(toCanonical('/about.html')).toBe(`${SITE_URL}/about`)
  })

  it('collapses the /products alias onto the canonical value-chains route', () => {
    expect(toCanonical('/products')).toBe(`${SITE_URL}/value-chains`)
    expect(toCanonical('/value-chains')).toBe(`${SITE_URL}/value-chains`)
  })

  it('emits exactly the URL spelling the sitemap advertises', () => {
    // The two lists have to agree: a canonical that differs from the sitemap entry by a
    // trailing slash is a second, unlisted spelling of the page.
    const sitemap = readFileSync(join(process.cwd(), 'public/sitemap.xml'), 'utf8')
    const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url)
    const routes = ['/', '/about', '/programs', '/value-chains', '/impact', '/gallery', '/news', '/accountability', '/contact']

    expect(routes.map(toCanonical)).toEqual(listed)
  })
})

describe('usePageSeo', () => {
  beforeEach(() => {
    document.head.innerHTML = ''
  })

  const Page = {
    setup() {
      usePageSeo({
        title: 'Test Page | SUCOFAM Uganda',
        description: 'A page used to assert metadata injection.',
        path: '/gallery',
        breadcrumbs: [{ name: 'Gallery', path: '/gallery' }],
        graph: [{ '@type': 'WebPage', name: 'Test Page' }]
      })
      return () => '<div />'
    }
  }

  const mountPage = async () => {
    const wrapper = mount(Page, { global: { plugins: [createHead()] } })
    await flushHead()
    return wrapper
  }

  it('derives canonical, og:url and twitter tags from the route path', async () => {
    await mountPage()

    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(`${SITE_URL}/gallery`)
    expect(document.querySelector('meta[property="og:url"]')?.content).toBe(`${SITE_URL}/gallery`)
    expect(document.querySelector('meta[property="og:image:width"]')?.content).toBe('1200')
    expect(document.querySelector('meta[name="twitter:site"]')?.content).toBe('@sucofam')
    expect(document.querySelector('meta[name="twitter:creator"]')?.content).toBe('@sucofam')
  })

  it('emits the breadcrumb trail as JSON-LD with the body as script content', async () => {
    await mountPage()

    const script = document.querySelector('script[type="application/ld+json"]')
    expect(script).toBeTruthy()
    // Regression guard: unhead reads `innerHTML`. With `children` the JSON leaked out as
    // an HTML attribute and the script body stayed empty, so crawlers saw nothing.
    expect(script.hasAttribute('children')).toBe(false)
    expect(script.textContent).toContain('BreadcrumbList')

    const parsed = JSON.parse(script.textContent)
    expect(parsed['@graph'].map((node) => node['@type'])).toEqual(['WebPage', 'BreadcrumbList'])
  })

  it('keeps error pages out of the index', async () => {
    const NotFound = {
      setup() {
        usePageSeo({ title: 'Page Not Found | SUCOFAM Uganda', path: '/404', robots: 'noindex' })
        return () => '<div />'
      }
    }

    mount(NotFound, { global: { plugins: [createHead()] } })
    await flushHead()

    expect(document.querySelector('meta[name="robots"]')?.content).toBe('noindex')
  })
})
