import Tips from '@/util/Tips'

const baseURL = process.env.NODE_ENV === 'production' ? '' : '/test_api' // 因为我本地做了反向代理
/**
 * 异常
 */
const handelException = res => {
  if (res.description) {
    Tips.toast(res.description)
    Tips.loaded()
  }
}
/**
 * 判断请求是否成功
 */
const isSuccess = res => {
  return res && res.success
}
const ajax = ({method, url, data}) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: method,
      url: url.indexOf('http') === 0 ? url : baseURL + url,
      headers: {},
      data: data,
      dataType: 'json',
      success: function (res) {
        if (isSuccess(res)) {
          resolve(res)
        } else {
          console.error('ajax err', res)
          handelException(res)
          reject(res)
        }
      },
      error: function (err) {
        console.error('ajax err', err)
        if (err.readyState !== 0) {
          reject(err)
        }
      }
    })
  })
}
const
  $Http = {
    get (url, data = {params: {}}) {
      return ajax({
        method: 'GET',
        url: url,
        data: data.params
      })
    },
    post (url, data = {}) {
      return ajax({
        method: 'POST',
        url: url,
        data: data
      })
    }
  }

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', {value: $Http})
  },
  $http: $Http
}
