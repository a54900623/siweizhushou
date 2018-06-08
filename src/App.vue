<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
    <app-loading :loading="pageLoading"/>
  </div>
</template>

<script>
  import appLoading from '@/components/widget/appLoading.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        pageLoading: 'pageLoading'
      })
    },
    created: function () {
    },
    mounted: function () {
      $('#app_loading').remove()
    },
    components: {
      'app-loading': appLoading
    },
    methods: {}
  }
</script>
