<!-- 视频 -->
<template>
  <div class="u-video-box" v-if="params.open">
    <div v-html="htmlCtn" class="video-inner">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'videoBox',
    data () {
      return {
        htmlCtn: ''
      }
    },
    props: ['params'],
    watch: {
      'params.content': function (val) {

      }
    },
    created: function () {
      this.handelVideo()
    },
    mounted: function () {
    },
    updated: function () {
    },
    methods: {
      handelVideo () {
        let $iframe = $(this.params.content)
        let w = $iframe[0].width
        let h = $iframe[0].height
        let tw = $('body').width()
        let retw, reth
        retw = tw
        if (w > tw) {
          reth = tw / w * h
        } else if (w < tw) {
          reth = w / tw * h
        }
        $iframe.attr('src', $iframe.attr('src').replace('http://', '//').replace('https://', '//'))
        $iframe.attr('width', retw)
        $iframe.attr('height', reth)
        this.htmlCtn = $iframe[0].outerHTML
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .u-video-box
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    .video-inner
      position absolute
      top 50%
      transform translate(0,-50%)
</style>
