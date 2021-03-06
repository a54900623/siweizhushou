import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/main/index.vue'
import Home from '@/components/main/home.vue'
import ClassifyIndex from '@/components/classify/index.vue'
import RankIndex from '@/components/rank/index.vue'
import My from '@/components/main/my.vue'
import SearchIndex from '@/components/search/index.vue'
import Module from '@/components/apply/applyList.vue'
import ApplyDetail from '@/components/apply/applyDetail.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Index,
    redirect: 'home',
    children: [
      {
        // 主页
        path: 'home',
        component: Home,
        meta: {}
      },
      {
        // 分类
        path: 'classify',
        component: ClassifyIndex,
        meta: {}
      },
      {
        // 排行
        path: 'rank',
        component: RankIndex,
        meta: {}
      },
      {
        // 我的
        path: 'my',
        component: My,
        meta: {}
      }
    ]
  }, {
    // 检索
    path: '/search',
    component: SearchIndex,
    meta: {}
  },
  {
    path: '/module/:id/:name',
    component: Module,
    meta: {}
  },
  {
    path: '/apply/:id',
    component: ApplyDetail,
    meta: {}
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
