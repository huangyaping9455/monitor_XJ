<style lang="scss" scoped>
.home{
  height: 100vh;
  overflow: hidden;
  background: #0b122e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .home-center{
    display: flex;
    justify-content: space-around;
    .home-c-l{
      width: 20vw;
      height: 60vh;
    }
    .home-l-top{
      width: 100%;
      height: 50%;
      padding: 0.0714rem;
    }
    .home-l-bottom{
      width: 100%;
      height: 50%;
      background-image: url('~@/assets/img/bg_4.png');
      background-size: 100% 100%;
    }
    .home-c-r{
      width: 20vw;
      height: 60vh;
      .statistics{
        height: 50%;
        box-sizing: border-box;
        color: #ffffff;
        padding-top: 1.4286rem;
        padding-left: 2.5rem;
        font-size: 1.1429rem;
        &:first-of-type{
          padding-top: 2.1429rem;
        }
      }
      .statistics-num{
        display: flex;
        align-items: flex-end;
        /* span{
          width: 2.2143rem;
          height: 3.7857rem;
          background-color: #16276c;
          border-radius: 0.2857rem;
          font-weight: bold;
          font-size: 2.8571rem;
          text-align: center;
          line-height: 3.7857rem;
          margin-right: 0.5714rem;
        } */
      }
      p{
        margin: 0;
        margin-bottom: 1.4286rem;
      }
    }
    .home-c-c{
      width: 55%;
      height: 60vh;
      background-image: url('~@/assets/img/bg_10.png');
      background-size: 100% 100%;
      position: relative;
      .title{
        margin-top: 1.0714rem;
        margin-bottom: 0;
        font-size: 1.4286rem;
        color: #01f5f8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'MicrosoftYaHei';
      }
      .ptevbtn{
        position: absolute;
        top: 5%;
        left: 2%;
      }
    }
  }
  .home-footer{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    .home-f-l,.home-f-c,.home-f-r{
      width: 32vw;
      height: 28vh;
      background-image: url('~@/assets/img/bg_1.png');
      background-size: 100% 100%;
    }
    .home-f-c{
      background-image: url('~@/assets/img/bg_2.png');
    }
    .home-f-r{
      background-image: url('~@/assets/img/bg_3.png');
    }
  }
  .box{
    position: relative;
    .inbox1{
      position: absolute;
      z-index: 0;
      width: 0;
      height: 0;
      border-top: 1.4286rem solid #064e9f;
      border-left: 2.1429rem solid #064e9f;
      border-bottom: 1.4286rem solid transparent;
      border-right: 2.1429rem solid transparent;
      &::after{
        position: absolute;
        z-index: 0;
        content: '';
        top: -0.7143rem;
        left: -1.4286rem;
        width: 0;
        height: 0;
        border-top: 1rem solid #0b122e;
        border-left: 1.4286rem solid #0b122e;
        border-bottom: 0.7143rem solid transparent;
        border-right: 1.4286rem solid transparent;
      }
    }
    .inbox2{
      position: absolute;
      z-index: 0;
      right: 0;
      width: 0;
      height: 0;
      border-top: 1.4286rem solid #064e9f;
      border-left: 2.1429rem solid transparent;
      border-bottom: 1.4286rem solid transparent;
      border-right: 2.1429rem solid #064e9f;
      &::after{
        position: absolute;
        z-index: 0;
        content: '';
        top: -0.7143rem;
        right: -1.4286rem;
        width: 0;
        height: 0;
        border-top: 1rem solid #0b122e;
        border-left: 1.4286rem solid transparent;
        border-bottom: 0.7143rem solid transparent;
        border-right: 1.4286rem solid #0b122e;
      }
    }
  }
}
</style>

<template>
  <div class="home">
    <all-header></all-header>
    <div class="home-center">
      <div class="home-c-l">
        <div class="home-l-top box" v-loading="loading1" element-loading-background="rgba(0, 0, 0, 0.4)">
          <div class="inbox1"></div>
          <div class="inbox2"></div>
          <echart-base height="100%" width="100%" :chart-option="chartOption.option4"></echart-base>
        </div>
        <div class="home-l-bottom" v-loading="loading2" element-loading-background="rgba(0, 0, 0, 0.4)">
          <echart-base height="100%" width="100%" :chart-option="chartOption.option5"></echart-base>
        </div>
      </div>
      <div class="home-c-c" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.4)" >
        <!-- <p class="title">
          <svg-icon class="icon" icon-class="datas"/>
          平台数据分布
        </p> -->
        <echart-base @click="echartclick" height="100%" width="100%" :chart-option="chartOption.option7"></echart-base>
        <el-button class="ptevbtn" v-show="ptevbtnShow" size="mini" @click="getBaoJingNum(true)">返回</el-button>
      </div>
      <div class="home-c-r">
        <div class="home-l-top box" v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.4)">
          <div class="inbox1"></div>
          <div class="inbox2"></div>
          <div>
            <div class="statistics">
              <p>主动安全报警数</p>
              <p class="statistics-num">
                <chartNum :num="shebeibaojingshu"></chartNum>
                次
              </p>
            </div>
            <div class="statistics">
              <p>北斗报警数</p>
              <p class="statistics-num">
                <chartNum :num="gpsbaojingshu"></chartNum>
                次
              </p>
            </div>
          </div>
        </div>
        <div class="home-l-bottom" v-loading="loading2" element-loading-background="rgba(0, 0, 0, 0.4)">
          <echart-base height="100%" width="100%" :chart-option="chartOption.option6"></echart-base>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <div class="home-f-l" v-loading="loading3" element-loading-background="rgba(0, 0, 0, 0.4)">
        <echart-base height="100%" width="100%" :chart-option="chartOption.option1"></echart-base>
      </div>
      <div class="home-f-c" v-loading="loading3" element-loading-background="rgba(0, 0, 0, 0.4)">
        <echart-base height="100%" width="100%" :chart-option="chartOption.option2"></echart-base>
      </div>
      <div class="home-f-r" v-loading="loading3" element-loading-background="rgba(0, 0, 0, 0.4)">
        <echart-base height="100%" width="100%" :chart-option="chartOption.option3"></echart-base>
      </div>
    </div>
  </div>
