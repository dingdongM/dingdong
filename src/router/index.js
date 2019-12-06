/*
 * @Author: your name
<<<<<<< HEAD
 * @Date: 2019-11-26 16:40:31
 * @LastEditTime: 2019-12-06 09:04:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13d:\dingdong\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Eatwhat from '@/pages/EatwhatPage'
import EatDetailPage from '@/pages/EatDetailPage'
import sharePage from '@/pages/sharePage'
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
    },
    {
      path: '/EatDetailPage',
      name: 'EatDetailPage',
      component: EatDetailPage
    },
    {
      path: '/sharePage',
      name: 'sharePage',
      component: sharePage,
      props:true
=======
 * @Date: 2019-11-26 10:20:06
 * @LastEditTime: 2019-12-05 17:52:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonserverf:\work\dingdong\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ClassifyPages from '@/pages/ClassifyPages'
import DetailsPages from '@/pages/DetailsPages'
import ShoppcarPages from '@/pages/ShoppcarPages'
import DetCommentPages from '@/pages/DetCommentPages'

import IndexPage from '@/pages/IndexPage'
import SearchPage from '@/pages/SearchPage'
import SearchDetail from '@/pages/SearchDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
		{
		  path: '/IndexPage',
		  name: 'IndexPage',
		  component: IndexPage
		},
    {
      path: '/SearchPage',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/ClassifyPages',
      name: 'ClassifyPages',
      component: ClassifyPages
    },
    {
      path: '/ClassifyPages/:navid',
      name: 'ClassifyPages',
      component: ClassifyPages,
      props:true
    },
    // {
    //   path: '/EatwhatPage',
    //   name: 'EatwhatPage',
    //   component: EatwhatPage
    // },
    {
      path: '/ShoppcarPages',
      name: 'ShoppcarPages',
      component: ShoppcarPages
    },
    // {
    //   path: '/MyCenterPage',
    //   name: 'MyCenterPage',
    //   component: MyCenterPage
    // },
    
    {
      path: '/DetailsPages/:goodsId',
      name: 'DetailsPages',
      component: DetailsPages,
      props:true
    },
    {
      path: '/DetailsPages',
      name: 'DetailsPages',
      component: DetailsPages,
      props:true
    },
    {
      path: '/ClassifyPages',
      name: 'ClassifyPages',
      component: ClassifyPages,
      
    },
    {
      path: '/ShoppcarPages',
      name: 'ShoppcarPages',
      component: ShoppcarPages
    },
    {
      path: '/DetCommentPages/:goodsId',
      name: 'DetCommentPages',
      component: DetCommentPages,
      props:true
    },
    {
      path: '/SearchDetail',
      name: 'SearchDetail',
      component:SearchDetail
>>>>>>> wentan
    }
  ]
})
