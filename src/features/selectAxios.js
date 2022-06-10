const createFeatures = require("./index");

// 添加axios
module.exports = function createAxios() {
	const axiosTemplate = `
  import axios from 'axios';

  const $axios = axios.create({
    baseURL: "http://xxx",
    timeout: 1000 * 10,
    headers: {
      'Content-Type': 'applicatin/json'
    }
  });
  const api = {
    getUserInfo: data => {
      return $axios.post('/', data);
    }
  };

  export default api;
  `;

	createFeatures(axiosTemplate, "api");
};

