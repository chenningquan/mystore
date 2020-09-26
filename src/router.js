import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Login from "./views/login/Login";
import Lanuch from "./views/lanuch/Lanuch";
import Verificaton from "./views/login/Verificaton";
import Home from "./views/home/Home";

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
