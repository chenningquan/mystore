import Vue from "vue";
import App from "./App.vue";
import "./assets/style/reset.css";
import router from "./router";
import store from "./store";
import api from "../src/request/api/index";

Vue.config.productionTip = false;
Vue.prototype.$api = api;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
