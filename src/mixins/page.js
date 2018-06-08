export const pageMixin = {
  created () {
  },
  methods: {
    /**
     * 下一页
     */
    async next (pageO = this.page, params = {}) {
      try {
        if (pageO.reachBottom) {
          return
        }
        await pageO.next(this, params)
      } finally {
      }
    },

    /**
     * 重新加载
     */
    async pageReload (pageO = this.page, params = {}) {
      if (pageO) {
        pageO.reset()
        await this.next(pageO, params)
      } else if (this.pages) {
        for (let page of this.pages) {
          this[page].reset()
          await this.next(this[page], params)
        }
      }
    }
  }
}
