import axios from 'axios';
import Cookies from 'js-cookie'
import {
  Message
} from 'element-ui';

// 请求取消
const CancelToken = axios.CancelToken;
const source = CancelToken.source();


export const $axios = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASE_API : '/',
  timeout: 60000
});
// 请求拦截
$axios.interceptors.request.use((config) => {
  // 请求头携带token
  // config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  config.headers['accessToken'] = Cookies.get('accessToken');
  return config;
});

// 响应拦截
$axios.interceptors.response.use((response) => {
  const {
    status,
    data
  } = response;
  if (Object.is(status, 200)) {
    const {
      code,
      msg
    } = data;
    switch (code) {
      case 200:
        msg && console.log(msg);
        return Promise.resolve(data.data);
      case 304:
        // 请求过期
        console.log('跳转到首页');
        break;
      case 500:
        return Promise.reject('失败了');
      default:
        return Promise.reject(msg);
    }
  } else {
    return Promise.reject(new Error());
  }
});

//async错误处理
export const awaitWrap = (promise) => {
  return promise
    .then(data => [null, data])
    .catch(err => [err, null])
}