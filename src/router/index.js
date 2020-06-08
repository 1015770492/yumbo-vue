
import Vue from 'vue'  // vue
import VueRouter from 'vue-router'  // 路由器
Vue.use(VueRouter)  // 注册组件使用路由器
export default new VueRouter({
    // mode:'history',
    routes: [
        /**首页**/
        {
            path: '/',
            redirect:'/pc/login'
            // component: HelloWorld
        },
    ]
})
