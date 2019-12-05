// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//阿里图标
import './assets/font/iconfont.css';

//ElementUI组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//反向代理

import axios from 'axios';
axios.defaults.baseURL = '/api/';


Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
