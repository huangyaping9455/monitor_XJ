import echarts from 'echarts'
import * as maps from '@/assets/map/index'
//柱状图颜色
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
  },
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
      offset: 0,
      color: 'rgba(0,200,245, 0.3)'
    }, {
      offset: 1,
      color: 'rgba(0,200,245, 0)'
    }]
  }
]
/**
 * 柱状图配置
 */
export const baroption = {
  color: ['#fffc00', '#ff7800'],
  legend: {
    show: false,
    textStyle: {
      color: '#fff',
      fontFamily: 'Microsoft YaHei'
    },
    top: '20%',
    itemGap: 16,
    left: 'center',
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    },
    confine: true
  },
  title: {
    text: '近7天未处理报警趋势',
    textStyle: {
      color: '#01f8ff',
      fontSize: 16,
      fontWeight: '300',
      fontFamily: 'Microsoft YaHei'
    },
    left: 'center',
    top: '6%'
  },
  animationDuration: 3000,
  grid: {
    left: '13%',
    right: '8%',
    top: '32%',
    bottom: '12%'
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      textStyle: {
        color: '#fff',
        fontFamily: 'Microsoft YaHei'
      }
    },
    axisLine: {
      lineStyle: {
        color: '#152853'
      }
    },
    axisTick: {
      show: false
    }
  },
  yAxis: [{
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontFamily: 'Microsoft YaHei'
        }
      },
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#152853'
        }
      }
    },
    {
      axisLabel: {
        textStyle: {
          color: '#fff',
          fontFamily: 'Microsoft YaHei'
        }
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    {
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      min: 0,
      max: 100,
      splitLine: {
        show: false
      }
    },
  ],
  series: [{
      name: '',
      type: 'bar',
      barWidth: 10,
      zlevel: 1,
      itemStyle: {
        barBorderRadius: [5, 5, 0, 0],
        color: barcolor[0]
      },
      // data:[500,750,900,600,1000,1150,700,650,650]
    },
    {
      name: '',
      type: 'line',
      smooth: true,
      symbol: 'none',
      yAxisIndex: 1,
      // data:[610,790,920,950,1155,1154,850,750,1150]
    },
    {
      name: '',
      type: 'bar',
      barWidth: 10,
      yAxisIndex: 2,
      itemStyle: {
        color: '#112247',
        // color: '#fff',
        barBorderRadius: [5, 5, 0, 0],
      },
      // barGap: '-100%',
      // data:[100,100,100,100,100,100,100,100,100]
    }
  ]
}
/**
 * 饼图配置
 */
export const pieoption = {
  color: ['#fffc00', '#c23733', '#7643da', '#3ca6ff', '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed', '#13c982', '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', '#6699FF', '#ff6666', '#3cb371', '#b8860b', '#30e0e0'],
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
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
    confine: true
  },
  animationDuration: 3000,
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
/**
 * 地图配置
 */
// export const geooption = (name,mapData) => {
//   echarts.registerMap(name, maps[name]);
//   return {
//     legend:{
//       textStyle: {
//         color: '#fff',
//         fontFamily :'Microsoft YaHei'
//       },
//       bottom :10,
//       left:15,
//       data:['报警数']
//     },
//     tooltip: {
//       trigger: 'item',
//       formatter:(val)=>{
//         let html = val.data?`<div>${val.name}</div>
//         <div><span>总报警数：</span>${val.data.value}</div>
//         <div><span>主动安全报警数：</span>${val.data.shebeibaojingshu}</div>
//         <div><span>gps报警数：</span>${val.data.gpsbaojingshu}</div>`:`<div>${val.name}</div>`;
//         return html
//       },
//       confine:true
//     },
//     visualMap: {
//       type: 'continuous',
//       min: 0,
//       max: 2500,
//       bottom: 20,
//       right: 40,
//       text: ['高', '低'],
//       textStyle: {
//         color: '#ffffff'
//       },
//       calculable:true
//     },
// animationDuration: 3000,
//     series:[
//       {
//         name: '报警数',
//         type: 'map',
//         mapType: name,
//         roam: false,
//         label: {
//           show: true,
//           color :'#de73b6'
//         },
//         itemStyle: {
//           areaColor: '#ffffff',
//           borderColor: '#41b4e1',
//           emphasis: {
//             areaColor: '#01f5f8',
//           }
//         },
//         data:mapData
//       },
//       // {
//       //   name: 'gps报警数据',
//       //   type: 'map',
//       //   mapType: name,
//       //   roam: false,
//       //   label: {
//       //     show: true,
//       //     color :'#de73b6'
//       //   },
//       //   itemStyle: {
//       //     areaColor: '#ffffff',
//       //     borderColor: '#41b4e1',
//       //     emphasis: {
//       //       areaColor: '#01f5f8',
//       //     }
//       //   },
//       //   data:mapData.city1
//       // }
//     ]
//   }
// }

