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
        redirect: '/homepage/myinfo/me',
        component: () => import("@/views/myinfo/index.vue"),
        children: [{
          path: 'me',
          name: 'me',
          component: () => import("@/components/myinfo/me.vue"),
        }, {
          path: 'editinfo',
          name: 'editinfo',
          component: () => import("@/components/myinfo/editinfo.vue")
        }, ]
      }, {
        path: 'waiting',
        name: 'waiting',
        component: () => import("@/views/waiting/index.vue")
      }, {
        path: 'wrong',
        name: 'wrong',
        component: () => import("@/views/wrong/index.vue")
      }, {
        path: 'about',
        name: 'about',
        component: () => import("@/views/about/index.vue")
      }]
    },
    {
      path: '/testing',
      name: 'testing',
      component: () => import("@/views/testing/index.vue")
    },
    {
      path: '/result',
      name: 'result',
      component: () => import("@/views/result/index.vue")
    }
  ]
})
