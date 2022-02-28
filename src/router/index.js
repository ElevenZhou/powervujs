import Vue from 'vue'
import VueRouter from 'vue-router'
import lanhu_pdweb from '../views/lanhu_pdweb/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/lanhu_pdweb"
  },
  {
    path: '/lanhu_pdweb',
    name: 'lanhu_pdweb',
    component: lanhu_pdweb
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
