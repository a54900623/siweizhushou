<!-- 分页 -->
<template>
  <div class="z-page-stat">
    <p v-show="page.loading" class="page-loading">
      <mt-spinner type="double-bounce" color="#e93b3b" class="spinner"></mt-spinner>
      加载中...
    </p>
    <p class="reach-btm" v-show="btmTextShow && !page.empty && page.reachBottom">到底了~</p>
    <div class="page-empty" v-show="!page.loading && page.empty">
      <div class="empty-inner">
        <div class="img-bg"><img v-if="!emptyImg || emptyImg == 1" src="../../assets/img/status_1.png" @error="errImg"
                                 alt=""></div>
        <p class="tx">{{emptyText}}</p>
        <div class="empty-ctn">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pageStatus',
    data () {
      return {}
    },
    props: {
      'page': {},
      'emptyImg': {},
      'emptyText': {
        type: String,
        default: '此地无银~'
      },
      'btmTextShow': { // 到底了文字要不要显示
        type: Boolean,
        default: true
      }
    },
    components: {},
    created: function () {
    },
    mounted: function () {
    },
    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import '../../assets/css/function.styl'
  .z-page-stat
    text-align center
    font-size 30px
    letter-spacing 1px
    color: #757575
    line-height 60px
    .page-loading
      .spinner
        display inline-block
        vertical-align middle
        margin-right 20px
    .page-empty
      position absolute
      width 100%
      top: 50%
      transform: translate(0, -50%);
      .empty-inner
        width: 320px;
        margin: 0 auto;
      .img-bg
        position relative
        display inline-block
        width 254px
        height 254px
        background #d6d6d6
        border-radius 50%
      img
        width: 93px;
        margin-top 28px
      .tx
        color: #8c8c8c
        margin-top 60px
    .empty-ctn
      .u-btn
        margin-top 90px
        margin-left 20px
        border: 1px solid #464646
        box-shadow none
        width 168px
        height 62px
        line-height 62px
</style>
