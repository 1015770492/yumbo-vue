import Vue from 'vue'  // vue
import VueRouter from 'vue-router'  // 路由器
Vue.use(VueRouter)  // 注册组件使用路由器

import pcRouter from './pc-router'
import Index from "@/components/computerUI/visitor/index/Index"; // 网站首页
// import Login from "@/components/common/login_Register_Reset/login/Login";// 登录页面
// import AdminMeau from "@/components/computerUI/userConsole/layout/AdminMeau";// 用户后台管理

export default new VueRouter({
    // mode:'history',
    routes: [
        /**
         * 引入pc端路由
         */
        ...pcRouter,
        /**首页**/
        {
            path: '/',
            component: Index,
        },
    ]
})
