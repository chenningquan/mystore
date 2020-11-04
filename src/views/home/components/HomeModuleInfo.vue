<template>
  <div class="container">
    <swiper class="swiperContainer" :options="swiperOptions">
      <swiper-slide class="item" v-for="item in moduleList" :key="item.id">
        <img :src="item.icon" class="icon" />
        <div class="text">{{ item.text }}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import addGoodsUrl from "images/main/ic_main_add_goods.png";
import analysisUrl from "images/main/ic_main_analysis.png";
import dayEndUrl from "images/main/ic_main_day_end.png";
import goodsListUrl from "images/main/ic_main_goods_list.png";
import orderListUrl from "images/main/ic_main_order_list.png";
import purchaseUrl from "images/main/ic_main_purchase.png";
import saleOrderUrl from "images/main/ic_main_sale_order.png";
import stockUrl from "images/main/ic_main_stock.png";

export default {
  name: "HomeModuleInfo",
  data() {
    return {
      swiperOptions: {
        freeMode: true,
        slidesPerView: "auto"
      },
      moduleList: [
        {
          id: 0,
          icon: addGoodsUrl,
          text: "商品添加"
        },
        {
          id: 1,
          icon: goodsListUrl,
          text: "本店商品"
        },
        {
          id: 2,
          icon: purchaseUrl,
          text: "商品采购"
        },
        {
          id: 3,
          icon: orderListUrl,
          text: "采购订单"
        },
        {
          id: 4,
          icon: dayEndUrl,
          text: "日结"
        },
        {
          id: 5,
          icon: saleOrderUrl,
          text: "销售订单"
        },
        {
          id: 6,
          icon: stockUrl,
          text: "库存"
        },
        {
          id: 7,
          icon: analysisUrl,
          text: "数据分析"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.container
  margin-top 2rem
  display flex
  .item
    width 8rem
    .icon
      width 4.6rem
      height 4.6rem
      margin-left 1.7rem
      margin-right 1.7rem
    .text
      margin-top 1.2rem
      text-align center
</style>
