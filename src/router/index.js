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
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
