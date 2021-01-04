import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'//elementui
import 'element-ui/lib/theme-chalk/index.css'  // elementui样式
Vue.use(ElementUI)

import mavonEditor from 'mavon-editor'  // markdown编辑器
import 'mavon-editor/dist/css/index.css'// markdown样式
Vue.use(mavonEditor)

import router from './router'   //路由index.js
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
