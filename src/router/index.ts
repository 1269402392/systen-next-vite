import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import cache from '../utils/cache'
import { firstPath } from '../utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('views/main/Main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('views/not-found/NotFound.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach(async (to) => {
  if (to.path !== '/login') {
    const token = cache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  if (to.path === '/main') {
    await router.replace(firstPath)
  }
})

export default router
