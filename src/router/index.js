import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import inicioView from '../views/inicioView.vue'
import HelpView from '../views/HelpView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: inicioView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/info',
    name: 'info',
    component: HelpView
  },
  {
    path: '/Quienes somos',
    name: 'Quienes somos',
    component: HelpView
  },
  {
    path: '/contactenos',
    name: 'contactenos',
    component: HelpView
  },
  {
    path: '/Acceder',
    name: 'Acceder',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
