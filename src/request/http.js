import axios from "axios";
import QS from "qs";
import { Toast } from "vant";
import store from "../store";
import router from "../router";

/*
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭*/
const tip = msg => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  });
};

/*
 * 跳转登录页
 * 携带当前页面路由*/
const toLogin = () => {
  router.replace({
    path: "/login",
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
};
