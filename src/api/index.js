import axios from "axios";

const $axios = axios.create({
  baseURL: window.$CONFIG.baseURL,
  timeout: 1000 * 10,
  headers: {
    "Content-Type": "applicatin/json"
  }
});
const api = {
  getUserInfo: (data) => $axios.post("/", data)
};

export default api;
