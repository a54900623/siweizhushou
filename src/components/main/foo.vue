<!-- query是通过router-link -->
<!-- params是通过路由 -->
<!-- router是对象 -->
<!-- route是实例 -->
<template>
  <div class="foo">这里是foo页面444444444444444444444
    <p>
      query ---- id : {{ $route.query.id }} name : {{ $route.query.name }}
    </p>
    <p>
      params ---- id : {{ $route.params.id}} name : {{ $route.params.name }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'foo',
    data () {
      return {}
    },
    created: function () {

    },
    watch: {
      $route (to, from) {
        console.info(to)
        console.info(from)
        // 对路由变化作出响应...
      }
    }
  }
</script>

<style scoped>

</style>
