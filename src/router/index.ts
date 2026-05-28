import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Produtos from '../pages/Produtos.vue'
import Contato from '../pages/Contato.vue'
import Sobre from '../pages/Sobre.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/produtos',
            component: Produtos
        },
        {
            path: '/contato',
            component: Contato
        },
        {
            path: '/sobre',
            component: Sobre
        }
    ]
})

export default router