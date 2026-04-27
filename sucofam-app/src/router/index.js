import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProgramsView from '../views/ProgramsView.vue'
import ProductsView from '../views/ProductsView.vue'
import ImpactView from '../views/ImpactView.vue'
import ContactView from '../views/ContactView.vue'
import NewsView from '../views/NewsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/programs',
    name: 'programs',
    component: ProgramsView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/impact',
    name: 'impact',
    component: ImpactView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
