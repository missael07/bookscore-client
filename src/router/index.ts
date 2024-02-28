import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import gamesRoutes from '@/modules/games/router/index'
import dashboardRoutes from '@/modules/dashboard/router/index'

const routes: Array<RouteRecordRaw> = [
  {
    ...gamesRoutes
  },
  {
    ...dashboardRoutes
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () =>  {return {name: 'dashboard'}}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
