import { $axios,awaitWrap } from '../api';
import qs from 'qs';
/** 登录模块 */
export default {
  // 获取验证码
  getcode() {
    return $axios.get('/blade-auth/getVerificationCode');
  },
  // 登录授权
  ZFtoken(data) {
    data = qs.stringify(data)
    return $axios.post('/blade-auth/ZFSignIn',data);
  },
  // 退出登录
  logout() {
    return $axios.get('/blade-auth/logout');
  },
  awaitWrap
};