<template>
  <div class="container">
    <div class="imageContainer" v-for="item in bannerList" :key="item.id">
      <img class="image" :src="item.picUrl" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
  props: {
    bannerList: Array
  }
};
</script>

<style lang="stylus" scoped>
.container
    margin 1.6rem 1.6rem 0 1.6rem
    .image
        width auto
        height auto
        max-width 100%
        max-height 100%
</style>
