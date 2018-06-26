<!-- 分类主页 -->
<template>
  <div class="classify-bd">
    <!-- 搜索 -->
    <search-box></search-box>
    <!-- 分类 -->
    <!-- 游戏 -->
    <div class="container">
      <div class="disc-tt mt-0 g-flex s-bb s-bt">
        <a class="g-flex-c">
          游戏
        </a>
      </div>
      <ul class="apply-list-item-new">
        <li class="apply-item-new f-cb" v-for="item in gameList" :key="item.name" @click="openDetail('2', item.name)">
          <div class="item-pic">
            <img :src="item.pic" @error="errImg" alt=""/>
          </div>
          <div class="item-content s-bb">{{ item.name }}<i class="arrow iconfont icon-right"></i></div>
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
        <li class="apply-item-new f-cb" v-for="item in applyList" :key="item.name" @click="openDetail('1', item.name)">
          <div class="item-pic">
            <img :src="item.pic" @error="errImg" alt=""/>
          </div>
          <div class="item-content s-bb">{{ item.name }}<i class="arrow iconfont icon-right"></i></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import searchBox from '@/components/widget/searchBox.vue'

  export default {
    name: 'classifyIndex',
    data () {
      return {
        gameList: [
          {
            name: '休闲益智',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/173521e1b7694f288dbe9e02151ec8ae.png'
          },
          {
            name: '动作射击',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          },
          {
            name: '赛车竞速',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          },
          {
            name: '棋牌桌游',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          },
          {
            name: '经营养成',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          }
        ],
        applyList: [
          {
            name: '社交通讯',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/173521e1b7694f288dbe9e02151ec8ae.png'
          },
          {
            name: '影音播放',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          },
          {
            name: '系统工具',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          },
          {
            name: '拍摄美化',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          },
          {
            name: '理财购物',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          }
        ]
      }
    },
    methods: {
      openDetail (id, name) {
        this.$router.push({
          path: `/module/${id}/${name}`
        })
      }
    },
    components: {
      'search-box': searchBox
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
