import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProgramsView from '../views/ProgramsView.vue'
import ProductsView from '../views/ProductsView.vue'
import ImpactView from '../views/ImpactView.vue'
import ContactView from '../views/ContactView.vue'
import NewsView from '../views/NewsView.vue'
import GalleryView from '../views/GalleryView.vue'
import AccountabilityView from '../views/AccountabilityView.vue'
import NotFoundView from '../views/NotFoundView.vue'

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
    path: '/value-chains',
    name: 'value-chains',
    // The legacy /products URL stays a real route (alias, not redirect) so vite-ssg
    // pre-renders it and it hydrates without falling through to the SPA shell; the
    // canonical emitted by usePageSeo folds it onto /value-chains. A second record
    // redirecting /products was unreachable behind this alias and has been removed.
    component: ProductsView,
    alias: ['/products']
  },
  {
    path: '/impact',
    name: 'impact',
    component: ImpactView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/accountability',
    name: 'accountability',
    component: AccountabilityView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

export { routes }
