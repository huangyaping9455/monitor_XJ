import echarts from 'echarts'
import * as maps from '@/assets/map/index'
/**
 * 折线图配置
 */
export const lineoption = {
  color: ['#fffc00', '#ff7800'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        formatter: '{value}月'
      }
    },
    confine: true
  },
  legend: {
    textStyle: {
      color: '#56e6ff',
      fontFamily: 'Microsoft YaHei'
    },
    bottom: '1%',
    itemGap: 16,
    left: 'center',
    data: ['超速处理', '超速']
  },
  grid: {
    left: '11%',
    right: '5%',
    top: '5%',
    bottom: '19%'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    // data:['1月','2月','3月','4月','5月','6月','7月'],
    axisLabel: {
      textStyle: {
        color: '#56e6ff',
        fontFamily: 'Microsoft YaHei'
      }
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(86, 230, 255, 0.4)'
      }
    },
    splitLine: {
      show: true,
      interval: 1,
      lineStyle: {
        color: 'rgba(86, 230, 255, 0.4)'
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    axisLabel: {
      textStyle: {
        color: '#56e6ff',
        fontFamily: 'Microsoft YaHei'
      }
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(86, 230, 255, 0.4)'
      }
    },
    axisTick: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(86, 230, 255, 0.4)'
      }
    }
  },
  series: {
    name: '超速处理',
    type: 'line',
    smooth: true,
  }
}
export const lineName = new Map()
  .set('chaosu', {
    legendDate: ['超速处理', '超速'],
    yOne: 'chaosucl',
    yTow: 'chaosu'
  })
  .set('pilao', {
    legendDate: ['疲劳处理', '疲劳'],
    yOne: 'pilaocl',
    yTow: 'pilao'
  })
  .set('yejian', {
    legendDate: ['夜间处理', '夜间'],
    yOne: 'yejiancl',
    yTow: 'yejian'
  })
  .set('yichang', {
    legendDate: ['异常处理', '异常'],
    yOne: 'yichangcl',
    yTow: 'yichang'
  })
  .set('dadianhua', {
    legendDate: ['打电话处理', '打电话'],
    yOne: 'dadianhuacl',
    yTow: 'dadianhua'
  })
  .set('fenshen', {
    legendDate: ['分神处理', '分神'],
    yOne: 'fenshencl',
    yTow: 'fenshen'
  })
  .set('chouyan', {
    legendDate: ['抽烟处理', '抽烟'],
    yOne: 'chouyancl',
    yTow: 'chouyan'
  })
  .set('zhudongbj', {
    legendDate: ['疲劳处理', '疲劳'],
    yOne: 'pilaoshipincl',
    yTow: 'pilaoshipin'
  })

export const geooption = (name, mapData) => {
  // console.log(mapData);
  echarts.registerMap(name, maps[name]);
  return {
    title: {
      text: `${name=="China"?mapData[0].name:name}各地当月报警数`,
      textStyle: {
        color: '#01f8ff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Microsoft YaHei'
      },
      left: 20,
      top: 18
    },
    tooltip: {
      trigger: 'item',
      confine: true
    },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 2500,
      bottom: 20,
      left: 40,
      inRange: {
        color: ['rgba(78,253,0,1)', 'rgba(251,239,1,1)', 'rgba(252,0,26,1)']
      },
      text: ['高', '低'],
      textStyle: {
        color: '#ffffff'
      },
      calculable: true
    },
    animationDuration: 3000,
    series: {
      name: '报警数',
      type: "map3D",
      map: name,
      instancing: true,
      itemStyle: {
        color: 'rgba(255,255,255,0.1)',
        borderColor: '#41b4e1',
        borderWidth: 1,
      },
      top: 'top',
      label: {
        show: true,
        textStyle: {
          color: '#ffffff',
          fontSize: 12,
          backgroundColor: 'transparent',
          borderColor: 'red'
        }
      },
      viewControl: {
        distance: name == 'China' ? 88 : 120,
        // alpha:name=='China'?35:20,
        // beta:name=='China'?-25:0,
        // distance:120,
        alpha: 90,
        beta: 0,
      },
      shading: 'lambert',
      emphasis: {
        show: false,
        // label:{
        //   show: false,
        // },
        itemStyle: {
          color: '#01f5f8',
        }
      },
      data: mapData
    }
  }
}
/**废弃 */
//折线图颜色
export const barcolor = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: '#40ecc7'
    }, {
      offset: 1,
      color: '#15cad4'
    }]
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: '#00c8f5'
    }, {
      offset: 1,
      color: '#0080de'
    }]
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: '#ffe78d'
    }, {
      offset: 1,
      color: '#e3b725'
    }]
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: '#00c8f5'
    }, {
      offset: 1,
      color: '#0080de'
    }]
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: 'rgba(24,185,73, 0.3)'
    }, {
      offset: 1,
      color: 'rgba(24,185,73, 0)'
    }]
  }
]

/**
 * 饼图配置
 */
export const pieoption = {
  color: ['#fffc00', '#c23733'],
  title: {
    show: false,
    text: '未审核各类型报警数',
    textStyle: {
      color: '#01f8ff',
      fontSize: 16,
      fontWeight: '300',
      fontFamily: 'Microsoft YaHei'
    },
    left: 'center',
    top: 18
  },
  legend: {
    textStyle: {
      color: '#fff',
      fontFamily: 'Microsoft YaHei'
    },
    top: 25,
    itemGap: 16,
    left: 'center',
    data: ['注册企业', '监控企业']
  },
  series: {
    name: '',
    type: 'pie',
    radius: [40, 80],
    center: ['50%', '60%'],
    itemStyle: {
      borderWidth: 10,
      borderColor: '#0b122e'
    },
    label: {
      show: true,
      formatter: '{d}%',
      padding: [-20, -36, 0, -36]
    },
    labelLine: {
      length: 35,
      length2: 36
    },
    data: [{
      name: '监控企业',
      value: 250
    }, {
      name: '注册企业',
      value: 750
    }]
  }
}

export const geooption1 = (name, data) => {
  echarts.registerMap(name, maps[name]);
  //地图经纬度
  let geoCoordMap = {}
  var mapFeatures = echarts.getMap(name).geoJson.features;
  mapFeatures.forEach(function (v) {
    // 地区名称
    let name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

  });
  data = data.map(el => {
    return {
      ...el,
      value: [...geoCoordMap[el.name], el.value]
    }
  })
  return {
    geo: {
      map: 'china',
      itemStyle: {
        areaColor: '#0762fe',
        borderColor: '#051f98',
        emphasis: {
          areaColor: '#01f5f8',
        }
      },
      label: {
        emphasis: {
          show: false
        }
      },
    },
    series: {
      type: 'scatter',
      coordinateSystem: 'geo',
      symbolSize: 8,
      itemStyle: {
        normal: {
          color: '#ffffff',
          borderColor: '#ffffff60',
          shadowBlur: 20
        }
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true
        }
      },
      data: data
    }
  }
}