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
      redirect: '/homepage/exam',
      component: () => import('@/views/homepage/index.vue'),
      children: [{
        path: 'message',
        name: 'message',
        component: () => import("@/views/message/index.vue")
      }, {
        path: 'record',
        name: 'record',
        component: () => import("@/views/record/index.vue")
      }, {
        path: 'exam',
        name: 'exam',
        component: () => import("@/views/exam/index.vue")
      }, {
        path: 'myinfo',
        name: 'myinfo',
        redirect: '/homepage/myinfo/history',
        component: () => import("@/views/myinfo/index.vue"),
        children: [{
          path: 'history',
          name: 'history',
          component: () => import("@/components/myinfo/history.vue")
        }, {
          path: 'editinfo',
          name: 'editinfo',
          component: () => import("@/components/myinfo/editinfo.vue")
        }]
      }]
    },

  ]
})
