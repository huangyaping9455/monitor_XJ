import {
  $axios,
  awaitWrap
} from '../api';
import qs from 'qs';
/** 数据分析模块 */
export default {
  //政府报警统计-报警统计结算
  getZFBJTJJS(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoGao/getList', data);
  },
  getZFDQBJCLLVTJ(data) {
    return $axios.post('/blade-platform/platform/organization/getList', data);
  },
  // 车辆日运行情况统计
  getZFCLRYXTJ(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFCLRYXTJ', data);
  },
  // 企业日运行情况统计
  getQYRYXTJ(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/GetQYRYXTJ', data);
  },
  //政府报警统计-报警统计结算
  getZFDQBJTJJS(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFDQBJTJPM', data);
  },
  getZFCLBJTJPM(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFCLBJTJPM', data);
  },
  // 周报下载
  getZBdown(data) {
    data = qs.stringify(data)
    return $axios.post('/blade-platform/platform/baobiaowenjian/preview', data);
  },
  // 月报下载
  getYBdown(data) {
    data = qs.stringify(data)
    return $axios.post('/blade-platform/platform/baobiaowenjian/preview', data);
  },
  // 标准化弹出列表
  getTreeTable(params) {
    return $axios.get('/blade-doc/doc/biaozhunhuamuban/listTree', {
      params: params
    });
  },
  // 安全达标统计列表
  getSafetyStandardsQiYeList(data) {
    return $axios.post('/blade-platform/platform/zhengFuShouYeNew/getSafetyStandardsQiYeList', data);
  },
  // 获取学习记录列表
  selectZFPersonLearnInfoAll(data) {
    return $axios.post('/blade-platform/platform/qiYeShouYe/selectZFPersonLearnCoutAll', data);
  },
  // 获取学习 详情 记录列表
  selectPersonLearnInfoAll(data) {
    return $axios.post('/blade-platform/platform/qiYeShouYe/selectPersonLearnInfoAll', data);
  },
  // 获取隐患排查 明细 列表
  getTroubleSetList(params) {
    return $axios.get('/prod-api/tapi/thirdtrouble/trouble/buiness/list', {
      params: params
    });
  },
  // 获取隐患排查列表
  getTroubleList(params) {
    return $axios.get('/prod-api/tapi/thirdtrouble/trouble/buiness/statisticsList', {
      params: params
    });
  },
  // 获取隐患排查 数
  getTroublelistCount(params) {
    return $axios.get('/prod-api/tapi/thirdtrouble/trouble/buiness/listCount', {
      params: params
    });
  },
  // 获取首页隐患排查 数
  getTroubleCountNum(comId) {
    return $axios.get(`/prod-api/tapi/thirdtrouble/trouble/buiness/countNumZF/${comId}`);
  },
  awaitWrap
};