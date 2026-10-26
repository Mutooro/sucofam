import { useHead } from '@unhead/vue'

// Single source of truth for page metadata: canonical URL, Open Graph, Twitter
// card and BreadcrumbList structured data all derive from the same inputs, so a
// new page cannot ship a title without the matching canonical.
export const SITE_URL = 'https://www.sucofam.org'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/hero-bg.jpg`
export const TWITTER_SITE = '@sucofam'
export const TWITTER_CREATOR = '@sucofam'

/**
 * Clean-path canonical: the /products alias and .html suffixes fold onto the primary route.
 *
 * Sub-pages keep the slash-free form (/about, not /about/) because that is the URL the
 * server actually resolves to the pre-rendered file: nginx maps /about to about.html, while
 * /about/ matches none of the try_files candidates and falls through to the homepage shell.
 * A canonical that points at a URL serving a different page would defeat the whole head
 * pipeline, so this mirrors public/sitemap.xml instead of inventing a third spelling.
 */
export function toCanonical(path) {
  if (!path || path === '/' || path === '/index.html') return `${SITE_URL}/`
  const clean = path
    .replace(/\.html$/i, '')
    .replace(/\/index$/, '')
    .replace(/\/$/, '')
  if (clean === '/products') return `${SITE_URL}/value-chains`
  return `${SITE_URL}${clean}`
}

/**
 * @param {object} options
 * @param {string} options.title      - full document title
 * @param {string} options.description - meta description (also reused for og/twitter)
 * @param {string} [options.path]      - route path used for the canonical URL
 * @param {string} [options.image]     - absolute OG image URL
 * @param {string} [options.ogType]    - 'website' | 'article'
 * @param {Array<{name:string, path:string}>} [options.breadcrumbs] - ordered trail, home implied
 * @param {Array<object>} [options.graph] - extra schema.org nodes appended to the @graph
 * @param {string} [options.robots] - robots directive, e.g. 'noindex' for error pages
 * @param {boolean} [options.inject] - defaults to true; pass false to assert metadata without touching the document
 */
export function usePageSeo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  ogType = 'website',
  breadcrumbs = [],
  graph = [],
  robots,
  inject = true
} = {}) {
  const canonical = toCanonical(path)

  const breadcrumbGraph = breadcrumbs.length
    ? [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
            ...breadcrumbs.map((crumb, index) => ({
              '@type': 'ListItem',
              position: index + 2,
              name: crumb.name,
              item: toCanonical(crumb.path)
            }))
          ]
        }
      ]
    : []

  const nodes = [...graph, ...breadcrumbGraph]

  useHead({
    inject,
    title,
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      ...(description ? [{ name: 'description', content: description }] : []),
      ...(robots ? [{ name: 'robots', content: robots }] : []),
      { property: 'og:type', content: ogType },
      { property: 'og:site_name', content: 'SUCOFAM Uganda' },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'SUCOFAM farmers working in Uganda' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: TWITTER_SITE },
      { name: 'twitter:creator', content: TWITTER_CREATOR },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ],
    ...(nodes.length
      ? {
          script: [
            {
              type: 'application/ld+json',
              // unhead reads `innerHTML`; `children` leaks out as a bogus HTML attribute
              // and the JSON never becomes the script body.
              innerHTML: JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes })
            }
          ]
        }
      : {})
  })
}
