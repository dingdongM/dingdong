/*
 * @Author: 潘金红
 * @Date: 2019-11-26 10:28:38
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-30 16:33:10
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "../static/iconfont.css"
import axios from "axios"
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
import Element from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import $ from "jquery"
import plus from "vue-h5-plus"
import vpay from "vpay"

axios.defaults.baseURL="http://10.35.161.6:3000"
Vue.use(Mint)
Vue.use(Element)
Vue.use(plus)
Vue.use(vpay)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
