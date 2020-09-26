<template>
  <div class="container">
    <img
      class="back"
      src="../assets/images/ic_navigation_back_arrow.png"
      v-show="showBackIcon"
    />
    <p class="title" v-show="hasTitle">{{ navtitle }}</p>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: {
    showBackIcon: Boolean,
    navtitle: String
  },
  computed: {
    hasTitle: function() {
      return this.navtitle.length > 0;
    }
  }
};
</script>

<style lang="stylus" scoped>
.container
  display flex
  width 100%
  height 4.4rem
  .back
    margin-top 1.6rem
    margin-left 1.6rem
    width 2rem
    height 2rem
  .title
    flex 1
    margin-top 1.6rem
    text-align center
    line-height 1.8rem
    font-size 1.8rem
    font-family PingFangSC-Semibold, PingFang SC
  .right
    margin-right 1.6rem
    width 2rem
</style>
