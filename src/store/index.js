import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    phone: localStorage.getItem("phone"),
    storeCode: localStorage.getItem("storeCode"),
    store: Object,
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
    },
    changeStore(state, store) {
      state.store = store;
      state.storeCode = store.storeCode;
      localStorage.setItem("storeCode", store.storeCode);
    }
  }
});

export default store;
