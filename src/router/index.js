import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'main',
    component: null
  },
  {
    path: '/advertiser',
    name: 'advertiser',
    component: null
  }
]

const router = new VueRouter({
  routes
})

export default router
