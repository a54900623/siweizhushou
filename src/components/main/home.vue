<!-- 主页 -->
<template>
  <div class="home-bd">
    <!-- 搜索 -->
    <div></div>
    <!-- 游戏精品 -->
    <div class="game-classic">
      <div class="disc-tt g-flex s-bb s-bt" @click="openModule(2)">
        <a class="g-flex-c">
          游戏精品
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
      <ul class="game-item-list">
        <li class="game-item">
          <div>
            <!-- 左边 -->
            <div></div>
            <!-- 右边 -->
            <div></div>
          </div>
          <!-- 下边 -->
          <div></div>
        </li>
      </ul>
    </div>
    <!-- 游戏推荐 -->
    <div class="game-recommend">
      <div class="disc-tt g-flex s-bb s-bt" @click="openModule(2)">
        <a class="g-flex-c">
          游戏推荐
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
    </div>
    <!-- 应用精品 -->
    <div class="apply-classic">
      <div class="disc-tt g-flex s-bb s-bt" @click="openModule(2)">
        <a class="g-flex-c">
          应用精品
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
    </div>
    <!-- 应用推荐 -->
    <div class="apply-recommend">
      <div class="disc-tt g-flex s-bb s-bt" @click="openModule(2)">
        <a class="g-flex-c">
          应用推荐
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: ''
      }
    },
    created: function () {
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
  .disc-tt
    margin-top 20px
    background #fff
    padding 25px 30px
    align-items center
    font-size 30px
</style>
