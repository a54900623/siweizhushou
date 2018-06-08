import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/main/index.vue'
import Home from '@/components/main/home.vue'
import Foo from '@/components/main/foo.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: Home,
        meta: {}
      }
    ]
  },
  {
    name: 'foo',
    path: '/foo/:id/:name',
    component: Foo
  }
]

let router = new Router({
  mode: 'history',
  base: '/siweizhushou',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

export default router
