import Vue from 'vue'
import Router from 'vue-router'

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
      path: '/SearchDetail',
      name: 'SearchDetail',
      component: SearchDetail
    }
  ]
})
