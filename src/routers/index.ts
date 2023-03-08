import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useConfigStore } from '../stores/config'
import { useUserStore } from '../stores/user'

// Define some routes
const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login/index.vue'),
  },
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('/@/components/layout/index.vue'),
    children: [
      {
        path: '/dashboard',
        component: () => import('../views/dashboard/index.vue'),
      },
    ],
  },
]
// Create the router instance and pass the `routes` option
const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const configStore = useConfigStore()
  const token = userStore.getToken()
  if (to.path === '/login' && !token) {
    next()
  } else {
    if (!token) {
      next(
        `/login?redirect=${to.path}&params=${JSON.stringify(
          to.query ? to.query : to.params
        )}`
      )
      configStore.resetcommonStoreStore()
    } else if (token && to.path === '/login') {
      next('/')
    } else {
      next()
    }
  }
})

export default router
