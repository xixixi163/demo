import Home from '@/pages/home/index.vue'
import List from '@/pages/list/index.vue'
import Model from '@/pages/model/index.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/model',
        component: Model
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router