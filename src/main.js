/*
 * @Author: your name
<<<<<<< HEAD
 * @Date: 2019-11-26 16:40:31
 * @LastEditTime: 2019-11-30 20:10:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\main.js
=======
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-06 15:02:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\main.js
>>>>>>> wentan
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import './assets/font/iconfont.css';
import store from './store'

Vue.config.productionTip = false
=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font/iconfont.css';
import './assets/font2/iconfont.css';

import axios from 'axios';
axios.defaults.baseURL = '/api/';

import store from './store';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import vpay from 'vpay';
// import axios from 'axios';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(vpay);
>>>>>>> wentan

/* eslint-disable no-new */
new Vue({
  el: '#app',
<<<<<<< HEAD
  router,
  store,
=======
  store,
  router,
>>>>>>> wentan
  components: { App },
  template: '<App/>'
})
