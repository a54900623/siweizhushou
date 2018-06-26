<!-- 排行页组件 -->
<template>
  <li class="apply-item f-cb">
    <div class="item-rank">{{ applyItemIndex + 1}}</div>
    <div class="item-pic">
      <img :src="applyItem.pic" @error="errImg" alt=""/>
    </div>
    <div class="item-content s-bb">
      <div>
        <p class="title">{{ applyItem.name }}</p>
        <p class="desc">106.8MB</p>
      </div>
      <button class="normal-btn">安装</button>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'rankListItem',
    data () {
      return {}
    },
    props: ['applyItem', 'applyItemIndex']
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/css/var.styl'
  .apply-item
    padding 0px 30px
    background-color c_white
    .item-rank
      width 40px
      float left
      height 80px
      line-height 80px
      color #cccccc
    .item-pic
      width 120px
      float left
      margin-right 30px
      padding 20px 0px
      img
        width 120px
        height 120px
        border-radius 10%
    .item-content
      float left
      width 72%
      width -webkit-calc(100% - 200px)
      width calc(100% - 200px)
      margin-top 30px
      padding-bottom 40px
      .arrow
        float right
        color #a8a8a8
      .title
        width: calc(100% - 140px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #000;
        margin-bottom: 12px;
      .desc
        font-size 24px
    .normal-btn
      min-width: 120px;
      padding: 0 24px;
      height: 52px;
      background: #f7f7f7;
      font-size: 24px;
      color: #007dff;
      border: 1px solid rgba(0, 0, 0, .1);
      border-radius: 26px;
      text-align: center;
      line-height: 48px;
      position: absolute;
      right: 0;
      top: 0;
</style>
