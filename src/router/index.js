import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
// import Layout from '../views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {path: '/404', component: () => import('@/views/404'), hidden: true},
  {
    path: '',
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
