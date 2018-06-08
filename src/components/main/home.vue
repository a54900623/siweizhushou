<template>
  <div class="home">
    <div @click="goFoo">跳转到goFoo</div>
    <div @click="goFoo2">跳转到goFoo2</div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'

  export default {
    name: 'home',
    data () {
      return {
        msg: ''
      }
    },
    created: function () {
      this.showToast()
    },
    methods: {
      showToast: function () {
        Toast('进入到Home')
      },
      goFoo: function () {
        this.$router.push({
          path: '/foo/111/555'
        })
      },
      goFoo2: function () {
        this.$router.push({
          path: '/foo/3333/8888'
        })
      }
    }
  }
</script>

<style scoped>

</style>
