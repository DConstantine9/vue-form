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
    component: Dash
  }

]

const router = new VueRouter({
  routes
})

export default router
