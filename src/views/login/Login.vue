<template>
  <div class="container">
    <p class="noAccount">没有账号?</p>
    <img class="icon" src="" />
    <p class="welcome">欢迎来到今天小店</p>
    <p class="tip">每一盏灯都有温暖城市的梦想</p>
    <input class="phone" type="tel" />
    <input class="verify" type="button" />
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style lang="stylus" scoped>
.container
  background red
  .noAccount
    font-size .14rem
    font-family PingFangSC-Semibold, PingFang SC
    line-height .2rem
</style>
