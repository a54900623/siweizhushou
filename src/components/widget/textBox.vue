<!-- 富文本 -->
<template>
  <div :id="id" class="m-text-box">
  </div>
</template>

<script>
  //  import wxApi from '@/api/wx'

  export default {
    name: 'textBox',
    data () {
      return {}
    },
    props: {
      content: {
        type: String,
        default: ''
      },
      id: {
        type: String
      }
    },
    created: function () {
    },
    mounted: function () {
      this.initLazyLoad()
      this.appendContent()
    },
    updated: function () {
      this.appendContent()
    },
    watch: {
      'content': function () {
        this.initLazyLoad()
        this.appendContent()
      }
    },
    methods: {
      appendContent () {
        let that = this
        let relativeDom = `#${this.id}`
        if (that.content) {
          let divObj = document.createElement('div')
          divObj.innerHTML = '' + that.content
          that.initImg(divObj)
          that.initIframe(divObj)
          $(relativeDom).html(divObj)
          $('.lazy-img').picLazyLoad()
        }
      },
      initIframe (dom) {
        let $iframes = $(dom).find('iframe')
        $iframes.each((i, iframe) => {
          let w = iframe.width
          let h = iframe.height
          let tw = $(`#${this.id}`).width()
          let paddingl = ($(dom).css('padding-left') || '0px').replace('px', '')
          let paddingr = ($(dom).css('padding-right') || '0px').replace('px', '')
          tw = tw - paddingr - paddingl
          let retw, reth
          retw = tw
          if (w > tw) {
            reth = tw / w * h
          } else if (w < tw) {
            reth = w / tw * h
          }
          $(iframe).attr('src', $(iframe).attr('src').replace('http://', '//').replace('https://', '//'))
          $(iframe).attr('width', retw)
          $(iframe).attr('height', reth)
          $(iframe)[0].outerHTML = '<div style="position:relative;z-index:1;height:' + reth + 'px;">' +
            $(iframe)[0].outerHTML + '</div>'
        })
      },
      initImg (dom) {
        let that = this
        let $imgs = $(dom).find('img')
        let paddingl = ($(dom).css('padding-left') || '0px').replace('px', '')
        let paddingr = ($(dom).css('padding-right') || '0px').replace('px', '')
        let boxW = $(`#${this.id}`).width()
        let defW = boxW - paddingl - paddingr
        $imgs.each((i, img) => {
          let src = $(img).attr('src')
          $(img).attr('style', '')
          if (src.indexOf('http://') !== -1 || src.indexOf('https://') !== -1) {
            $(img).attr('data-original', src + '?imageMogr2/auto-orient/thumbnail/600x')
            $(img).attr('srci', src)
          } else {
            if (src.indexOf('data:image/jpeg;base64') === -1) {
              $(img).attr('data-original', window.serverUrl + src)
              $(img).attr('srci', window.serverUrl + src)
            } else {
              $(img).attr('data-original', src + '?imageMogr2/auto-orient/thumbnail/600x')
              $(img).attr('srci', src)
            }
          }
          if ($(img).data('width')) {
            $(img).attr('src',
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC')
            let realW = $(img).data('width')
            let ratio = $(img).data('ratio')
            let realH = realW / ratio
            let retW
            let retH
            if (realW > defW) {
              retW = defW
              retH = defW / ratio
            } else {
              retW = realW
              retH = realH
              $(img).attr('data-original', src)
            }
            $(img).attr('width', retW)
            $(img).attr('height', retH)
          } else {
            if (src.indexOf('image.myqcloud.com') !== -1) {
              $(img).attr('src', src + '?imageMogr2/auto-orient/thumbnail/600x')
              $(img).attr('data-original', src + '?imageMogr2/auto-orient/thumbnail/600x')
            } else {
              $(img).attr('data-original', src)
            }
            $(img).css('max-width', '100%')
            $(img).attr('width', '')
            $(img).attr('height', '')
          }

          $(img).addClass('lazy-img')
          $(img).attr('onerror', 'imgText.errorImg(this)')
          $(img).attr('name', 'imgTextPic')
          $(img).click(function (e) {
            that.openImage(e)
          })
        })
      },
      initLazyLoad () {
        let that = this
        $.fn.picLazyLoad = function (settings) {
          let $this = $(this)
          let _winScrollTop = 0
          let _winHeight = $(window).height()
          settings = Object.assign({
            threshold: 100,
            parent: $(`#${that.id}`)
          }, settings)
          lazyLoadPic()
          $(window).scroll(function (e) {
            _winScrollTop = e.target.scrollTop || document.body.scrollTop
            lazyLoadPic()
          })

          function lazyLoadPic () {
            $this.each(function () {
              let $self = $(this)
              if ($self.is('img')) {
                if ($self.attr('data-original')) {
                  let _offsetTop = $self.offset().top
                  let rect = settings.parent[0].getBoundingClientRect()
                  if (_offsetTop <= rect.height + settings.parent.offset().top) {
                    if ((_offsetTop - settings.threshold) <= (_winHeight + _winScrollTop)) {
                      let realUrl = $self.attr('data-original')
                      $self.attr('src', realUrl)
                      $self.removeAttr('data-original')
                    }
                  }
                }
              }
            })
          }
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import '../../assets/css/function.styl'
  .m-text-box
    *
      -moz-user-select: none;
      -moz-user-select: text;
      -webkit-user-select: none;
      -webkit-user-select: text;
      -ms-user-select: none;
      -ms-user-select: text;
      -ms-user-select: element;
    img
      pointer-events inherit
</style>
