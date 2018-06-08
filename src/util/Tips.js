/**
 * 提示与加载工具类
 */

import { Toast, Indicator, MessageBox } from 'mint-ui'

export default class Tips {
  static toast (title, icon = '', duration = 1000) {
    Toast({
      message: title,
      iconClass: icon,
      duration: duration
    })
    if (duration > 0) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, duration)
      })
    }
  }

  /**
   * 弹出加载提示
   */
  static loading (title = '加载中') {
    Indicator.open({
      text: title,
      spinnerType: 'fading-circle'
    })
  }

  static confirm (message = '确定执行该操作么？', confirmBtnText = '确定') {
    return new Promise((resolve, reject) => {
      return MessageBox({
        title: '',
        message: message,
        showCancelButton: true,
        confirmButtonText: confirmBtnText
      }).then((ret) => {
        if (ret === 'cancel') {
          reject(ret)
        } else {
          resolve()
        }
      })
    })
  }

  /**
   * 关闭加载提示
   */
  static loaded () {
    Indicator.close()
  }
}
