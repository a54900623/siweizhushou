import base from './base'
import CVal from '@/util/ConstVal'
// import Tips from '@/util/Tips'
import Lang from '@/util/Lang'
import wx from 'weixin-js-sdk'

export default class weixin extends base {
  /**
   * 初始化微信配置
   * @param href
   * @returns {Promise.<*>}
   */
  static async initWxConfig () {
    let that = this
    let href = Lang.browserOpt().ios
      ? Lang.getStorage(CVal.STORE_FIRST_URL)
      : window.location.href.split('#')[0]
    if (Lang.browserOpt().weixin && location.protocol === 'https:') {
      const url = '/wechat/wechat/getJsConfig.do'
      let res = await base.post.call(that, url, {
        url: href
      })
      let data = res.data
      wx.config({
        debug: false, // 开启调试模式
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: [ // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'onMenuShareQZone',
          'previewImage',
          'chooseWXPay',
          'hideMenuItems',
          'showMenuItems',
          'showAllNonBaseMenuItem',
          'hideAllNonBaseMenuItem'
        ]
      })
      wx.error(res => {
        // alert(JSON.stringify(res))
        console.warn(JSON.stringify(res))
      })
    }
  }

  /**
   * 调起支付控件
   * @param params
   * @returns {Promise}
   */
  static async chooseWXPay ({orderId, openId}) {
    let that = this
    const url = '/pay/wechat/wwz/getPayData.do'
    // 下单
    let res = await base.post.call(that, url, {
      orderId: orderId,
      openId: openId
    })
    let data = res.data
    // 调起
    return new Promise((resolve, reject) => {
      wx.chooseWXPay({
        timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
        package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
        signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: data.paySign, // 支付签名
        success: res => {
          resolve(res)
        },
        cancel: res => {
          reject(res)
        },
        fail: res => {
          reject(res)
        }
      })
    })
  }

  /**
   * 分享数据初始化
   * @param title
   * @param desc
   * @param link
   * @param imgUrl
   */
  static initShare ({title, desc, link, imgUrl}) {
    if (Lang.browserOpt().weixin) {
      var shareData = {
        title: title || '同行者商城',
        desc: desc || 'CEO户外活动服务平台，智者同行，践行共赢',
        link: link,
        imgUrl: imgUrl || '//3g.tongxingzhe.cn/micWeb/image/ic_logo_o.png'
      }
      wx.onMenuShareAppMessage(shareData)
      wx.onMenuShareTimeline(shareData)
      wx.onMenuShareQQ(shareData)
      wx.onMenuShareWeibo(shareData)
      wx.onMenuShareQZone(shareData)
    }
  }

  /**
   * 隐藏所有功能按钮
   */
  static hideAllNonBaseMenuItem ($vue) {
    wx.hideMenuItems({
      menuList: [
        'menuItem:share:appMessage',
        'menuItem:share:timeline',
        'menuItem:share:qq',
        'menuItem:share:weiboApp',
        'menuItem:favorite',
        'menuItem:share:facebook',
        'menuItem:share:QZone'
      ], // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
      fail: res => {
        // alert(JSON.stringify(res))
        let now = new Date()
        if (location.search) {
          location.replace(location.href.split('#')[0] + '&t=' + now.getTime())
        } else {
          location.replace(location.href.split('#')[0] + '?t=' + now.getTime())
        }
        $vue.initWx()
      }
    })
    // wx.hideAllNonBaseMenuItem({
    //   fail: res => {
    //     // alert(JSON.stringify(res))
    //     let now = new Date()
    //     if (location.search) {
    //       location.replace(location.href.split('#')[0] + '&t=' + now.getTime())
    //     } else {
    //       location.replace(location.href.split('#')[0] + '?t=' + now.getTime())
    //     }
    //     $vue.initWx()
    //   }
    // })
  }

  /**
   * 显示所有功能按钮
   */
  static showAllNonBaseMenuItem ($vue) {
    wx.showMenuItems({
      menuList: [
        'menuItem:share:appMessage',
        'menuItem:share:timeline',
        'menuItem:share:qq',
        'menuItem:share:weiboApp',
        'menuItem:favorite',
        'menuItem:share:facebook',
        'menuItem:share:QZone'
      ],
      fail: res => {
        // alert(JSON.stringify(res))
        let now = new Date()
        if (location.search) {
          location.replace(location.href.split('#')[0] + '&t=' + now.getTime())
        } else {
          location.replace(location.href.split('#')[0] + '?t=' + now.getTime())
        }
        $vue.initWx()
      }
    })
    // wx.showAllNonBaseMenuItem({
    //   fail: res => {
    //     // alert(JSON.stringify(res))
    //     let now = new Date()
    //     if (location.search) {
    //       location.replace(location.href.split('#')[0] + '&t=' + now.getTime())
    //     } else {
    //       location.replace(location.href.split('#')[0] + '?t=' + now.getTime())
    //     }
    //     $vue.initWx()
    //   }
    // })
  }

  /**
   * 隐藏分享收藏按钮
   */
  static hideShare () {
    wx.hideMenuItems({// 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
      menuList: [
        'menuItem:share:appMessage',
        'menuItem:share:timeline',
        'menuItem:share:qq',
        'menuItem:share:weiboApp',
        'menuItem:favorite',
        'menuItem:share:facebook',
        'menuItem:share:QZone'
      ]
    })
  }

  /**
   * 图片浏览器
   * @param curUrl
   * @param urls
   */
  static previewImage (curUrl, urls) {
    wx.previewImage({
      current: curUrl, // 当前显示图片的http链接
      urls: urls // 需要预览的图片http链接列表
    })
  }

  /**
   * 修复ios系统下微信浏览器支付路径错误问题
   * 该方法用于使用微信支付的路径
   */
  static fixWxPayUrl ($vue) {
    let bVersion = Lang.browserOpt()
    if (!$vue.$route.query.r && bVersion.weixin && bVersion.ios) {
      if (location.search) {
        location.replace(location.href.split('#')[0] + '&r=true')
      } else {
        location.replace(location.href.split('#')[0] + '?r=true')
      }
    }
  }
}
