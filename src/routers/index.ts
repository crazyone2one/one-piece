import { createRouter, createWebHashHistory } from 'vue-router'

// Define some routes
const routes = [
  { path: '/', component: () => import('../views/dashboard/index.vue') },
]
// Create the router instance and pass the `routes` option
const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
})

export default router
