import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'welcome',
      component: () => import('@/views/welcome/index.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      compnent: () => import('@/views/welcome/index.vue')
    }
  ]
})
