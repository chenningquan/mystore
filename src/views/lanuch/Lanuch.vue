<template>
  <div class="box"></div>
</template>

<script>
export default {
  name: "Lanuch",
  mounted() {
    setTimeout(() => {
      this.$router.push("login");
    }, 1000);
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.box
  position absolute
  width 100%
  height 100%
  background url("../../assets/images/ic_lanuch_icon.png") no-repeat center
</style>
