import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'//elementui
import 'element-ui/lib/theme-chalk/index.css'  // elementui样式
Vue.use(ElementUI)

import router from './router'   //路由index.js
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
