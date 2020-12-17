import { $axios,awaitWrap } from '../api';
/** 首页模块 */
export default {
 /**首页新版 */
  // 政府-企业总数、个体总数、车辆总数、在线车辆数
  getOne(params) {
    return $axios.get('/blade-platform/platform/zhengFuShouYeNew/getOne',{ params: params });
  },
  // 政府-超速报警次数、疲劳报警总数、夜间行驶报警次数、异常报警次数
  getTwo(params) {
    return $axios.get('/blade-platform/platform/zhengFuShouYeNew/getTwo',{ params: params });
  },
  // 政府-北斗报警、主动安全设备报警月趋势
  getThree(params) {
    return $axios.get('/blade-platform/platform/zhengFuShouYeNew/getThree',{ params: params });
  },
  // 政府-各地区详细报警数据表
  getFour(params) {
    return $axios.get('/blade-platform/platform/zhengFuShouYeNew/getFour',{ params: params });
  },
 /**首页旧版 */
  // 政府-主动安全报警数报、gps报警数据
  getBaoJingNum(params) {
    return $axios.get('/blade-platform/platform/zhengFuShouYe/getBaoJingNum',{ params: params });
  },
  //政府-获取最近7天gps报警数等
  getSevenBaoJingList(params) {
    return $axios.get('/blade-platform/platform/zhengFuShouYe/getSevenBaoJingList',{ params: params });
  },
  //政府-注册、监控企业数据
  getZCJKQiYeNum(params) {
    return $axios.get('/blade-platform/platform/zhengFuShouYe/getZCJKQiYeNum',{ params: params });
  },
  //政府-本月注册车辆、监控车辆、停运车辆、上线车辆数据
  getZCJKVehicleList(params) {
    return $axios.get('/blade-platform/platform/zhengFuShouYe/getZCJKVehicleList',{ params: params });
  },
  awaitWrap
};