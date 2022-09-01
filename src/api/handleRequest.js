import { Toast } from "vant";

/**
 * @param {promise} axiosRequest:axios请求
 * @param {object} options:其他状态码
 * @returns {promise<[res,err]>} [res,err]
 */
const handleRequest = (axiosRequest) => {
  return axiosRequest
    .then((res) => {
      if (res?.data?.code === 200) return Promise.resolve([res, null]);
      if (res?.data?.msg) return Toast(res?.data?.msg);
    })
    .catch((err) => {
      return Promise.resolve([null, err]);
    });
};

export default handleRequest;
