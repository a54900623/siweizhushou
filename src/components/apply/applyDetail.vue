<template>
  <div class="apply-detail-bd">
    <mt-header title="应用详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <!-- 内容 -->
    <div class="detail-content f-cb">
      <div class="content-logo">
        <img src="http://appimg.hicloud.com/hwmarket/files/application/icon144/42c9bdaabae74b7b8d2eb03d0724271a_6.png"/>
      </div>
      <div class="content-main">
        <div class="content-title">票房大卖王(拍电影)</div>
        <div class="content-desc">
          <span>80M</span>
          <span>833万次下载</span>
        </div>
      </div>
    </div>
    <ul class="detail-tab" id="tab">
      <li class="active" @click="openModule(0)" id="li_item_0">详情</li>
      <li @click="openModule(1,  this)" id="li_item_1">评论（10000）</li>
    </ul>
    <div class="content-detail" id="div_item_0">
      <!-- 轮播图 -->
      <div class="app-img-slider">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="https://www.siwzs.com/uploadFiles/uploadImgs/gamepicture/194512b92b8f42b5b0cf21174552b09a.jpg"/>
          </swiper-slide>
          <swiper-slide>
            <img src="https://www.siwzs.com/uploadFiles/uploadImgs/gamepicture/723355941162411490948b5d002b8cd3.jpg"/>
          </swiper-slide>
          <swiper-slide>
            <img src="https://www.siwzs.com/uploadFiles/uploadImgs/gamepicture/e61a32f5a3954f58b393245ef99986d4.jpg"/>
          </swiper-slide>
          <swiper-slide>
            <img src="https://www.siwzs.com/uploadFiles/uploadImgs/gamepicture/906bcbe7869f46a9b53853b51d23fe31.jpg"/>
          </swiper-slide>
          <swiper-slide>
            <img src="https://www.siwzs.com/uploadFiles/uploadImgs/gamepicture/be281b395a15470a96c40cfb9cac5727.jpg"/>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 应用信息 -->
      <div class="app-info">
        <table>
          <tr>
            <td class="item-title">游戏版本</td>
            <td class="content-text">1.0.7</td>
          </tr>
          <tr>
            <td class="item-title">游戏大小</td>
            <td class="content-text">2MB</td>
          </tr>
          <tr>
            <td class="item-title">下载次数</td>
            <td class="content-text">10000万</td>
          </tr>
          <tr>
            <td class="item-title">游戏语言</td>
            <td class="content-text">中文</td>
          </tr>
          <tr>
            <td class="item-title">更新日期</td>
            <td class="content-text">2018-07-14</td>
          </tr>
        </table>
      </div>
      <!-- 应用说明 -->
      <div class="app-description">
        <p class="description-title">应用介绍</p>
        <div class="description-content">QQ主题管家是一款提供最新最全安卓手机QQ主题的App。有着傻瓜化操作的特点，无繁琐步骤，为大家提供稳定/高速/最新的主题下载，配合管家的DIY自定义功能，完美的实现了自己动手制作QQ主题的梦想！还有主题评论、点赞、收藏、打赏作者、聊天，尽情互动不再枯燥；首页的主题排行榜、主题分类、主题搜索、DIY混搭功能满足你对美化QQ的所有需求。拥有主题上传功能，欢迎大家前来分享，增加人气，还可以获取现金收益哦！独家支持QQ5.0以上版本更换QQ启动界面图与侧滑抽屉背景的自定义功能，最新最全的原创QQ主题尽在QQ主题管家！软件BUG请发送邮件至454701103@qq.com进行反馈。QQ主题管家官方网站：http://www.qqthemes.cn</div>
      </div>
    </div>
    <div class="content-comment" id="div_item_1" style="display: none">
      <div class="btn-comment">我要评论</div>
      <ul class="comment-list">
        <li class="comment-item" v-for="item in 5" :key="item">
          <div class="author-info">
            <img
              src="https://upfile1.hicloud.com/FileServer/image/b.0390086000105939141.20170813220149.70756155898857436381447532955507.1000.C0F3DF5BD74B762F0190218E2ED4C6A2C124A99F11E6E042853911C9D9307F68.jpg"/>
            <span>打发士大夫撒阿达是否</span>
          </div>
          <div class="comment-info">什么游戏 游戏进都进不去 解压到百分之九十多就卡主了什么游戏 游戏进都进不去 解压到百分之九十多就卡主了什么游戏 游戏进都进不去 解压到百分之九十多就卡主了</div>
          <div class="comment-date">2018-07-14 23:28</div>
        </li>
      </ul>
    </div>
    <div class="btm-bar">
      <div>下载（38.5MB）</div>
    </div>
    <div class="btm-bar-place"></div>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'applyDetail',
    data () {
      return {
        swiperOption: {
          direction: 'horizontal',
          loop: true,
          autoplay: false,
          delay: 1000,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 10
        }
      }
    },
    methods: {
      openModule (item) {
        $('#tab li').removeClass('active')
        $('#li_item_' + item).addClass('active')
        $('[id^=div_item]').hide()
        $('#div_item_' + item).show()
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/var.styl'
  .detail-content
    background-color c_white
    padding 25px 20px 10px 20px
    display flex
    .content-logo
      margin-right 30px
      img
        width 140px
        height 140px
    .content-main
      .content-title
        color c_dark
      .content-desc
        margin-top 10px
        color c_gray

  .detail-tab
    background-color c_white
    display flex
    margin-bottom 20px
    li
      width: 50%;
      text-align: center;
      padding-bottom: 10px;
      line-height: 60px;
      padding-top: 10px;
    li.active
      color c_style
      border-bottom: 1px solid c_style;

  .content-detail
    background-color c_white
    .app-img-slider
      padding-top 20px
      padding-bottom 20px
      .swiper-container
        width: 750px;
        /*height: 540px;*/
        /*overflow: visible !important;*/
        .swiper-wrapper
          .swiper-slide
            width: 300px;
            height 540px
            img
              width: 100%;
              height: 100%;
    .app-info
      padding-left 20px
      margin-bottom 20px
      .item-title
        text-align: right;
        padding-right: 20px;
        color: c_gray;
        font-size 26px
      .content-text
        color: c_gray;
        font-size 26px
    .app-description
      padding 0px 20px 10px 20px
      .description-content
        color c_gray
        font-size 26px
  .content-comment
    .btn-comment
      height: 100px;
      line-height: 100px;
      text-align: center;
      background-color: white;
      color: #e93b3b;
    .comment-list
      .comment-item
        padding 20px 20px 20px 25px
        background c_white
        margin-bottom 20px
        .author-info
          display flex
          img
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin-right 20px
          span
            display: block;
            height: 70px;
            line-height: 70px;
        .comment-info, .comment-date
          padding-left 90px
        .comment-info
          font-size 28px
        .comment-date
          margin-top 20px
          color c_gray
          font-size 26px

  .btm-bar
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: 1px 1px 24px 0px #CAC9C9;
    text-align: center;
    z-index: 100;
    height: 80px;
    line-height: 80px;
    color c_white
    background: #e93b3b;

  .btm-bar-place
    height 80px
</style>
