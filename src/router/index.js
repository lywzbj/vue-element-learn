import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/Home.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
]

const router = new VueRouter({
  routes
})

//挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  //to代表将要访问的路径
  //from 代表从哪个路径跳转过来的
  //next 是一个函数，表示放行

  //如果是访问登录页面，则直接放行
  if(to.path === '/login'){
    return next();
  }

  //获取token
  const tokenBody = window.sessionStorage.getItem('token');
  //如果没有token则跳转到登录页面
  if(!tokenBody){
    return next('/login');
  }

    next();
})



export default router
