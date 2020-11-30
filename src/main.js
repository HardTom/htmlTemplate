// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/verification' // verification path

import Vue from 'vue'
import VCharts from 'v-charts'


// load JQ
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

// import '@/icons' // icon
import '@/permission' // permission control

Vue.use(VCharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
