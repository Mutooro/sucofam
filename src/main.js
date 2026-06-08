import { ViteSSG } from 'vite-ssg'
import './assets/main.css'
import App from './App.vue'
import { routes } from './router'

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
