import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
    hasNetwork: true
  },
  mutations: {
    changeNetwork(state, hasNetwork) {
      state.hasNetwork = hasNetwork;
    }
  }
});

export default store;
