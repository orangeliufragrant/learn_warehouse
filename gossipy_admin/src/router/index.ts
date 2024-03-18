import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
// import Home from '@/views/Home.vue'
// import News from '@/views/News.vue'
// import About from '@/views/About.vue'

const router = createRouter({
    history: createWebHistory(),//路由模式
    routes: [
        {
            path: "/",
            component: () => import('../views/Login.vue'),
        },
        {
            path: '/main',
            component: () => import('../views/main.vue'),
            children: [
                {
                    path: "home",
                    component: () => import('../views/Home.vue'),

                    //将收到的praams参数作为prpos传给组件
                    // props:true

                    //传递query的值
                    props(route) {
                        return route.query
                    }
                },
                {
                    path: "news",
                    component: () => import('../views/News.vue'),
                },
                {
                    path: "about",
                    component: () => import('../views/About.vue'),
                },
            ]
        },

    ]
})

export default router