</template>

<script>
import echartBase from '@/components/EChart/index'
import allHeader from "@/components/Header/index";
import chartNum from '@/components/ChartNum/index'
import homeApi from '@/api/modules/home';
import {pieoption,baroption,barcolor,geooption} from '@/config/echartoption1'
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      loading:false,
      loading1:false,
      loading2:false,
      loading3:false,
      chartOption:{option1:{},option2:{},option3:{},option4:{},option5:{},option6:{},option7:{}},
      newtime:'',
      gpsbaojingshu:0, //gps报警数据
      shebeibaojingshu:0, //主动安全报警数报
      ptevbtnShow:false,
      
    }
  },
  components:{
    'echart-base':echartBase,
    'chartNum':chartNum,
    "all-header": allHeader
  },
  created(){
    this.loading = true
    this.loading1 = true
    this.loading2 = true
    this.loading3 = true
    this.init()
  },
  mounted(){
    const timer1 = setInterval(() =>{                    
      this.init()           
    }, 180000);              
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once('hook:beforeDestroy', () => {  
      clearInterval(timer1);                                  
    })
  },
  computed:{
    ...mapGetters({
      userinfo:'userinfo'
    })
  },
  methods:{
    // 初始化
    init(){
      // 政府-获取最近7天gps报警数等
      this.getSevenBaoJingList()
      // 政府-主动安全报警数报、gps报警数据
      this.getBaoJingNum()
      //政府-注册、监控企业数据
      this.getZCJKQiYeNum()
      //政府-本月注册车辆、监控车辆、停运车辆、上线车辆数据
      this.getZCJKVehicleList()
    },
    // 政府-获取最近7天gps报警数等
    async getSevenBaoJingList(){
      let [err, data] = await homeApi.awaitWrap(homeApi.getSevenBaoJingList({
        deptId:this.userinfo.deptId
        // deptId:5448
      }))
      if(data){
        data = data.map(el=>{
          return {
            ...el,
            chulilv:parseInt(el.chulilv)
          }
        })
        this.loading3 = false
        let bgData = new Array(data.length).fill(100)
        this.chartOption.option1={
          ...baroption,
          dataset:{ source: data },
          legend:{ ...baroption.legend, show:true, data:['主动设备未处理报警数','北斗未处理报警数'] },
          xAxis:[
            { ...baroption.xAxis },
            { ...baroption.xAxis, axisLine:{ show:false }, axisLabel:{ show:false } }
          ],
          series:[
            { ...baroption.series[0] ,name:'主动设备未处理报警数',encode:{x: 'time',y: 'shebeiweichulishu'} },
            { ...baroption.series[1],yAxisIndex: 0 ,name:'北斗未处理报警数',symbol: 'emptyCircle', symbolSize: 8,encode:{x: 'time',y: 'gpsweichulishu'} },
            { ...baroption.series[2] ,data:bgData,xAxisIndex: 1 },
          ]
        }
        this.chartOption.option2={
          ...baroption,
          title:{ ...baroption.title, text:'近7天报警趋势' },
          dataset:{ source: data },
          series:[
            {
              ...baroption.series[1], name:'主动设备报警数',
              symbol: 'emptyCircle', symbolSize: 8,
              yAxisIndex: 0,encode:{x: 'time',y: 'shebeibaojingshu'}
            },
            {
              ...baroption.series[1], name:'北斗报警数',
              symbol: 'emptyCircle', symbolSize: 8,
              yAxisIndex: 0,encode:{x: 'time',y: 'gpsbaojingshu'}
            }
          ]
        }
        this.chartOption.option3={
          ...baroption,
          title:{ ...baroption.title, text:'最近七天审核率%' },
          dataset:{ source: data },
          yAxis:{ ...baroption.yAxis[0], min:0,max:100 },
          series:[
            {
              ...baroption.series[1], name:'审核率',yAxisIndex: 0,
              symbol: 'emptyCircle', symbolSize: 8,
              itemStyle: { color: '#18b949' },
              encode:{x: 'time',y: 'chulilv'}
            }
          ]
        }
      }else{
        this.$message.error(err);
      }
    },
    // 政府-主动安全报警数报、gps报警数据
    async getBaoJingNum(loading = this.loading){
      this.loading = loading
      let [err, data] = await homeApi.awaitWrap(homeApi.getBaoJingNum({
        deptId:this.userinfo.deptId
        // deptId:5448
      }))
      this.loading = false
      if(data){
        this.gpsbaojingshu = data.gpsbaojingshu
        this.shebeibaojingshu = data.shebeibaojingshu
        let mapData = [
          {
            name:data.areaName,
            value:data.shebeibaojingshu+data.gpsbaojingshu,
            shebeibaojingshu:data.shebeibaojingshu,
            gpsbaojingshu:data.gpsbaojingshu,
            zhengfuid:data.zhengfuid
          }
        ]
        console.log(mapData)
        this.chartOption.option7 = geooption(this.userinfo.diqu,mapData)
        this.ptevbtnShow = false
      }else{
        this.$message.error(err);
      }
    },
    //政府-注册、监控企业数据
    async getZCJKQiYeNum(){
      let [err, data] = await homeApi.awaitWrap(homeApi.getZCJKQiYeNum({
        deptId:this.userinfo.deptId
        // deptId:5448
      }))
      this.loading1 = false
      if(data){
        this.chartOption.option4 = {
          ...pieoption,
          series:{
            ...pieoption.series,
            data:[
              { name: '监控企业', value: data.zhuCeQiYeShu }, 
              { name: '注册企业', value: data.jianKongQiYeShu }
            ]
          }
        }
      }else{
        this.$message.error(err);
      }
    },
    //政府-本月注册车辆、监控车辆、停运车辆、上线车辆数据
    async getZCJKVehicleList(){
      let [err, data] = await homeApi.awaitWrap(homeApi.getZCJKVehicleList({
        deptId:this.userinfo.deptId
        // deptId:5448
      }))
      this.loading2 = false
      let bgData = new Array(data.length).fill(100)
      if(data){
        this.chartOption.option5={
          ...baroption,
          title:{ ...baroption.title, text:'车辆注册/监控情况(辆)' },
          legend:{ ...baroption.legend, show:true, data:['注册车辆','监控车辆'] },
          dataset:{ source: data },
          xAxis:[
            { ...baroption.xAxis },
            { ...baroption.xAxis, axisLine:{ show:false }, axisLabel:{ show:false } }
          ],
          series:[
            { ...baroption.series[2], xAxisIndex: 1,data:bgData },
            { ...baroption.series[2], xAxisIndex: 1,data:bgData },
            {
              ...baroption.series[0], name:'注册车辆',
              encode:{x: 'time',y: 'zcvehnumb'}
            },
            {
              ...baroption.series[0], name:'监控车辆',
              itemStyle: { barBorderRadius: [5, 5, 0, 0], color: barcolor[1] },
              encode:{x: 'time',y: 'jkvehnum'}
            }
          ]
        }
        this.chartOption.option6={
          ...baroption,
          title:{ ...baroption.title, text:'车辆状况(辆)' },
          legend:{ ...baroption.legend, show:true, data:['停运车辆','上线车辆'] },
          dataset:{ source: data },
          xAxis:[
            { ...baroption.xAxis },
            { ...baroption.xAxis, axisLine:{ show:false }, axisLabel:{ show:false } }
          ],
          series:[
            { ...baroption.series[2], xAxisIndex: 1,data:bgData },
            { ...baroption.series[2], xAxisIndex: 1,data:bgData },
            {
              ...baroption.series[0], name:'停运车辆',
              encode:{x: 'time',y: 'tyvehnum'}
            },
            {
              ...baroption.series[0], name:'上线车辆',
              itemStyle: { barBorderRadius: [5, 5, 0, 0], color: barcolor[1] },
              encode:{x: 'time',y: 'sxvehnum'}
            }
          ]
        }
      }else{
        this.$message.error(err);
      }
    },
    // 地图下钻
    async echartclick(el){
      if(!el.value) return false
      this.loading = true
      let [err, data] = await homeApi.awaitWrap(homeApi.getBaoJingNum({
        xiaJiDeptId:el.data.zhengfuid
      }))
      this.loading = false
      if(data.length>0){
        let mapData = data.map(element => {
          return {
            name:element.areaName,
            value:element.shebeibaojingshu+element.gpsbaojingshu,
            shebeibaojingshu:element.shebeibaojingshu,
            gpsbaojingshu:element.gpsbaojingshu,
            zhengfuid:element.zhengfuid
          }
        });
        this.chartOption.option7 = geooption(el.name,mapData)
        this.ptevbtnShow = true
      }
      if(err){
        this.$message.error(err);
      }
    }
  }
}
</script>
