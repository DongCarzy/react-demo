import axios from 'axios';
// import qs from 'qs';
import { message } from 'antd';

const request = () => {
  const instance = axios.create();

  instance.interceptors.request.use(
    config => {
      // const { url, params, data, method, headers } = config;
      console.log(config);
      return config;
    },
    error => Promise.reject(error)
  );

  instance.interceptors.response.use(
    response => {
      console.log(response.status);
      message.info("请求成功");
      return response.data;
    },
    error => {
      if (error.response) {
        const { data = {}, status } = error.response;
        let msg = `HTTP ERROR: ${status}`;
        if (typeof data === 'string') {
          msg = data;
        } else if (typeof data === 'object') {
          msg = data.message;
        }
        message.error(msg);
        return Promise.reject(error.response);
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default request();