export const geooption = (name, mapData) => {
  echarts.registerMap(name, maps[name]);
  return {
    legend: {
      textStyle: {
        color: '#fff',
        fontFamily: 'Microsoft YaHei',
        // backgroundColor:'red'
      },
      bottom: 10,
      left: 15,
      data: ['报警数']
    },
    tooltip: {
      trigger: 'item',
      formatter: (val) => {
        let html = val.value >= 0 ? `<div>${val.name}</div>
        <div><span>总报警数：</span>${val.data.value}</div>
        <div><span>主动安全报警数：</span>${val.data.shebeibaojingshu}</div>
        <div><span>gps报警数：</span>${val.data.gpsbaojingshu}</div>` : `<div>${val.name}</div>`;
        return html
      },
      confine: true
    },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 2500,
      bottom: 20,
      right: 40,
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
        // distance:name=='China'?76:100,
        // alpha:name=='China'?35:20,
        // beta:name=='China'?-25:0,
        distance: 120,
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

export const geooption1 = (name, mapData) => {
  echarts.registerMap(name, maps[name]);
  return {
    legend: {
      textStyle: {
        color: '#fff',
        fontFamily: 'Microsoft YaHei',
        // backgroundColor:'red'
      },
      bottom: 10,
      left: 15,
      data: ['月报警数']
    },
    tooltip: {
      trigger: 'item',
      formatter: (val) => {
        let html = val.value >= 0 ? `<div>${val.name}</div>
        <div><span>月报警数：</span>${val.data.value}</div>
        <div><span>月未处理数：</span>${val.data.yueweichulishu}</div>
        <div><span>月处理率：</span>${val.data.yuechulilv}</div>` : `<div>${val.name}</div>`;
        return html
      },
      confine: true
    },
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 2500,
      bottom: 20,
      right: 40,
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
      name: '月报警数',
      type: "map3D",
      map: name,
      itemStyle: {
        color: 'rgba(255,255,255,0.1)',
        borderColor: '#41b4e1',
        borderWidth: 1,
      },
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

// export const geooption1 = (name,data) => {
//   echarts.registerMap(name, maps[name]);
//   //地图经纬度
//   let geoCoordMap = {}
//   var mapFeatures = echarts.getMap(name).geoJson.features;
//   mapFeatures.forEach(function(v) {
//       // 地区名称
//       let name = v.properties.name;
//       // 地区经纬度
//       geoCoordMap[name] = v.properties.cp||v.properties.centroid;

//   });
//   data = data.map(el=>{
//     return {
//       ...el,
//       value: [...geoCoordMap[el.name],el.value]
//     }
//   })
//   return {
//     geo:{
//       map: name,
//       itemStyle: {
//         areaColor: '#0762fe',
//         borderColor: '#051f98',
//         emphasis: {
//           areaColor: '#01f5f8',
//         }
//       },
//       label: {
//         emphasis: {
//           show: false
//         }
//       },
//     },
//     animationDuration: 3000,
//     tooltip: {
//       trigger: 'item',
//       formatter:(val)=>{
//         let html = val.data?`<div>${val.name}</div>
//         <div><span>月报警数：</span>${val.data.value[2]}</div>
//         <div><span>月未处理数：</span>${val.data.yueweichulishu}</div>
//         <div><span>月处理率：</span>${val.data.yuechulilv}</div>`:`<div>${val.name}</div>`;
//         return html
//       },
//       confine:true
//     },
//     series:{
//       type: 'scatter',
//       coordinateSystem: 'geo',
//       symbolSize:8,
//       itemStyle: {
//         normal: {
//           color: '#ffffff',
//           borderColor: '#ffffff60',
//           shadowBlur: 20
//         }
//       },
//       label: {
//         normal: {
//           formatter: '{b}',
//           position: 'right',
//           show: true
//         }
//       },
//       data:data
//     }
//   }
// }