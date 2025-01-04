import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Nprocess from 'nprogress'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/index.vue'),
        meta: {},
        children: []
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/about/index.vue'),
        meta: {},
        children: []
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    Nprocess.start()
    next()
})

router.afterEach(() => {
    Nprocess.done()
})

export default router;