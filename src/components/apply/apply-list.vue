<template>
  <div class="apply-list-bd">
    <!-- 搜索 -->
    <search-box></search-box>
    <ul class="apply-list-item">
      <rank-list-item :applyItem="item" :applyItemIndex="index" v-for="(item, index) in dataList"
                      :key="item.name"></rank-list-item>
    </ul>
  </div>
</template>

<script>
  import applyListItem from '@/components/apply/widget/applyListItem.vue'
  import searchBox from '@/components/widget/searchBox.vue'
  import Lang from '@/util/Lang'

  export default {
    name: 'applyList',
    data () {
      return {
        dataList: [
          {
            name: '王者荣耀',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/173521e1b7694f288dbe9e02151ec8ae.png'
          },
          {
            name: '开心消消乐',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          },
          {
            name: '超级玛丽',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          },
          {
            name: '绝地求生',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          },
          {
            name: '嘻嘻哈哈',
            pic: 'http://appimg.hicloud.com/hwmarket/files/application/icon144/04359efbf4e84d8fb936f990301dd87d.png'
          }
        ]
      }
    },
    created () {
      Lang.changeTitle(this.$route.params.name)
    },
    components: {
      'rank-list-item': applyListItem,
      'search-box': searchBox
    }
  }
</script>

<style scoped>

</style>
