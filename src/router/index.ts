import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../components/Detail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'overview',
    component: Home,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: Detail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
