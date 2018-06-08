export const appLoadingMixin = {
  data () {
    return {}
  },
  async created () {
    this.appLoading()
  },
  methods: {
    appLoading () {
      this.$store.commit('setLoading')
    },
    appLoaded () {
      this.$store.commit('setLoaded')
    }
  },
  deactivated: function () {
    $(window).off('scroll')
  },
  activated () {
    // if (this.$route.meta.scrollDom) {
    //   $(this.$route.meta.scrollDom).scrollTop(this.$store.state.scroll.map[this.$route.path])
    // }
  }
}
