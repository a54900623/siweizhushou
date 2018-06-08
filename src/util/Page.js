import base from '@/api/base'

export default class Pagination {
  constructor (url, processFunc, isMock = false) {
    // 数据访问地址
    this.url = url
    // 数据集合
    this.list = []
    // 第几页
    this.page = 1
    // 加载数据条数
    this.count = 10
    // 数据处理函数
    this.processFunc = processFunc
    // 正在加载中
    this.loading = false
    // 参数
    this.params = {}
    // 是否底部
    this.reachBottom = false
    // 是否为空
    this.empty = true
    // 是否需要清除
    this.toClear = false
    // 是否为mock数据
    this.isMock = isMock
  }

  /**
   * 加载下一页数据
   */
  async next ($vue, args) {
    const param = {
      pageNo: this.page,
      pageSize: this.count
    }
    if (this.loading) {
      console.warn('page loading!')
      return this
    }
    // 附加参数
    this.loading = true
    try {
      Object.assign(param, args)
      let res
      if (this.isMock) {
        res = await base.mockGet.call($vue, this.url, {
          params: param
        })
      } else {
        res = await base.get.call($vue, this.url, {
          params: param
        })
      }
      const data = res.data
      // 底部判断
      if (data === null || data.length < 1) {
        if (this.toClear) {
          this.clear()
        } else {
          this.reachBottom = true
        }
        return this
      }
      this.empty = false
      // 处理数据
      this._processData(data)
      // 设置数据
      if (this.toClear) {
        this.list = data
        // $vue.$set(this, 'list', data)
        this.toClear = false
      } else {
        // $vue.$set(this, 'list', this.list.concat(data))
        this.list = this.list.concat(data)
      }
      ++this.page
      if (data.length < this.count) {
        this.reachBottom = true
      }
      return this
    } finally {
      this.loading = false
    }
  }

  /**
   * 恢复到第一页
   */
  reset () {
    this.empty = true
    this.toClear = true
    this.page = 1
    this.reachBottom = false
  }

  clear () {
    this.toClear = false
    this.page = 1
    this.list = []
  }

  /**
   * 处理数据（私有）
   */
  _processData (data) {
    if (this.processFunc) {
      for (let i in data) {
        const result = this.processFunc(data[i])
        if (result) {
          data[i] = result
        }
      }
    }
  }
}
