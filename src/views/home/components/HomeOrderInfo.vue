<template>
  <div class="container">
    <swiper class="swiperContainer" :options="swiperOptions">
      <swiper-slide
        class="swiperSlide"
        v-for="item of orderList"
        :key="item.id"
      >
        <img class="orderIcon" src="~images/ic_home_order_icon.png" />
        <p class="orderNo">订单{{ item.code }}</p>
        <p class="orderStatus">{{ item.purchaseStatus }}</p>
        <img src="~images/ic_home_arrow_right.png" class="arrow" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeOrderInfo",
  props: {
    orderList: Array
  },
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.container
  margin-left 1.6rem
  margin-right 1.6rem
  width 34.3rem
  height 5rem
  background #FFFFFF
  box-shadow 0px 0px 13px 0px rgba(0, 0, 0, 0.06)
  border-radius 8px
  border 1px solid #E2E4EA
  .swiperContainer
    height 5rem
    .swiperSlide
      display flex
      height 5rem
      .orderIcon
        margin-top 1.75rem
        margin-left 1.47rem
        width 1.28rem
        height 1.5rem
      .orderNo
        margin-left .79rem
        text-align center
        height 5rem
        line-height 5rem
        font-family PingFangSC-Regular
        font-size 1.5rem
        color #41465D
      .orderStatus
        margin-left .79rem
        text-align center
        font-family PingFangSC-Regular
        font-size 15px
        color #58BA5D
        height 5rem
        line-height 5rem
      .arrow
        width 1.2rem
        height 1.2rem
        margin-top 1.9rem
        margin-left auto
        margin-right 1.28rem
</style>
