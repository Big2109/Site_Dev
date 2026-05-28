import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Produtos from '../pages/Produtos.vue'
import Contato from '../pages/Contato.vue'
import Sobre from '../pages/Sobre.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/Site_Dev/home',
            component: Home
        },
        {
            path: '/Site_Dev/produtos',
            component: Produtos
        },
        {
            path: '/Site_Dev/contato',
            component: Contato
        },
        {
            path: '/Site_Dev/sobre',
            component: Sobre
        }
    ]
})

export default router