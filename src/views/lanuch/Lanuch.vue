<template>
  <div class="box"></div>
</template>

<script>
export default {
  name: "Lanuch",
  mounted() {
    let phone = this.$store.state.phone;
    if (phone === null) {
      this.$router.replace("login");
    } else {
      this.$router.replace("home");
    }
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
