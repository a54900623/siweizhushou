<!-- 主页 -->
<template>
  <div class="home-bd">
    <!-- 搜索 -->
    <search-box></search-box>
    <!-- 游戏精品 -->
    <div class="game-classic">
      <div class="disc-tt mt-0 g-flex s-bb s-bt" @click="openModule(1, '游戏精品')">
        <a class="g-flex-c">
          游戏精品
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
      <ul class="game-item-list f-cb">
        <li class="game-item s-bb" v-for="item in 4" :key="item" @click="openDetail(item)">
          <div class="inner s-br">
            <div class="g-flex-c g-flex">
              <div class="item-pic"><img
                src="http://txztest-1252097407.image.myqcloud.com/388bb942ed8640e4bcce663b5d7b49ba/image/1525340730893.jpg"
                @error="errImg" alt=""></div>
              <div class="g-flex-c">
                <p class="tt ellipsis-1">360手机</p>
                <p class="item-desc">14.37M</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 游戏推荐 -->
    <div class="game-recommend">
      <div class="disc-tt g-flex s-bb s-bt" @click="openModule(2, '游戏推荐')">
        <a class="g-flex-c">
          游戏推荐
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
      <ul class="game-item-list f-cb">
        <li class="game-item s-bb" v-for="item in 4" :key="item">
          <div class="inner s-br">
            <div class="g-flex-c g-flex">
              <div class="item-pic"><img
                src="http://txztest-1252097407.image.myqcloud.com/388bb942ed8640e4bcce663b5d7b49ba/image/1525340730893.jpg"
                @error="errImg" alt=""></div>
              <div class="g-flex-c">
                <p class="tt ellipsis-1">360手机</p>
                <p class="item-desc">14.37M</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 应用精品 -->
    <div class="apply-classic">
      <div class="disc-tt g-flex s-bb s-bt" @click="openModule(3, '应用精品')">
        <a class="g-flex-c">
          应用精品
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
      <ul class="game-item-list f-cb">
        <li class="game-item s-bb" v-for="item in 4" :key="item">
          <div class="inner s-br">
            <div class="g-flex-c g-flex">
              <div class="item-pic"><img
                src="http://txztest-1252097407.image.myqcloud.com/388bb942ed8640e4bcce663b5d7b49ba/image/1525340730893.jpg"
                @error="errImg" alt=""></div>
              <div class="g-flex-c">
                <p class="tt ellipsis-1">360手机</p>
                <p class="item-desc">14.37M</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 应用推荐 -->
    <div class="apply-recommend">
      <div class="disc-tt g-flex s-bb s-bt" @click="openModule(4, '应用推荐')">
        <a class="g-flex-c">
          应用推荐
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
      <ul class="game-item-list f-cb">
        <li class="game-item s-bb" v-for="item in 4" :key="item">
          <div class="inner s-br">
            <div class="g-flex-c g-flex">
              <div class="item-pic"><img
                src="http://txztest-1252097407.image.myqcloud.com/388bb942ed8640e4bcce663b5d7b49ba/image/1525340730893.jpg"
                @error="errImg" alt=""></div>
              <div class="g-flex-c">
                <p class="tt ellipsis-1">360手机</p>
                <p class="item-desc">14.37M</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import searchBox from '@/components/widget/searchBox.vue'

  export default {
    name: 'home',
    data () {
      return {
        info: {
          gameClassic: [5],
          gameRecommend: [5],
          applyClassic: [5],
          applyRecommend: [5]
        }
      }
    },
    created: function () {
    },
    methods: {
      openModule (model, modelName) {
        this.$router.push({
          path: `/module/${model}/${modelName}`
        })
      },
      openDetail (id) {
        this.$router.push({
          path: `apply/${id}`
        })
      }
    },
    components: {
      'search-box': searchBox
    }
  }
</script>

<style lang="stylus" scoped>
  .disc-tt
    margin-top 20px
    background #fff
    padding 25px 30px
    align-items center
    font-size 30px

  .game-item-list
    .game-item
      float left
      width 50%
      box-sizing border-box
      background #fff
      .inner
        padding 20px
        padding-right 10px
        .item-pic
          width 140px
          height 140px
          margin-right: 12px;
          img
            width 100%
            height 100%
        .item-desc
          font-size 24px
          color: #909090
          margin-top: 10px
      .item-down-btn
        border 1px solid #efefef
        border-radius 10px
        width 80%
        height 70px
        line-height 70px
        display block
        text-align center
        margin-top 20px
</style>
