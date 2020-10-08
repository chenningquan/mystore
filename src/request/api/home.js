import baseUrl from "./base";
import axios from "../http";

const home = {
  getOrderInfo(params) {
    return axios.post(
      baseUrl + "/purchase/store/listPurchaseOrderForAppHome",
      params
    );
  }
};

export default home;
