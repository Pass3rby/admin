import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Register from './views/register'
import Login from './views/login'

 const router=Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index',

    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]

});

//路由守卫


export default router;


