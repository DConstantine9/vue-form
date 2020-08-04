import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/form.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'form',
    component: Form
  }

]

const router = new VueRouter({
  routes
})

export default router
