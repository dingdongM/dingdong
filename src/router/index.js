/*
 * @Author: your name
 * @Date: 2019-11-26 16:40:31
 * @LastEditTime: 2019-11-30 20:02:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Eatwhat from '@/pages/EatwhatPage'
import EatDetailPage from '@/pages/EatDetailPage'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Eatwhat',
      component: Eatwhat
    },
    {
      path: '/EatDetailPage/:detailname',
      name: 'EatDetailPage',
      component: EatDetailPage,
      props:true
    }
  ]
})
