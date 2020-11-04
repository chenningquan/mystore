<template>
  <div class="container">
    <swiper
      class="swiperContainer"
      :options="swiperOptions"
      v-if="dataArray.length"
    >
      <swiper-slide
        class="swiperSlide"
        v-for="item of dataArray"
        :key="item.id"
      >
        <img class="bannerImg" :src="item.picUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    dataArray: Array
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false,
        pagination: ".swiper-pagination",
        paginationClickable: true
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.swiperContainer >>> .swiper-pagination-bullet
  width .5rem
  height .5rem
  border-radius 50%
.swiperContainer >>> .swiper-pagination-bullet-active
  background: #14BE4F
.container
  margin 1.6rem 1.6rem 0 1.6rem
  width 34.3rem
  height 12rem
  .swiperContainer
    width 34.3rem
    height 12rem
    .bannerImg
      width auto
      height auto
      max-width 100%
      max-height 100%
</style>
