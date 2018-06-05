<template>
  <div class="home"></div>
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
        Toast('提示信息')
      }
    }
  }
</script>

<style scoped>

</style>
