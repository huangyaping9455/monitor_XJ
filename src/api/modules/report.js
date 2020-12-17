import {
  $axios,
  awaitWrap
} from '../api';
/** 数据分析模块 */
export default {
  //政府报警统计-报警统计结算
  getZFBJTJJS(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoGao/getList', data);
  },
  getZFDQBJCLLVTJ(data) {
    return $axios.post('/blade-platform/platform/organization/getList', data);
  },
  //政府报警统计-报警统计结算
  getZFDQBJTJJS(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFDQBJTJPM', data);
  },
  getZFCLBJTJPM(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFCLBJTJPM', data);
  },
  awaitWrap
};