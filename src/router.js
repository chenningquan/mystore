import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Login from "./views/login/Login";
import Lanuch from "./views/lanuch/Lanuch";
import Verificaton from "./views/login/Verificaton";
import Home from "./views/home/Home";
import ChooseStore from "./views/store/ChooseStore";

const routes = [
  {
    path: "/",
    component: Lanuch
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/verification",
    component: Verificaton
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/chooseStore",
    component: ChooseStore
  }
];

const router = new VueRouter({
  routes
});

export default router;
