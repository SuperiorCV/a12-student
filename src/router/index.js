import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/welcome/sign'
    },
    {
      path: '/welcome',
      redirect: '/sign',
      component: () => import('@/views/welcome/index.vue'),
      children: [{
          path: 'sign',
          name: 'sign',
          component: () => import('@/components/welcome/sign.vue'),
        },
        {
          path: 'account',
          name: 'account',
          component: () => import("@/components/welcome/account.vue")
        }
      ]
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import('@/views/homepage/index.vue'),
      children: [{
        path: 'message',
        name: 'message',
        component: () => import("@/views/message/index.vue")
      }, {
        path: 'record',
        name: 'record',
        component: () => import("@/views/record/index.vue")
      }]
    },

  ]
})
