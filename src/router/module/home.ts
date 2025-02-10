export default {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    redirect: '/dashboard',
    meta: {
        title: '首页'
    },
    children: [
        {
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index.vue'),
            meta: {
                title: '控制台'
            }
        },
        {
            path: 'user',
            name: 'User',
            component: () => import('@/views/system/user/index.vue'),
            meta: {
                title: '用户管理'
            }
        },
    ]
}