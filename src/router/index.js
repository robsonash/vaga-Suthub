import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Paises from '../views/Paises.vue'
import Formulario from '../views/Formulario.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/paises',
        name: 'paises',
        component: Paises
    },
    {
        path: '/formulario',
        name: 'formulario',
        component: Formulario
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router