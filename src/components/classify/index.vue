<!-- 分类主页 -->
<template>
  <div class="classify-bd">
    <!-- 搜索 -->
    <div class="">
      <mt-search></mt-search>
    </div>
    <!-- 分类 -->
    <!-- 游戏 -->
    <div class="container">
      <div class="disc-tt mt-0 g-flex s-bb s-bt">
        <a class="g-flex-c">
          游戏
        </a>
      </div>
      <ul class="apply-list-item-new">
        <li class="apply-item-new f-cb" v-for="item in 6" :key="item">
          <div class="item-pic">
            <img
              src="https://tse2-mm.cn.bing.net/th?id=OIP.zhvykjGi-XOzifCtwcsU2wAAAA&w=183&h=183&c=7&o=5&pid=1.7"/>
          </div>
          <div class="item-content s-bb">休闲益智<i class="arrow iconfont icon-right"></i></div>
        </li>
      </ul>
    </div>
    <!-- 应用 -->
    <div class="container">
      <div class="disc-tt g-flex s-bb s-bt">
        <a class="g-flex-c">
          应用
        </a>
      </div>
      <ul class="apply-list-item-new">
        <li class="apply-item-new f-cb" v-for="item in 6" :key="item">
          <div class="item-pic">
            <img
              src="https://tse2-mm.cn.bing.net/th?id=OIP.zhvykjGi-XOzifCtwcsU2wAAAA&w=183&h=183&c=7&o=5&pid=1.7"/>
          </div>
          <div class="item-content s-bb">休闲益智<i class="arrow iconfont icon-right"></i></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'classifyIndex',
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/var.styl'
  .container
    .disc-tt
      margin-top 20px
      background c_white
      padding 25px 30px
      align-items center
      font-size 30px
    .apply-list-item-new
      background-color c_white
      padding-bottom 20px
      .apply-item-new
        width 100%
        padding 0px 20px
        background-color c_white
        .item-pic
          width 90px
          float left
          margin-right 30px
          padding 10px 0px
          img
            width 90px
            height 90px
            border-radius 100%
        .item-content
          float left
          height 120px
          line-height 120px
          width 83%
          width -webkit-calc(100% - 130px)
          width calc(100% - 130px)
          .arrow
            float right
            color #a8a8a8
</style>
