import baseUrl from "./base";
import axios from "../http";

const home = {
  getOrderInfo(params) {
    return axios.post(
      baseUrl + "/purchase/store/listPurchaseOrderForAppHome",
      params
    );
  },
  getSwiperInfo(params) {
    return axios.post(
      baseUrl + "/stores/banner/open/listBannerByBannerType",
      params
    );
  }
};

export default home;
