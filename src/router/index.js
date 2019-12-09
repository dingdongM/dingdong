/*
 * @Author: 潘金红
 * @Date: 2019-11-26 10:28:38
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-29 19:59:03
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import MyCenterPage from '@/pages/MyCenterPage'
import LoginPage from '@/pages/LoginPage'
import SettingPage from '@/pages/SettingPage'
import PersonalInfoPage from '@/pages/PersonalInfoPage'
import RemoveAccountPage from '@/pages/RemoveAccountPage'
import MyWalletPage from '@/pages/MyWalletPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyCenterPage',
      meta:{index:0},
      component: MyCenterPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      meta:{index:1},
      component: LoginPage
    },
    {
      path:'/SettingPage',
      name:'SettingPage',
      meta:{index:2},
      component:SettingPage
    },
    {
      path:'/MyCenterPage',
      name:'MyCenterPage',
      meta:{index:0},
      component:MyCenterPage
    },
    {
      path:'/PersonalInfoPage',
      name:'PersonalInfoPage',
      meta:{index:3},
      component:PersonalInfoPage
    },
    {
      path:'/RemoveAccountPage',
      name:'RemoveAccountPage',
      meta:{index:4},
      component:RemoveAccountPage
    },
    {
      path:'/MyWalletPage',
      name:'MyWalletPage',
      meta:{index:5},
      component:MyWalletPage
    }
  ]
})
