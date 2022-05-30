import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/products',
    name: 'products',
    component: () => import("@/views/ProductsView.vue"),
  },
  {
    path: "/",
    name: "home",
    redirect: {
      name: "products"
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("@/views/CartView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
