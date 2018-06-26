<!-- 排行主页 -->
<template>
  <div class="rank-bd">
    <!-- 搜索 -->
    <search-box></search-box>
    <!-- 排行 -->
    <!-- 游戏周排行 -->
    <div class="container">
      <div class="disc-tt mt-0 g-flex s-bb s-bt">
        <a class="g-flex-c">
          游戏周排行
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
      <ul class="apply-list-item">
        <download-list-item :applyItem="item" :applyItemIndex="index" v-for="(item, index) in gameList"
                            :key="item.name"></download-list-item>
      </ul>
    </div>
    <!-- 应用周排行 -->
    <div class="container">
      <div class="disc-tt g-flex s-bb s-bt">
        <a class="g-flex-c">
          应用周排行
        </a>
        <p class="arrow-r">更多<i class="arrow iconfont icon-right"></i></p>
      </div>
      <ul class="apply-list-item">
        <download-list-item :applyItem="item1" :applyItemIndex="index1" v-for="(item1, index1) in applyList"
                            :key="item1.name"></download-list-item>
      </ul>
    </div>
  </div>

</template>

<script>
  import downloadListItem from '@/components/widget/downloadListItem.vue'
  import searchBox from '@/components/widget/searchBox.vue'

  export default {
    name: 'rankIndex',
    data () {
      return {
        gameList: [
          {name: '王者荣耀', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/173521e1b7694f288dbe9e02151ec8ae.png'},
          {name: '开心消消乐', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'},
          {name: '超级玛丽', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'},
          {name: '绝地求生', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'},
          {name: '嘻嘻哈哈', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'}
        ],
        applyList: [
          {name: '微博', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'},
          {name: '优酷', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'},
          {name: '抖音', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'},
          {name: '快播', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'},
          {name: '快手', pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'}
        ]
      }
    },
    components: {
      'download-list-item': downloadListItem,
      'search-box': searchBox
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/var.styl'
  .disc-tt
    margin-top 20px
    background #fff
    padding 25px 30px
    align-items center
    font-size 30px

  .apply-list-item
    background-color c_white
    padding-bottom 20px
</style>
