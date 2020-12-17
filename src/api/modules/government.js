import { $axios,awaitWrap } from '../api';
/** 政企互通模块 */
export default {
  // 分页-通知公告管理
  getanbiaolist(data) {
    return $axios.post('/blade-platform/platform/xinxijiaohuzhuti/list',data);
  },
  // 新增-通知公告
  createanbiaolist(data) {
    return $axios.post('/blade-platform/platform/xinxijiaohuzhuti/insert',data);
  },
  // 根据ID查询通知公告详情
  getOne(data) {
    return $axios.post('/blade-platform/platform/xinxijiaohuzhuti/getOne',data);
  },
  // 编辑-通知公告
  update(data) {
    return $axios.post('/blade-platform/platform/xinxijiaohuzhuti/update',data);
  },
  // 获取送达企业列表
  getQiYe(params) {
    return $axios.get('/blade-platform/platform/xinxijiaohuzhuti/getQiYe',{ params: params });
  },
  // 政府-获取统计车辆数据
  getVehicleList(params) {
    return $axios.get('/blade-platform/platform/gpsVehicle/getVehicleList',{ params: params });
  },
  // 政府-获取政府组织树结构数据
  getTree(params) {
    return $axios.get('/blade-platform/platform/organization/getTree',{ params: params });
  },
  awaitWrap
};