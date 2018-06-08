/**
 * 工具
 */

var Lang = {
  getStorage: function (key) {
    var ls = window.localStorage
    if (ls) {
      var v = ls.getItem(key)
      if (!v) {
        return
      }
      if (v.indexOf('obj-') === 0) {
        v = v.slice(4)
        return JSON.parse(v)
      } else if (v.indexOf('str-') === 0) {
        return v.slice(4)
      }
    }
  },
  setStorage: function (key, value) {
    if (arguments.length === 2) {
      var v = value
      if (typeof v === 'object') {
        v = JSON.stringify(v)
        v = 'obj-' + v
      } else {
        v = 'str-' + v
      }
      var ls = window.localStorage
      if (ls) {
        ls.setItem(key, v)
      }
    }
  },
  updateStorage: function (key, value) {
    var that = this
    var o = that.getStorage(key) || {}
    o = Object.assign(o, value)
    that.setStorage(key, o)
  },
  removeStorage: function (key) {
    localStorage.removeItem(key)
  },
  cleanStorage: function () {
    localStorage.clear()
  },
  // 根据参数键获取参数值
  getParameter: function (str, url) {
    let LocString = url || window.document.location.search
    let rs = new RegExp('(^|)' + str + '=([^&]*)(&|$)', 'g').exec(LocString)
    if (rs) return decodeURIComponent(rs[2])
    return ''
  },
  // 打印日志
  printLog: function (type) {
    var nowDate = new Date().toLocaleString()
    var pageName = function () {
      var strUrl = location.href
      var arrUrl = strUrl.split('/')
      var strPage = arrUrl[arrUrl.length - 1]
      return strPage
    }
    var newArguments = Array.prototype.slice.call(arguments, 2)
    newArguments.unshift('[' + nowDate + ']-[' + pageName() + ']-[' +
      arguments[1] + ']:')
    switch (type) {
      case 'err':
        console.error.apply(console, newArguments)
        break
      case 'warn':
        console.warn.apply(console, newArguments)
        break
      default:
        console.log.apply(console, newArguments)
        break
    }
  },
  // HTML转义
  HTMLEncode: function (html) {
    var temp = document.createElement('div');
    (temp.textContent != null)
      ? (temp.textContent = html)
      : (temp.innerText = html)
    var output = temp.innerHTML
    temp = null
    return output
  },
  // HTML反转义
  HTMLDecode: function (text) {
    var temp = document.createElement('div')
    temp.innerHTML = text
    var output = temp.innerText || temp.textContent
    temp = null
    return output
  },
  /**
   * 过滤emoji
   * @param o
   * @returns {*}
   */
  filterEmoji: function (o) {
    var that = this
    if (!o) {
      return o
    }

    function filter (str) {
      return str.replace(
        /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]|\uD83D[\ude80-\udeff]/g,
        '')
    }

    if (typeof o === 'string') {
      return filter(o)
    } else if (o instanceof Object) {
      for (var p in o) {
        o[p] = that.filterEmoji(o[p])
      }
      return o
    } else if (o instanceof Array) {
      for (var i = 0; i < o.length; i++) {
        o[i] = that.filterEmoji(o[i])
      }
      return o
    } else {
      return o
    }
  },
  changeTitle: function (title) {
    document.title = title
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    // 替换成站标favicon路径或者任意存在的较小的图片即可
    iframe.setAttribute('src',
      'https://3g.tongxingzhe.cn/web/image/favicon.ico')
    var iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  },
  /**
   * 获取浏览器类型
   * @returns {{trident: boolean, presto: boolean, webKit: boolean, gecko: boolean, mobile: boolean, ios: boolean, android: boolean, iPhone: boolean, iPad: boolean, webApp: boolean, weixin: boolean, qq: boolean, qqBrowser: boolean}}
   */
  browserOpt: function () {
    var u = navigator.userAgent
    return {
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应用程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
      qq: !!u.match(/\sQQ/i), // 是否QQ
      qqBrowser: (u.indexOf('MQQBrowser') > -1) &&
      (u.indexOf('MicroMessenger') === -1)// 是否QQ浏览器
    }
  },
  // ------------日期-----------
  /**
   * 日期格式化
   格式 YYYY/yyyy/YY/yy 表示年份
   MM/M 月份
   W/w 星期
   dd/DD/d/D 日期
   hh/HH/h/H 时间
   mm/m 分钟
   ss/SS/s/S 秒
   */
  formatDate (format) {
    var o = {
      'M+': this.getMonth() + 1, // month
      'd+': this.getDate(), // day
      'h+': this.getHours(), // hour
      'm+': this.getMinutes(), // minute
      's+': this.getSeconds(), // second
      'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
      'S': this.getMilliseconds() // millisecond
    }

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  },
  /**
   * 字符串转时间
   * @param dateStr
   * @returns {*}
   */
  strToDate (dateStr) {
    if (!dateStr) {
      return ''
    }
    return new Date(Date.parse(dateStr.replace(/-/g, '/')))
  },
  /**
   * 毫秒数转时分秒
   * @param ms
   * @returns {string}
   */
  leftTimer (ms) {
    var days = parseInt(ms / 1000 / 60 / 60 / 24, 10) // 计算剩余的天数
    var hours = parseInt(ms / 1000 / 60 / 60 % 24, 10) // 计算剩余的小时
    var minutes = parseInt(ms / 1000 / 60 % 60, 10)// 计算剩余的分钟
    var seconds = parseInt(ms / 1000 % 60, 10)// 计算剩余的秒数
    days = days > 0 && days < 10 ? '0' + days : days
    hours = hours > 0 && hours < 10 ? '0' + hours : hours
    minutes = minutes > 0 && minutes < 10 ? '0' + minutes : minutes
    seconds = seconds > 0 && seconds < 10 ? '0' + seconds : seconds
    let str = ''
    if (parseInt(days) > 0) {
      str += days + '天'
    }
    if (parseInt(hours) > 0) {
      str += hours + '小时'
    }
    if (parseInt(minutes) > 0) {
      str += minutes + '分'
    }
    if (parseInt(seconds) >= 0) {
      str += seconds + '秒'
    }
    return str
  }
}
export default Lang
