
export default class base {
  static async get () {
    var that = this
    try {
      return await that.$http.get.apply(that, arguments)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  static async post () {
    var that = this
    try {
      return await that.$http.post.apply(that, arguments)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
