import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import AdvertiserPage from "@/pages/AdvertiserPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'main',
    component: MainPage
  },
  {
    path: '/advertiser',
    name: 'advertiser',
    component: AdvertiserPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
