<template>
  <div class="container">
    <div class="left">
      <p class="store">{{ storeName }}</p>
      <p class="username">{{ userName }}</p>
    </div>
    <div class="center">
      <p class="title">今日收入(元)</p>
      <p class="value">{{ todayIncome }}</p>
    </div>
    <div class="center">
      <p class="title">本月收入(元)</p>
      <p class="value">{{ monthIncome }}</p>
    </div>
    <img src="../../../assets/images/ic_home_arrow_right.png" class="right" />
  </div>
</template>

<script>
export default {
  name: "HomeUserInfo",
  props: {
    storeName: {
      type: String,
      default: "新越秀店"
    },
    userName: {
      type: String,
      default: "新越秀店"
    },
    todayIncome: {
      type: Number,
      default: 237.8
    },
    monthIncome: {
      type: Number,
      default: 6237.8
    }
  }
};
</script>

<style lang="stylus" scoped>
.container
  display flex
  background #58BA5D
  .left
    flex 0.8
    padding-top 2rem
    padding-left 2.2rem
    .store
      font-family PingFangSC-Semibold
      font-size 1.8rem
      color #FFFFFF
      line-height 2rem
    .username
      margin-top .9rem
      font-family PingFangSC-Regular
      font-size 1.4rem
      color #FFFFFF
      line-height 1.4rem
  .center
    flex 0.5
    padding-top 2.2rem
    .title
      font-family PingFangSC-Regular
      font-size 1.0rem
      color #FFFFFF
      line-height 1.0rem
    .value
      margin-top .95rem
      font-family PingFangSC-Semibold
      font-size 1.8rem
      color #FFFFFF
      line-height 2rem
  .right
    width: 1rem
    height 1rem
    margin-top 3.8rem
    margin-right 1.3rem
</style>
