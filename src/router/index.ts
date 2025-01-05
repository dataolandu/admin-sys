import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Nprocess from 'nprogress'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = []
const module: Record<string, any> = import.meta.glob(['./module/*.ts'], {eager: true})


export const aboutRouter = {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue'),
    meta: {},
    children: [],
} as RouteRecordRaw;

// 组合路由信息
// import.meta.glob 为 vite 提供的特殊导入方式
// 它可以将模块中全部内容导入并返回一个Record对象
// 默认为懒加载模式 加入配置项 eager 取消懒加载
Object.keys(module).forEach(async (key) => {
    const route = module[key].default
    routes.push(route)
})
routes.push(aboutRouter)

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