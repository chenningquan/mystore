<template>
  <div>
    <navigation
      v-bind:show-back-icon="true"
      v-bind:navtitle="navtitle"
    ></navigation>
    <p class="desc">输入验证码</p>
    <p class="tip">已发送四位验证码至 {{ this.$store.state.phone }}</p>
    <div class="inputContainer">
      <input
        class="input"
        v-for="(item, index) in digits"
        :key="index"
        :ref="`ref${index}`"
        v-model="item.value"
        type="text"
        oninput="value=value.replace(/[^\d]/g,'')"
        @input="onInput(index)"
        @keyup.delete="onDelete(index)"
        maxlength="1"
      />
    </div>
    <button
      v-bind:class="{ submit: true, disabled: !inputDone }"
      @click="submit"
    >
      确定
    </button>
    <button
      v-bind:class="{ retry: true, disabled: this.countdown > 0 }"
      @click="retry"
    >
      {{ retrytitle }}
    </button>
  </div>
</template>

<script>
import navigation from "../../components/navigation";
export default {
  name: "Verificaton",
  data() {
    return {
      navtitle: "",
      countdown: 0,
      retrytitle: "重新获取",
      digits: [
        {
          value: ""
        },
        {
          value: ""
        },
        {
          value: ""
        },
        {
          value: ""
        }
      ]
    };
  },
  methods: {
    onInput(index) {
      // index < 5 ，如果是第6格，不触发光标移动至下一个输入框。
      if (this.digits[index].value && index < 3) {
        this.$refs["ref" + (index + 1)][0].focus();
      }
    },
    onDelete(index) {
      // 如果是第1格，不触发光标移动至上一个输入框
      if (index > 0) {
        this.$refs["ref" + (index - 1)][0].focus();
      }
    },
    submit() {
      this.$api.login
        .login({
          phone: this.$store.state.phone,
          code: this.verificationCode
        })
        .then(res => {
          if (res.data.code === 0) {
            this.$router.replace("/home");
          }
        });
    },
    retry() {
      if (this.countdown > 0) {
        return;
      }
      this.countdown = 60;
      setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          this.retrytitle = "重新获取";
          clearInterval();
        } else {
          this.retrytitle = "重新获取(" + this.countdown + ")";
        }
      }, 1000);
    }
  },
  computed: {
    inputDone: function() {
      let allInputDone = true;
      for (let item in this.digits) {
        if (this.digits[item].value.length === 0) {
          allInputDone = false;
          break;
        }
      }
      return allInputDone;
    },
    verificationCode: function() {
      let code = "";
      for (let item in this.digits) {
        code += this.digits[item].value;
      }
      return code;
    }
  },
  components: {
    navigation
  }
};
</script>

<style lang="stylus" scoped>
.desc
  margin-top 7.4rem
  margin-left 4.4rem
  font-size 2.4rem
  font-family PingFangSC-Semibold, PingFang SC
  line-height 2.4rem
  color #111734
.tip
  margin-top 1.4rem
  margin-left 4.4rem
  font-size 1.4rem
  font-family PingFangSC-Regular, PingFang SC
  line-height 1.4rem
  color #858A9C
.inputContainer
  display flex
  margin-top 3.6rem
  margin-left 4.4rem
  .input
    width 3.9rem
    height 4.7rem
    margin-right 2.5rem
    background #F4F4F8
    border-width 0
    border-radius .6rem
    text-align center
.submit
  margin-top 3.6rem
  margin-left 4.4rem
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
.retry
  border-width 0rem
  background white
  display block
  margin 1.8rem auto
</style>
