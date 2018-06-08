<!-- 加载中 -->
<template>
  <transition name="loading">
    <div class="app-loading" v-if="this.loading">
      <img src="../../assets/img/loading.gif" alt="loading"/>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'appLoading',
    data () {
      return {}
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-loading
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 19921127;
    background: #fff;
    top: 0;
    img
      position: absolute;
      top: 50%;
      left: 50%;
      width: 45px; /*no*/
      height: 64px; /*no*/
      transform: translateY(-50%) translateX(-50%);

  /*transition 动画*/
  .loading-enter-active
    opacity 1
  .loading-leave-active
    transition: all .5s ease;
  .loading-leave-to
    opacity 0
</style>
