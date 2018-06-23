<template>
  <!-- 搜索 -->
  <form action="" method="get" @submit.prevent="search">
    <header class="top-bar">
      <div class="top-inner g-flex">
        <mt-field class="g-flex-c" type="search" autocomplete="off"></mt-field>
        <div class="g-flex align-c" @click="search">
          <input type="submit" class="search-icon">
          <i class="iconfont icon-search"></i>
          <span class="tx">检索</span>
        </div>
      </div>
    </header>
  </form>
</template>

<script>
  export default {
    name: 'searchBox'
  }
</script>

<style lang="stylus" scoped>
  .top-bar
    /*position fixed*/
    box-sizing border-box
    top 0
    left 0
    width 100%
    padding 30px
    overflow hidden
    font-size 25px
    z-index 1
    .top-inner
      background-color: #ffffff;
      box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.1)
      border-radius: 36px;
      padding 8px 30px
    .mint-cell
      min-height inherit
      margin-right 20px
    input[type=search]
      outline none
      border none
      -webkit-appearance: none;
    .search-icon
      display none
    .icon-search
      font-size 36px
      padding-right 10px
</style>
