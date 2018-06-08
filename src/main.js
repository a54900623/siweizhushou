// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/mint-ui.css'
import '@/assets/css/common.styl'
import fastClick from 'fastClick'
import Vue from 'vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'

import Http from '@/api/axios-index'
import App from './App'
import Lang from '@/util/Lang'
import CVal from '@/util/ConstVal'
import wxApi from '@/api/wx'

Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  next()
})

Vue.mixin({
  methods: {
    /**
     * 打开图片
     * @param e
     */
    openImage (e) {
      let o = e.target
      var $parent = $(o).parent()
      if ($parent.is('a')) {
        var href = $parent.attr('href') || '#'
        location.href = href
        return
      }
      if (Lang.browserOpt().weixin) {
        var query = $(o).attr('name')
        var imgs = $('[name=' + query + ']')
        var srcis = []
        for (var i = 0; i < imgs.length; i++) {
          srcis.push($(imgs[i]).attr('srci'))
        }
        wxApi.previewImage($(o).attr('srci'), srcis)
      }
      e.preventDefault()
    },
    errImg (e) {
      e.target.src = require('@/assets/img/404.png')
    }
  }
})
Vue.use(Http)
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  created () {
    Lang.setStorage(CVal.STORE_FIRST_URL, location.href)
  },
  template: '<App/>'
})
fastClick.attach(document.body)
