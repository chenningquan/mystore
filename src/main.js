import Vue from "vue";
import App from "./App.vue";
import "./assets/style/reset.css";
import router from "./router";
import store from "./store";
import api from "../src/request/api/index";

import "swiper/swiper-bundle.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
