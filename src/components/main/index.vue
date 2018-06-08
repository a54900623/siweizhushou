<template>
  <div class="mn-idx-bd">
    <ul class="g-ft-navs">
      <li @click="changeNavIdx(0)" :class="{'sel': navIdx === 0}">
        <i class="iconfont"></i>
        <p>推荐</p>
      </li>
      <li @click="changeNavIdx(1)" :class="{'sel': navIdx === 1}">
        <i class="iconfont"></i>
        <p>分类</p>
      </li>
      <li @click="changeNavIdx(2)" :class="{'sel': navIdx === 2}">
        <i class="iconfont"></i>
        <p>排行</p>
      </li>
      <li>
        <i class="iconfont"></i>
        <p>管理</p>
      </li>
      <li @click="changeNavIdx(4)" :class="{'sel': navIdx === 4}">
        <i class="iconfont"></i>
        <p>我的</p>
      </li>
    </ul>
    <div class="g-ft-p"></div>
    <div class="">
      <transition>
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive">
        </router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  import wxApi from '@/api/wx'

  const NAV_LINK = ['/home', '/classify', '/rank', '/manager', '/my']
  export default {
    name: 'index',
    data () {
      return {
        navIdx: 0,
        homeInfo: {}
      }
    },
    computed: {},
    props: [],
    components: {},
    async activated () {
      await this.initWx()
    },
    created: async function () {
      this.refreshNav()
      await this.initWx()
    },
    methods: {
      async initWx () {
        let that = this
        await wxApi.initWxConfig.call(this)
        wx.ready(res => {
          wxApi.showAllNonBaseMenuItem()
          wxApi.initShare({
            title: that.homeInfo.name,
            desc: that.homeInfo.about,
            link: location.origin + '/shop/home',
            imgUrl: that.homeInfo.logo
          })
        })
      },
      refreshNav () {
        let i = 0
        for (var item of NAV_LINK) {
          if (this.$route.fullPath === item || this.$route.fullPath.indexOf(item) === 0) {
            this.navIdx = i
            break
          }
          i++
        }
      },
      changeNavIdx (idx) {
        if (idx === this.navIdx) {
          return
        }
        this.navIdx = idx
        this.$router.push(NAV_LINK[idx])
      }
    }
  }
</script>
<!-- 11 -->
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/css/var.styl'
  .mn-idx-bd
    .g-ft-p
      height 98px
    .g-ft-navs
      position fixed
      left 0
      top 0
      /*bottom 0*/
      display flex
      height: 98px;
      background: #fff;
      align-items: center;
      position: fixed;
      width: 100%;
      z-index 3
      /*box-shadow: 1px 1px 24px 0px #CAC9C9;*/
      li
        flex 1
        text-align center
        color: #5D656B;
        box-sizing: border-box;
        display: block;
        font-size: 22px;
        position relative
        .cart-num
          position absolute
          top: -6px;
          left: 57%;
        &.sel
          color: c_style
        .iconfont
          font-size 48px
</style>
