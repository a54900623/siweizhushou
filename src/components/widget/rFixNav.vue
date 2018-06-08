<!-- 回到顶部 -->
<template>
  <section class="u-rfix-nav">
    <div class="fix-nav to-top" v-show="toTopShow" @click="toTop"><i class="iconfont icon-top1"></i></div>
  </section>
</template>

<script>
  export default {
    name: 'rFixNav',
    data () {
      return {
        toTopShow: false,
        topShowH: 300
      }
    },
    props: {
      el: {
        type: String
      }
    },
    components: {},
    created: function () {
    },
    updated: function () {
    },
    mounted: function () {
      let that = this
      let scrollTimer = null
      $(this.el || window).on('scroll', function (e) {
        if (scrollTimer) {
          clearTimeout(scrollTimer)
        }
        scrollTimer = setTimeout(function () {
          that.activate(e)
        }, 300)
      })
    },
    destroyed: function () {
      $(this.el || window).off('scroll')
    },
    methods: {
      toTop () {
        $(this.el || window).scrollTop(0)
      },
      activate (e) {
        let el
        if (e.target.children.length > 1) {
          $(e.target).each(function () {
            if ($(this).is(':visible')) {
              el = this
              return false
            }
          })
        } else {
          el = e.target
        }
        var scrollTop = el.scrollTop || document.body.scrollTop
        if (scrollTop > this.topShowH) {
          this.toTopShow = true
        } else {
          this.toTopShow = false
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import '../../assets/css/function.styl'
  .u-rfix-nav
    position: fixed;
    right: 10px;
    bottom: 180px;
    width: 80px;
    text-align center
    z-index: 100
    .fix-nav
      width 66px
      height 66px
      line-height 66px
      border-radius 50%
      background-color rgba(233, 59, 59, 0.5)
      color: #fff
</style>
