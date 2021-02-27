import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Logado from '../views/Logado.vue'
import Cadastrar from '../views/Cadastrar.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: Cadastrar
  },
  {
    path: '/logado',
    name: 'Logado',
    component: Logado
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
