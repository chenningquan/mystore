import baseUrl from "./base";
import axios from "../http";

const login = {
  // 获取验证码
  getVerificationCode(params) {
    return axios.post(baseUrl + "/stores/stores/open/sendCode", params);
  },

  // 登录
  login(params) {
    return axios.post(baseUrl + "/stores/stores/open/loginByAPP", params);
  },

  // 获取用户信息和门店
  getAccoutStoreByPhone(params) {
    return axios.post(
      baseUrl + "/stores/stores/open/getAccountStoreByPhoneNew",
      params
    );
  },

  //生成token
  generateTokenByCustom(params) {
    return axios.post(
      baseUrl + "/stores/stores/open/generateTokenByCustom",
      params
    );
  }
};

export default login;
