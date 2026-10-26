import { ViteSSG } from 'vite-ssg'
import './assets/main.css'
import App from './App.vue'
import { routes } from './router'

// vite-ssg builds its render list from `route.path` only, so router aliases are skipped and
// /products would ship no HTML of its own (it would fall through to the homepage shell and
// only resolve to the value-chains view after hydration). Exporting `includedRoutes` folds the
// alias paths back in; usePageSeo gives the copy a canonical of /value-chains, so the extra
// file consolidates onto the primary URL instead of competing with it.
export function includedRoutes(paths, routes) {
  const candidates = [...paths, ...routes.flatMap((route) => route.alias ?? [])]
  // Same filter vite-ssg applies by default: parameterised records such as the catch-all
  // 404 route are not files and must not be written to disk.
  return candidates.filter((path) => !path.includes(':') && !path.includes('*'))
}

export const createApp = ViteSSG(
  App,
  { 
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          top: 80
        }
      }
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0, behavior: 'smooth' }
      }
    }
  },
  ({ app, router, routes, isClient, initialState }) => {
    // Install additional plugins here if needed
  }
)
