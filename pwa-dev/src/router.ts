import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Description from './views/Description.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/description',
      name: 'description',
      component: Description
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/banking-details',
      name: 'banking',
      component: () => import('./views/BankingDetails.vue')
    },
    {
      path: '/top-projects',
      name: 'TopProjects',
      component: () => import('./views/TopProjects.vue')
    }
  ]
})
