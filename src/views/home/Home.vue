<template>
  <div>
    <home-user-info
      v-bind:class="{ userInfo: true, hasOrder: this.orderList.length > 0 }"
      v-bind:user-name="this.$store.state.account.name"
      v-bind:store-name="this.$store.state.store.storeName"
      v-bind:today-income="orderResp.totalAmount"
      v-bind:month-income="orderResp.monthTotalAmount"
    ></home-user-info>
    <home-order-info
      class="orderInfo"
      v-show="orderList.length > 0"
      v-bind:order-list="orderList"
    ></home-order-info>
  </div>
</template>

<script>
import HomeUserInfo from "./components/HomeUserInfo";
import HomeOrderInfo from "./components/HomeOrderInfo";
export default {
  name: "Home",
  data() {
    return {
      orderResp: Object,
      joinStoreItem: Object,
      orderList: Array
    };
  },
  mounted() {
    this.getAccountAndStore();
  },
  methods: {
    /// 获取用户信息和门店信息
    getAccountAndStore() {
      this.$api.login
        .getAccoutStoreByPhone({
          phone: this.$store.state.phone
        })
        .then(res => {
          console.log(res);
          let data = res.data.data;
          let storeCode = this.$store.state.storeCode;
          this.$store.commit("changeAccountInfo", data.miniAccount);
          for (let index in data.miniStores) {
            if (data.miniStores[index].store.storeCode === storeCode) {
              this.$store.commit("changeStore", data.miniStores[index].store);
              this.orderResp = data.miniStores[index].orderResp;
              this.joinStoreItem = data.miniStores[index].joinStoreItem;
            }
          }
          if (this.$store.state.store === null) {
            this.$router.push("chooseStore");
          } else {
            this.getOrderInfo();
          }
        });
    },
    /// 获取首页订单数据
    getOrderInfo() {
      this.$api.home
        .getOrderInfo({
          storeCode: this.$store.state.storeCode
        })
        .then(res => {
          console.log(res);
          if (res.data.code === 0) {
            this.orderList = res.data.data;
          }
        });
    }
  },
  components: {
    HomeUserInfo,
    HomeOrderInfo
  }
};
</script>

<style lang="stylus" scoped>
.userInfo
  width 100%
  height 8rem
.hasOrder
  height 10.5rem
.orderInfo
  margin-top -2.5rem
</style>
