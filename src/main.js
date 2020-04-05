import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

// 导入全局样式表
import './assets/css/global.css'
//导入axios
import axios from 'axios'
//添加axios到Vue
Vue.prototype.$axios = axios
axios.defaults.baseURL='/api'
//设置请求拦截器
axios.interceptors.request.use(config =>{
  //每个请求在请求之前给请求头设置令牌
  config.headers.Authorization = window.sessionStorage.getItem('token')
    return config;
})
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
