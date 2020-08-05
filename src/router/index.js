import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/form.vue'
import Dash from '../views/dash.vue'

Vue.use(VueRouter)
  
  const routes = [
  {
    path: '/',
    name: 'form',
    component: Form
  },

  {
    path: '/dash',
    name: 'dash',
    component: () => import("../views/dash.vue")
  }

]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
