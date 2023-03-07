import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

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

export default router
