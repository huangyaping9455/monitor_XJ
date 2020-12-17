<style lang="scss" scoped>
.dataAnalysis {
  height: 100vh;
  overflow: hidden;
  background: #0b122e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .home-center {
    display: flex;
    justify-content: space-around;
    .home-c-l,
    .home-c-r {
      width: 20vw;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .home-l-top {
      width: 100%;
      height: 48%;
      background-image: url("~@/assets/img/bg_4.png");
      background-size: 100% 100%;
    }
    .home-l-bottom {
      width: 100%;
      height: 48%;
      background-image: url("~@/assets/img/bg_9.png");
      background-size: 100% 100%;
      .title {
        font-size: 1.1429rem;
        height: 12%;
        color: #01f8ff;
        text-align: center;
        font-weight: normal;
        margin-top: 1.7857rem;
      }
      .situation-list {
        color: #ffffff;
        font-size: 1rem;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 3.8%;
        & > div {
          flex: 0 0 33%;
        }
        p:first-of-type {
          color: #0762fe;
          font-weight: bold;
          font-size: 1.7143rem;
          margin-bottom: 0.2857rem;
        }
        p:last-of-type {
          margin-top: 0px;
        }
      }
    }
    .home-c-r {
      width: 20vw;
      height: 60vh;
      .home-l-bottom {
        background-image: url("~@/assets/img/bg_4.png");
      }
      .title {
        font-size: 1.1429rem;
        height: 12%;
        color: #01f8ff;
        font-weight: normal;
        margin-top: 1rem;
        margin-bottom: 0.5714rem;
        display: flex;
        align-items: center;
        span:first-of-type {
          flex: 1;
          text-align: center;
          margin-left: 24%;
        }
        .more {
          text-align: center;
          flex: 0 0 12%;
          margin-right: 12%;
          font-size: 0.8571rem;
          cursor: pointer;
          &:hover {
            transform: scale(1.4);
            transition: transform 0.2s;
          }
        }
      }
      .tablebox {
        height: 79%;
        color: #ffffff;
        font-size: 1rem;
        padding: 1% 2.1429rem 1% 1.4286rem;
        text-align: center;
        .tr {
          display: flex;
          align-items: center;
          height: 15%;
          margin-bottom: 0;
          .tdl,
          .tdr {
            flex: 1;
          }
          .tdc {
            flex: 0 0 60%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
        .tr:hover {
          background-color: #475858;
        }
        .wrap {
          height: 79%;
          overflow: hidden;
        }
        .tr:first-of-type {
          border-bottom: 0.0714rem solid #16276c;
        }
        .tr:nth-of-type(2) p span {
          background: #ed405d;
        }
        .tr:nth-of-type(3) p span {
          background: #f98d43;
        }
        .tr:nth-of-type(4) p span {
          background: #49bcf7;
        }
        p {
          span {
            display: inline-block;
            width: 1.4286rem;
            height: 1.4286rem;
            line-height: 1.4286rem;
            background: #172c5c;
            border-radius: 50%;
          }
        }
      }
    }
    .home-c-c {
      width: 55%;
      height: 60vh;
      background-image: url("~@/assets/img/bg_10.png");
      background-size: 100% 100%;
      position: relative;
      .title {
        margin-top: 1.0714rem;
        margin-bottom: 0;
        font-size: 1.4286rem;
        color: #01f5f8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "MicrosoftYaHei";
      }
      .ptevbtn {
        position: absolute;
        top: 5%;
        left: 2%;
      }
    }
  }
  .home-footer {
    display: flex;
    justify-content: space-around;
    margin-bottom: 0.7143rem;
    .home-f-l,
    .home-f-r {
      width: 55vw;
      height: 28vh;
      background-image: url("~@/assets/img/bg_7.png");
      background-size: 100% 100%;
    }
    .home-f-r {
      width: 42vw;
      background-image: url("~@/assets/img/bg_8.png");
    }
  }
  .box {
    position: relative;
    .inbox1 {
      position: absolute;
      z-index: 0;
      width: 0;
      height: 0;
      border-top: 1.4286rem solid #064e9f;
      border-left: 2.1429rem solid #064e9f;
      border-bottom: 1.4286rem solid transparent;
      border-right: 2.1429rem solid transparent;
      &::after {
        position: absolute;
        z-index: 0;
        content: "";
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
    .inbox2 {
      position: absolute;
      z-index: 0;
      right: 0;
      width: 0;
      height: 0;
      border-top: 1.4286rem solid #064e9f;
      border-left: 2.1429rem solid transparent;
      border-bottom: 1.4286rem solid transparent;
      border-right: 2.1429rem solid #064e9f;
      &::after {
        position: absolute;
        z-index: 0;
        content: "";
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
  <div class="dataAnalysis">
    <all-header></all-header>
    <div class="home-center">
      <div class="home-c-l">
        <div
          class="home-l-top"
          v-loading="loading1"
          element-loading-background="rgba(0, 0, 0, 0.4)"
        >
          <echart-base
            height="100%"
            width="100%"
            :chart-option="chartOption.option3"
          ></echart-base>
        </div>
        <div
          class="home-l-bottom"
          v-loading="loading"
          element-loading-background="rgba(0, 0, 0, 0.4)"
        >
          <h1 class="title">报警处理情况</h1>
          <div class="situation-list">
            <div>
              <p>{{ alarmProcessing.yearbaojingshu }}</p>
              <p>当年报警数</p>
            </div>
            <div>
              <p>{{ alarmProcessing.yearweichulishu }}</p>
              <p>当年未处理数</p>
            </div>
            <div>
              <p>{{ alarmProcessing.yearchulilv }}</p>
              <p>当年处理率</p>
            </div>
            <div>
              <p>{{ alarmProcessing.yuebaojingshu }}</p>
              <p>当月报警数</p>
            </div>
            <div>
              <p>{{ alarmProcessing.yueweichulishu }}</p>
              <p>当月未处理数</p>
            </div>
            <div>
              <p>{{ alarmProcessing.yuechulilv }}</p>
              <p>当月处理率</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="home-c-c"
        v-loading="loading"
        element-loading-background="rgba(0, 0, 0, 0.4)"
      >
        <echart-base
          @click="echartclick"
          height="100%"
          width="100%"
          :chart-option="chartOption.option4"
        ></echart-base>
        <el-button
          class="ptevbtn"
          v-show="ptevbtnShow"
          size="mini"
          @click="getZFBJMonthList"
          >返回</el-button
        >
      </div>
      <div class="home-c-r">
        <div
          class="home-l-top"
          v-loading="loading2"
          element-loading-background="rgba(0, 0, 0, 0.4)"
        >
          <div class="title">
            <span>地区报警排名</span>
            <span class="more" @click="linkto('/ZFDQ')">更多>></span>
          </div>
          <div class="tablebox">
            <div class="tr">
              <span class="tdl">排名</span>
              <span class="tdc">名称</span>
              <span class="tdr">报警数(次)</span>
            </div>
            <vueSeamlessScroll
              :data="adressList"
              :class-option="classOption"
              class="wrap"
            >
              <div class="tr" v-for="(item, index) in adressList" :key="index">
                <p class="tdl">
                  <span>{{ index + 1 }}</span>
                </p>
                <span class="tdc">{{ item.areaname }}</span>
                <!-- <el-tooltip popper-class="tablePopper" effect="light" :open-delay="500" :content="item.areaname" placement="top">
                <span class="tdc">{{item.areaname}}</span>
              </el-tooltip> -->
                <span class="tdr">{{ item.baojingshu }}</span>
              </div>
            </vueSeamlessScroll>
          </div>
        </div>
        <div
          class="home-l-bottom"
          v-loading="loading3"
          element-loading-background="rgba(0, 0, 0, 0.4)"
        >
          <div class="title">
            <span>企业报警排名</span>
            <span class="more" @click="linkto('/enterprise')">更多>></span>
          </div>
          <div class="tablebox">
            <div class="tr">
              <span class="tdl">排名</span>
              <span class="tdc">名称</span>
              <span class="tdr">报警数(次)</span>
            </div>
            <vueSeamlessScroll
              :data="enterpriseList"
              :class-option="classOption"
              class="wrap"
            >
              <div
                class="tr"
                v-for="(item, index) in enterpriseList"
                :key="index"
              >
                <p class="tdl">
                  <span>{{ index + 1 }}</span>
                </p>
                <el-tooltip
                  popper-class="tablePopper"
                  effect="light"
                  :open-delay="500"
                  :content="item.deptName"
                  placement="top"
                >
                  <span class="tdc">{{ item.deptName }}</span>
                </el-tooltip>
                <span class="tdr">{{ item.baojingshu }}</span>
              </div>
            </vueSeamlessScroll>
          </div>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <div
        class="home-f-l"
        v-loading="loading4"
        element-loading-background="rgba(0, 0, 0, 0.4)"
      >
        <echart-base
          height="100%"
          width="100%"
          :chart-option="chartOption.option1"
        ></echart-base>
      </div>
      <div
        class="home-f-r"
        v-loading="loading4"
        element-loading-background="rgba(0, 0, 0, 0.4)"
      >
        <echart-base
          height="100%"
          width="100%"
          :chart-option="chartOption.option2"
        ></echart-base>
      </div>
    </div>
  </div>
</template>

<script>
import echartBase from "@/components/EChart/index";
import allHeader from "@/components/Header/index";
import dataAnalysisApi from "@/api/modules/dataAnalysis";
import vueSeamlessScroll from "vue-seamless-scroll";
import {
  baroption,
  pieoption,
  barcolor,
  geooption1,
} from "@/config/echartoption1";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      timer: null,
      loading: false,
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      newtime: "",
      chartOption: { option1: {}, option2: {}, option3: {}, option4: {} },
      months: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      alarmProcessing: {
        yuebaojingshu: 0,
        yueweichulishu: 0,
        yuechulilv: "0.00%",
        yearbaojingshu: 0,
        yearweichulishu: 0,
        yearchulilv: "0.00%",
      }, //报警处理情况
      ptevbtnShow: false,
      adressList: [], //地区报警排名
      enterpriseList: [], //企业报警排名
    };
  },
  components: {
    "echart-base": echartBase,
    "all-header": allHeader,
    vueSeamlessScroll,
  },
  created() {
    this.loading = true;
    this.loading1 = true;
    this.loading2 = true;
    this.loading3 = true;
    this.loading4 = true;
    this.init();
  },
  mounted() {
    const timer1 = setInterval(() => {
      this.init();
    }, 180000);
    // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer1);
    });
    // this.play();
  },
  computed: {
    ...mapGetters({
      userinfo: "userinfo",
    }),
    classOption() {
      return {
        step: 0.3, //数值越大速度滚动越快
        limitMoveNum: 4, //开始无缝滚动的数据量  //this.fourDatata.length
        hoverStop: true, //是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, //开启数据实时监控刷新dom
        singleHeight: 0, //单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, //单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, //单步运动停止的时间(默认值1000ms)
      };
    },
  },
  // created() {
  //   this.play();
  // },
  methods: {
    // 初始化
    init() {
      // 获取报警处理情况(月)
      this.getZFBJMonthList();
      //报警处理情况(年)
      this.getZFBJYearList();
      //当年报警、处警趋势(年)
      this.getZFBJQSList();
      //政府-企业报警占比
      this.getZFBJQiYeList();
      //地区报警排名
      this.getZFDQBJPMList();
      //企业报警排名
      this.getZFQYBJPMList();
    },
    // 获取报警处理情况(月)
    async getZFBJMonthList(loading = this.loading) {
      this.loading = loading;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFBJMonthList({
          deptId: this.userinfo.deptId,
          // deptId:5448
        })
      );
      this.loading = false;
      if (data) {
        this.alarmProcessing = {
          ...this.alarmProcessing,
          yuebaojingshu: data.baojingshu,
          yueweichulishu: data.weichulishu,
          yuechulilv: data.chulilv,
        };
        let mapData = [
          {
            name: data.areaname,
            value: data.baojingshu,
            yueweichulishu: data.weichulishu,
            yuechulilv: data.chulilv,
            zhengfuid: data.zhengfuid,
          },
        ];
        this.chartOption.option4 = geooption1(this.userinfo.diqu, mapData);
        this.ptevbtnShow = false;
      } else {
        this.$message.error(err);
      }
    },
    //报警处理情况(年)
    async getZFBJYearList() {
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFBJYearList({
          deptId: this.userinfo.deptId,
          // deptId:5448
        })
      );
      if (data) {
        this.alarmProcessing = {
          ...this.alarmProcessing,
          yearbaojingshu: data.baojingshu,
          yearweichulishu: data.weichulishu,
          yearchulilv: data.chulilv,
        };
      } else {
        this.$message.error(err);
      }
    },
    //政府-企业报警占比
    async getZFBJQiYeList() {
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFBJQiYeList({
          deptId: this.userinfo.deptId,
          // deptId:5448
        })
      );
      this.loading1 = false;
      if (data) {
        let enterprise = [];
        data = data.map((el) => {
          enterprise.push(el.deptName);
          return {
            name: el.deptName,
            value: el.baojingshu,
          };
        });
        this.chartOption.option3 = {
          ...pieoption,
          title: { ...pieoption.title, show: true, text: "企业警报占比" },
          legend: { show: false },
          series: {
            ...pieoption.series,
            name: "企业报警占比",
            label: { show: false },
            itemStyle: {},
            radius: [50, 80],
            data: data,
          },
        };
      } else {
        this.$message.error(err);
      }
    },
    //当年报警、处警趋势(年)
    async getZFBJQSList() {
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFBJQSList({
          deptId: this.userinfo.deptId,
          // deptId:5448
        })
      );
      this.loading4 = false;
      if (data) {
        // 处理数据
        let dataArr = [];
        this.months.some((el) => {
          let tempObj = data.some((el1) => {
            if (el == el1.yue) {
              dataArr.push(el1);
              return el1;
            } else {
              return false;
            }
          });
          // 如果前面月份没有数据赋值0
          if (!tempObj) {
            dataArr.push({
              yue: el,
              gpsbaojingshu: 0,
              shebeibaojingshu: 0,
              gpschulishu: 0,
              shebeichulishu: 0,
            });
          }
          if (el == data[data.length - 1].yue) {
            return true;
          }
        });
        let bgData = new Array(dataArr.length).fill(100);
        // 当年报警趋势
        this.chartOption.option1 = {
          ...baroption,
          title: { ...baroption.title, text: "当年报警趋势" },
          legend: {
            ...baroption.legend,
            show: true,
            top: "20%",
            data: ["北斗报警数", "主动安全报警"],
          },
          dataset: { source: dataArr },
          grid: { ...baroption.grid, top: "33%", left: "6%", right: "3%" },
          xAxis: [
            { ...baroption.xAxis },
            {
              ...baroption.xAxis,
              axisLine: { show: false },
              axisLabel: { show: false },
            },
          ],
          series: [
            { ...baroption.series[2], xAxisIndex: 1, data: bgData },
            { ...baroption.series[2], xAxisIndex: 1, data: bgData },
            {
              ...baroption.series[0],
              name: "北斗报警数",
              itemStyle: { barBorderRadius: [5, 5, 0, 0], color: barcolor[2] },
              encode: { x: "yue", y: "gpsbaojingshu" },
            },
            {
              ...baroption.series[0],
              name: "主动安全报警",
              itemStyle: { barBorderRadius: [5, 5, 0, 0], color: barcolor[3] },
              encode: { x: "yue", y: "shebeibaojingshu" },
            },
          ],
        };
        // 当年处警趋势
        this.chartOption.option2 = {
          ...baroption,
          title: { ...baroption.title, text: "当年处警趋势" },
          legend: {
            ...baroption.legend,
            show: true,
            top: "20%",
            data: ["北斗处警数", "主动安全处警"],
          },
          grid: { ...baroption.grid, top: "33%", left: "7%", right: "2%" },
          yAxis: { ...baroption.yAxis[0] },
          dataset: { source: dataArr },
          series: [
            {
              ...baroption.series[1],
              name: "北斗处警数",
              yAxisIndex: 0,
              itemStyle: { color: "#18b949" },
              areaStyle: {
                color: barcolor[4],
                shadowColor: "rgba(24,185,73, 0.9)",
                shadowBlur: 20,
              },
              encode: { x: "yue", y: "gpschulishu" },
            },
            {
              ...baroption.series[1],
              name: "主动安全处警",
              yAxisIndex: 0,
              itemStyle: { color: "#00c8f5" },
              areaStyle: {
                color: barcolor[5],
                shadowColor: "rgba(0,200,245, 0.9)",
                shadowBlur: 20,
              },
              encode: { x: "yue", y: "shebeichulishu" },
            },
          ],
        };
      } else {
        this.$message.error(err);
      }
    },
    //地区报警排名
    async getZFDQBJPMList() {
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFDQBJPMList({
          deptId: this.userinfo.deptId,
          // deptId:5448
        })
      );
      this.loading2 = false;
      if (data) {
        // if (data.length > 5) {
        //   this.adressList = data.slice(0, 5);
        // } else {
        this.adressList = data;
        // }
      } else {
        this.$message.error(err);
      }
    },
    // 企业报警排名
    async getZFQYBJPMList() {
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFQYBJPMList({
          deptId: this.userinfo.deptId,
          // deptId:5448
        })
      );
      this.loading3 = false;
      if (data) {
        // if (data.length > 5) {
        //   this.enterpriseList = data.slice(0, 5);
        // } else {
        this.enterpriseList = data;
        // }
      } else {
        this.$message.error(err);
      }
    },
    linkto(url) {
      this.$router.push(url);
    },
    // 地图下钻
    async echartclick(el) {
      if (!el.value) return false;
      this.loading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFBJMonthList({
          xiaJiDeptId: el.data.zhengfuid,
        })
      );
      this.loading = false;
      if (data.length > 0) {
        let mapData = data.map((element) => {
          return {
            name: element.areaname,
            value: element.baojingshu,
            yueweichulishu: element.weichulishu,
            yuechulilv: element.chulilv,
            zhengfuid: element.zhengfuid,
          };
        });
        this.chartOption.option4 = geooption1(el.name, mapData);
        this.ptevbtnShow = true;
      }
      if (err) {
        this.$message.error(err);
      }
    },
  },
};
</script>
