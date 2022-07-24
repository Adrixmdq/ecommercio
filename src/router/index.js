import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Listado from '../views/Listado.vue'
import Usuario from '../views/Usuario.vue'
import UsuarioBuscar from '../views/UsuarioBuscar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Listado',
    name: 'Listado',
    component: Listado
  },
  {
    path: '/Usuario/:id',
    name: 'Usuario',
    component: Usuario,
    props: true
  },
  {
    path: '/Usuario',
    name: 'UsuarioBuscar',
    component: UsuarioBuscar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
