import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Login from "./views/login/Login";
import Lanuch from "./views/lanuch/Lanuch";

const routes = [
  {
    path: "/",
    component: Lanuch
  },
  {
    path: "/login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
