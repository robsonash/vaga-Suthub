import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Formulario from '../views/Formulario.vue'
import Paises from '../views/Paises.vue'
import Pais from '../views/Pais.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/formulario',
        name: 'formulario',
        component: Formulario
    },
    {
        path: '/paises',
        name: 'paises',
        component: Paises
    },
    {
        path: "/paises/:pais",
        name: "pais",
        component: Pais,
        props: true,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router