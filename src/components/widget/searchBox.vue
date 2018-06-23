<template>
  <!-- 搜索 -->
  <div class="hd">
    <div class="hd-sch content" @click="openSearch">
      <div class="hd-bth">
        <i class="icon iconfont icon-search"></i>
        <span>检索</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'searchBox'
  }
</script>

<style lang="stylus" scoped>
  .hd
    /*position relative*/
    width 100%
    padding 30px
    .hd-sch
      width 100%
      margin 0 auto
      height 62px
      line-height 62px
      top 9px
      background #fff
      box-shadow 0px 2px 18px 0px rgba(0, 0, 0, 0.1)
      border-radius 31px /*left 50%
      transform translateX(-50%)*/
      box-sizing border-box
      z-index 100
      .hd-bth
        float right
        padding-right 32px
        i
          width 29px
          height 29px
        span
          font-size 25px
          color rgba(26, 26, 26, 0.78);
          position relative
          top -3px
    .hd-info
      height 77px
      background-color rgba(0, 0, 0, 0.45)
      position absolute
      width 100%
      bottom 0
      z-index 1
      img
        width 90px
        height 90px
        border-radius 90px
        box-shadow 0px 2px 13px 0px rgba(0, 0, 0, 0.21);
        position absolute
        top 15px
        left 30px
      .g-flex
        margin-left 135px
        height 77px
        align-items center
        p
          font-size 35px
          line-height 77px;
          color #fff
          letter-spacing 1px
      .fav-btn
        width 145px
        height 44px
        line-height 44px
        background-color c_style
        border-radius 22px
        text-align center
        color #fff
        font-size 0
        margin-right 20px
        .iconfont
          font-size 28px
          margin-top 10px
          position relative
        span
          font-size 25px
          position relative
</style>
