<template>
  <div class="container">
    <p class="noAccount">没有账号?</p>
    <img class="icon" src="../../assets/images/ic_login_icon.png" />
    <p class="welcome">欢迎来到今天小店</p>
    <p class="tip">每一盏灯都有温暖城市的梦想</p>
    <input class="phone" type="tel" placeholder="输入手机号" v-model="phone" />
    <button
      v-bind:class="{ verify: true, disabled: phone.length < 11 }"
      @click="getVerify"
      v-bind:disabled="phone.length < 11"
    >
      获取验证码
    </button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phone: ""
    };
  },
  methods: {
    getVerify() {
      this.$api.login
        .getVerificationCode({
          phone: this.phone
        })
        .then(res => {
          if (res.data.code === 0) {
            this.$store.commit("changePhone", this.phone);
            this.$router.push("verification");
          }
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
.container
  height 10rem
  .noAccount
    font-size 1.4rem
    font-family PingFangSC-Semibold, PingFang SC
    line-height 2rem
    text-align right
    margin-top 1.6rem
    margin-right 1.6rem
    color #14BE4F
  .icon
    margin-top 2.1rem
    margin-left 4.8rem
  .welcome
    margin-top 1.6rem
    margin-left 4.8rem
    font-family PingFangSC-Medium, PingFang SC
    font-size 2.4rem
    line-height 2.4rem
    color #292E33
  .tip
    margin-top 1.4rem
    margin-left 4.8rem
    font-size 1.4rem
    line-height 1.4rem
    color #B6B8BF
  .phone
    margin-top 4.7rem
    margin-left 4.8rem
    width 27.9rem
    height 4.8rem
    background #F4F4F8
    border-radius 2.5rem
    border-width 0rem
    text-align center
    color #111734
    font-size 1.6rem
    font-family PingFangSC-Medium, PingFang SC
  .verify
    margin-top 2.4rem
    margin-left 4.8rem
    width 27.9rem
    height 4.8rem
    background #14BE4F
    color white
    border-radius 2.5rem
    border-width 0rem
    text-align center
    font-size 1.6rem
    font-family PingFangSC-Medium, PingFang SC
  .disabled
    opacity 0.6
    cursor not-allowed
</style>
