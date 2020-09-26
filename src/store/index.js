import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    phone: localStorage.getItem("phone"),
    hasNetwork: true,
    account: Object
  },
  mutations: {
    changeNetwork(state, hasNetwork) {
      state.hasNetwork = hasNetwork;
    },
    changePhone(state, phone) {
      state.phone = phone;
      localStorage.setItem("phone", phone);
    },
    changeAccountInfo(state, account) {
      state.account = account;
    }
  }
});

export default store;
