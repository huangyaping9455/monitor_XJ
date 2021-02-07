import {
  $axios,
  awaitWrap
} from '../api';
/** 数据分析模块 */
export default {
  // 政府报警统计-报警处理情况(月)
  getZFBJMonthList(params) {
    return $axios.get('/blade-platform/platform/zhengFuBaoJingTongJi/getZFBJMonthListNew', {
      params: params
    });
  },
  //政府报警统计-当年报警、处警趋势(年)
  getZFBJQSList(params) {
    return $axios.get('/blade-platform/platform/zhengFuBaoJingTongJi/getZFBJQSList', {
      params: params
    });
  },
  //政府-企业报警占比
  getZFBJQiYeList(params) {
    return $axios.get('/blade-platform/platform/zhengFuBaoJingTongJi/getZFBJQiYeList', {
      params: params
    });
  },
  //政府报警统计-报警处理情况(年)
  getZFBJYearList(params) {
    return $axios.get('/blade-platform/platform/zhengFuBaoJingTongJi/getZFBJYearList', {
      params: params
    });
  },
  //政府报警统计-地区报警排名
  getZFDQBJPMList(params) {
    return $axios.get('/blade-platform/platform/zhengFuBaoJingTongJi/getZFDQBJPMList', {
      params: params
    });
  },
  //政府报警统计-企业报警排名
  getZFQYBJPMList(params) {
    return $axios.get('/blade-platform/platform/zhengFuBaoJingTongJi/getZFQYBJPMList', {
      params: params
    });
  },
  //政府报警统计-报警统计结算
  getZFBJTJJS(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFBJTJJS', data);
  },
  //政府报警统计-地区报警处理率
  getZFDQBJCLLVTJ(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFDQBJCLLVTJ', data);
  },
  //政府报警统计-企业报警处理率
  getZFQYBJCLLVTJ(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFQYBJCLLVTJ', data);
  },
  // 政府报警统计-gps报警详情明细
  getZFgpsBJMX(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFgpsBJMX', data);
  },
  // 政府报警统计-DMS报警详情明细
  getZFDMSBJMX(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFDMSBJMX', data);
  },
  // 政府报警统计-所有报警详情明细
  getZFALLBJMX(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFALLBJMX', data);
  },
  // 政府报警统计-报警车辆详情明细
  getZFVehicleBJMX(data) {
    return $axios.post('/blade-platform/platform/zhengFuBaoJingTongJi/getZFVehicleBJMX', data);
  },
  // 牌照和颜色-获取数据
  selectByCPYS(params) {
    return $axios.get('/blade-platform/platform/vehicle/selectByCPYS', {
      params: params
    });
  },
  // 获取点位数据-获取gps数据(new)
  getPointDataNew(params) {
    return $axios.get('/blade-gps/gps/gpsdata/getPointDataNew', {
      params: params
    });
  },
  // 获取图片视频数据-获取gps数据
  getImageData(params) {
    return $axios.get('/blade-gps/gps/gpsdata/getImageData', {
      params: params
    });
  },
  // 点击凭证
  // selectBJDetail(params) {
  //   return $axios.post(`/blade-alarm/alarm/alarminfo/selectBJDetail`,{params:params},{headers:{"content-type":"application/x-www-form-urlencoded"}});
  // },
  // 获取报警数据
  getAlarmGuIdList(params) {
    return $axios.get('/blade-platform/platform/zhengFuBaoJingTongJi/getAlarmGuIdList', {
      params: params
    });
  },
  awaitWrap
};