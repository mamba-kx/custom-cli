import { Toast } from "vant";
import { AxiosInstance } from "axios";

interface IOptions {
  appointCode: Array<number> | ;
} 

interface IRequestRes {
  data: {
    code?: number;
    message?: string;
    data?: object;
  };
}

/**
 * @param {promise} axiosRequest:axios请求
 * @param {object} options:其他状态码
 * @returns {promise<[res,err]>} [res,err]
 */
const handleError = (axiosRequest: any, options: IOptions) => {
  const { appointCode = [] } = options ?? {};
  return axiosRequest
    .then((res: IRequestRes) => {
      if (res && res?.data?.code === 200) {
        return Promise.resolve([res, null]);
      } else {
        if (appointCode.includes(res?.data?.code)) {
          if (res.data && res.data.message) {
            Toast(res.data.message);
          }
        }
        return Promise.resolve([res, res?.data]);
      }
    })
    .catch((err: any) => {
      return Promise.resolve([null, err]);
    });
};

export default handleError;
