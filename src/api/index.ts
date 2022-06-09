import axios from "axios";

const $axios = axios.create({
  baseURL: "http://127.0.0.1",
  timeout: 1000 * 10,
  headers: {
    "Content-Type": "applicatin/json"
  }
});
const api = {
  getUserInfo: (data: any) => {
    return $axios.post('/', data);
  },
};

export default api;
