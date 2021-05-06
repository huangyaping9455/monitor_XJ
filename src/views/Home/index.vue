<style lang="scss" scoped>
.home {
  height: 100vh;
  overflow: hidden;
  background-image: url("~@/assets/img/bg_15.jpg");
  background-size: 100% 100%;
}
.home-top {
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  .car-item {
    width: 23%;
    height: 10.7143rem;
    border-radius: 0.7143rem;
    box-sizing: border-box;
    padding: 2.4286rem;
    color: #ffffff;
    font-size: 1.1429rem;
    background-size: 100% 100%;
    cursor: pointer;
    span:last-of-type {
      display: block;
      font-size: 2.8571rem;
      font-weight: bold;
    }
    &:nth-of-type(1) {
      background-image: url("~@/assets/img/bg_16.jpg");
    }
    &:nth-of-type(2) {
      background-image: url("~@/assets/img/bg_17.jpg");
    }
    &:nth-of-type(3) {
      background-image: url("~@/assets/img/bg_18.jpg");
    }
    &:nth-of-type(4) {
      background-image: url("~@/assets/img/bg_19.jpg");
      cursor: pointer;
    }
  }
}
.home-bottom {
  padding-left: 1.4286rem;
  padding-right: 1.4286rem;
  margin-top: 1.4286rem;
  height: calc(100% - 18.9286rem);
  display: flex;
  justify-content: space-between;
  .map {
    position: relative;
    width: 46%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    .returnBtn {
      position: absolute;
      z-index: 10;
      right: 20px;
      top: 20px;
    }
  }
  .home-content {
    width: 51.6%;
    height: 100%;
    .content-top {
      display: flex;
      height: 70px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      cursor: pointer;
      div {
        flex: 1;
        color: #56e6ff;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
      }
      span:first-of-type {
        font-size: 20px;
        font-weight: bold;
      }
      .chaosufocu:hover {
        font-size: 20px;
        color: white;
        background-color: #0a3774;
      }
    }
    .content-center {
      display: flex;
      justify-content: space-between;
      height: 44%;
      box-sizing: border-box;
      margin-top: 10px;
    }
    .linebox {
      width: 49%;
      height: 100%;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      .title {
        font-size: 16px;
        color: #56e6ff;
        font-weight: bold;
      }
      .btns {
        margin-top: 10px;
        padding: 0 10px;
        color: #56e6ff;
        display: flex;
        justify-content: space-between;
        span {
          width: 75px;
          height: 29px;
          background-image: url("~@/assets/img/btn_1.png");
          background-size: 100% 100%;
          text-align: center;
          line-height: 29px;
          cursor: pointer;
        }
        .active {
          background-image: url("~@/assets/img/btn_2.png");
          color: #ffffff;
        }
      }
    }
    .content-bottom {
      margin-top: 10px;
      height: 42.7%;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      box-sizing: border-box;
      position: relative;
      .title {
        font-size: 18px;
        color: #56e6ff;
        font-weight: bold;
      }
      .more {
        position: absolute;
        color: #56e6ff;
        font-size: 14px;
        right: 10px;
        top: 13px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .table {
        .table-head {
          // display: flex;
          background-color: #56e6ff;
          color: #0f1f40;
          // color: #909399;
          font-weight: 500;
          margin-top: 10px;
          padding: 0.3rem 0;
          tr {
            th {
              width: (100% / 7);
              // vertical-align: middle;
              padding: 0 1.28rem;
              span {
                width: 100%;
                font-size: 14px;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
    .homeTable {
      margin-top: 10px;
      width: 100%;
      background: #0f1f40;
      border: 0.0714rem solid #0a3774;
      .businessName {
        color: #01f8ff;
      }
    }
  }
}
</style>

<template>
  <div class="home">
    <all-header></all-header>
    <div class="home-top">
      <!--  @click="AllQY" -->
      <div class="car-item" @click="AllQY">
        <span>企业总数</span>
        <span>{{ overview.qiyeshu }}</span>
      </div>
      <div class="car-item" @click="AllGT">
        <span>个体总数</span>
        <span>{{ overview.getishu }}</span>
      </div>
      <div class="car-item" @click="linkto('/vehicle')">
        <span>车辆总数</span>
        <span>{{ overview.zcvehnumb }}</span>
      </div>
      <div class="car-item" @click="linkto('/vehicle', { zaixian: '上线' })">
        <span>在线车辆数</span>
        <span>{{ overview.sxvehnum }}</span>
      </div>
    </div>
    <div class="home-bottom">
      <div
        class="map"
        v-loading="load.load"
        element-loading-background="rgba(0, 0, 0, 0.4)"
      >
        <el-button
          @click="returnMap"
          v-show="cengji > 0 && !load.load"
          class="returnBtn"
          type="info"
          size="mini"
          >返回</el-button
        >
        <echart-base
          height="100%"
          width="100%"
          @click="echartclick"
          :chart-option="chartOption.option9"
        ></echart-base>
      </div>
      <div class="home-content">
        <div class="content-top">
          <div class="chaosufocu" @click="gochaosu">
            <span>{{ statistics.chaosu }}</span>
            <span>超速次数</span>
          </div>
          <div class="chaosufocu" @click="gochaosu">
            <span>{{ statistics.pilao }}</span>
            <span>疲劳次数</span>
          </div>
          <div class="chaosufocu" @click="gochaosu">
            <span>{{ statistics.yejian }}</span>
            <span>夜间行驶</span>
          </div>
          <div class="chaosufocu" @click="gochaosu">
            <span>{{ statistics.yichang }}</span>
            <span>异常次数</span>
          </div>
          <div class="chaosufocu" @click="gochaosu">
            <span>{{ statistics.zdbaojingcishu }}</span>
            <span>主动安全次数</span>
          </div>
        </div>
        <div class="content-center">
          <div
            class="linebox"
            v-loading="load.load1"
            element-loading-background="rgba(0, 0, 0, 0.4)"
          >
            <span class="title">北斗报警统计</span>
            <div class="btns">
              <span
                @click="changeCar('carousel', 'chaosu')"
                :class="isbtn == 0 ? 'active' : ''"
                >超速报警</span
              >
              <span
                @click="changeCar('carousel', 'pilao')"
                :class="isbtn == 1 ? 'active' : ''"
                >疲劳驾驶</span
              >
              <span
                @click="changeCar('carousel', 'yejian')"
                :class="isbtn == 2 ? 'active' : ''"
                >夜间行驶</span
              >
              <span
                @click="changeCar('carousel', 'yichang')"
                :class="isbtn == 3 ? 'active' : ''"
                >异常车辆</span
              >
            </div>
            <el-carousel
              class="gpsCarousel"
              style="height: calc(100% - 50px)"
              trigger="click"
              height="100%"
              ref="carousel"
              indicator-position="none"
              arrow="always"
              @change="changeGps($event, 'isbtn')"
            >
              <el-carousel-item name="chaosu">
                <echart-base
                  height="100%"
                  width="100%"
                  :chart-option="chartOption.option1"
                ></echart-base>
              </el-carousel-item>
              <el-carousel-item name="pilao">
                <echart-base
                  height="100%"
                  width="100%"
                  :chart-option="chartOption.option2"
                ></echart-base>
              </el-carousel-item>
              <el-carousel-item name="yejian">
                <echart-base
                  height="100%"
                  width="100%"
                  :chart-option="chartOption.option3"
                ></echart-base>
              </el-carousel-item>
              <el-carousel-item name="yichang">
                <echart-base
                  height="100%"
                  width="100%"
                  :chart-option="chartOption.option4"
                ></echart-base>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div
            class="linebox"
            v-loading="load.load1"
            element-loading-background="rgba(0, 0, 0, 0.4)"
          >
            <span class="title">主动安全设备报警</span>
            <div class="btns">
              <span
                @click="changeCar('carousel1', 'dadianhua')"
                :class="isbtn1 == 0 ? 'active' : ''"
                >接打电话</span
              >
              <span
                @click="changeCar('carousel1', 'fenshen')"
                :class="isbtn1 == 1 ? 'active' : ''"
                >分神驾驶</span
              >
              <span
                @click="changeCar('carousel1', 'chouyan')"
                :class="isbtn1 == 2 ? 'active' : ''"
                >抽烟报警</span
              >
              <span
                @click="changeCar('carousel1', 'zhudongbj')"
                :class="isbtn1 == 3 ? 'active' : ''"
                >生理疲劳</span
              >
            </div>
            <el-carousel
              class="gpsCarousel"
              style="height: calc(100% - 50px)"
              trigger="click"
              height="100%"
              ref="carousel1"
              indicator-position="none"
              arrow="always"
              @change="changeGps($event, 'isbtn1')"
            >
              <el-carousel-item name="dadianhua">
                <echart-base
                  height="100%"
                  width="100%"
                  :chart-option="chartOption.option5"
                ></echart-base>
              </el-carousel-item>
              <el-carousel-item name="fenshen">
                <echart-base
                  height="100%"
                  width="100%"
                  :chart-option="chartOption.option6"
                ></echart-base>
              </el-carousel-item>
              <el-carousel-item name="chouyan">
                <echart-base
                  height="100%"
                  width="100%"
                  :chart-option="chartOption.option7"
                ></echart-base>
              </el-carousel-item>
              <el-carousel-item name="zhudongbj">
                <echart-base
                  height="100%"
                  width="100%"
                  :chart-option="chartOption.option8"
                ></echart-base>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="content-bottom">
          <span class="title">各地区详细数据表</span>
          <!-- <el-table
            v-loading="load.load2"
            element-loading-background="rgba(0, 0, 0, 0.4)"
            size="mini"
            height="calc(100% - 38px)"
            class="homeTable"
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column label="地区名称" align="center">
              <template slot-scope="{ row }">
                <span class="businessName">{{ row.areaname }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="zhengfuname"
              label="政府运管局名称"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="cheliangshu"
              label="车辆数"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="bjcheliangshu"
              label="报警车辆数"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="baojingcishu"
              label="报警总数"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="baojingclcishu"
              label="报警总处理数"
              align="center"
            ></el-table-column>
            <el-table-column
              prop="baojingcishuchulilv"
              label="报警总处理率"
              align="center"
            ></el-table-column>
          </el-table> -->
          <div class="table">
            <table class="table-head">
              <tr>
                <th>
                  <span>政府运管局名称</span>
                </th>
                <th>
                  <span>车辆数</span>
                </th>
                <th>
                  <span>报警车辆数</span>
                </th>
                <th>
                  <span>报警总数</span>
                </th>
                <th>
                  <span>报警总处理数</span>
                </th>
                <th>
                  <span>报警总处理率</span>
                </th>
                <th>
                  <span>地区名称</span>
                </th>
              </tr>
            </table>

            <vueSeamlessScroll
              :data="tableData"
              :class-option="classOption"
              style="height: 20vh; overflow: hidden"
            >
              <el-table
                v-loading="load.load2"
                element-loading-background="rgba(0, 0, 0, 0.4)"
                size="mini"
                class="homeTable"
                :data="tableData"
                style="width: 100%; margin-top: -4px"
                :show-header="false"
              >
                <el-table-column
                  prop="zhengfuname"
                  label="政府运管局名称"
                  align="center"
                  :show-overflow-tooltip="true"
                ></el-table-column>
                <el-table-column
                  prop="cheliangshu"
                  label="车辆数"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="bjcheliangshu"
                  label="报警车辆数"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="baojingcishu"
                  label="报警总数"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="baojingclcishu"
                  label="报警总处理数"
                  align="center"
                ></el-table-column>
                <el-table-column
                  prop="baojingcishuchulilv"
                  label="报警总处理率"
                  align="center"
                ></el-table-column>
                <el-table-column label="地区名称" align="center">
                  <template slot-scope="{ row }">
                    <span class="businessName">{{ row.areaname }}</span>
                  </template>
                </el-table-column>
              </el-table>
            </vueSeamlessScroll>
          </div>
          <span class="more" @click="linkto('/enterprise')">更多>></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echartBase from "@/components/EChart/index";
import allHeader from "@/components/Header/index";
import homeApi from "@/api/modules/home";
import { lineoption, lineName, geooption } from "@/config/echartoption";
import { mapGetters } from "vuex";
import { format } from "@/config/date";
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
  data() {
    return {
      load: { load: false, load1: false, load2: false },
      overview: {}, //总览
      statistics: {}, //统计
      lineData: [], //折线图数据
      isbtn: 0,
      isbtn1: 0, //按钮判断
      tableData: [],
      cengji: 0,
      begintime: format(new Date().setDate(1), "YYYY-MM-DD"),
      endtime: format(new Date().getTime() - 3600 * 1000 * 24, "YYYY-MM-DD"),
      chartOption: {
        option1: {},
        option2: {},
        option3: {},
        option4: {},
        optiona5: {},
        option6: {},
        option7: {},
        option8: {},
        option9: {},
      },
      g_clickTime: null,
      g_TimeFn: "",
      mapData: [],
      areaName: "",
      zhengfuindex: "",
    };
  },
  components: {
    "echart-base": echartBase,
    "all-header": allHeader,
    vueSeamlessScroll,
  },
  created() {
    this.init();
  },
  mounted() {
    const timer1 = setInterval(() => {
      if (this.zhengfuindex != "") {
        this.getOne(this.zhengfuindex);
        this.getTwo(this.zhengfuindex, 1, this.areaName);
        this.getThree(this.zhengfuindex, 1);
        this.getFour(this.zhengfuindex);
      } else {
        this.getOne(this.userinfo.deptId);
        this.getTwo(this.userinfo.deptId, 0);
        this.getThree(this.userinfo.deptId, 0);
        this.getFour(this.userinfo.deptId);
      }
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
        limitMoveNum: 6, //开始无缝滚动的数据量  //this.fourDatata.length
        hoverStop: true, //是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, //开启数据实时监控刷新dom
        singleHeight: 0, //单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, //单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, //单步运动停止的时间(默认值1000ms)
      };
    },
  },
  methods: {
    /**查询 */
    // 初始化
    init() {
      // 政府-企业总数、个体总数、车辆总数、在线车辆数
      this.getOne(this.userinfo.deptId);
      // 政府-超速报警次数、疲劳报警总数、夜间行驶报警次数、异常报警次数
      this.getTwo(this.userinfo.deptId, 0, "");
      //政府-注册、监控企业数据
      this.getThree(this.userinfo.deptId, 0);
      //政府-各地区详细报警数据表
      this.getFour(this.userinfo.deptId);
    },
    // 政府-企业总数、个体总数、车辆总数、在线车辆数
    async getOne(deptId) {
      let [err, data] = await homeApi.awaitWrap(
        homeApi.getOne({
          deptId: deptId,
        })
      );
      if (err) {
        this.$message.error(err);
      } else {
        this.overview = data[0];
      }
    },
    // 政府-超速报警次数、疲劳报警总数、夜间行驶报警次数、异常报警次数
    async getTwo(deptId, type = 0, areaName = "", isxiazhuan = true) {
      this.load.load = true;
      if (type == 0) this.cengji = 0;
      let [err, data] = await homeApi.awaitWrap(
        homeApi.getTwo({
          deptId: deptId,
          type: type,
          size: this.cengji,
        })
      );
      this.load.load = false;
      if (err) {
        this.$message.error(err);
      } else {
        // 判断下钻有无数据
        if (type > 0 && data.xjlist.length <= 0 && isxiazhuan) {
          this.cengji--;
          return false;
        }
        // 判断是否下钻  单击
        if (!isxiazhuan) {
          this.statistics = data;
          this.cengji--;
          this.mapData = this.mapData.map((el) => {
            return {
              ...el,
              itemStyle: {
                borderWidth: el.name == areaName ? 4 : 1,
              },
            };
          });
          this.chartOption.option9 = geooption(this.areaName, this.mapData);
          return false;
        }
        let mapData;
        this.statistics = data;
        if (type == 0) {
          mapData = [
            {
              name: data.areaname,
              value: data.baojingcishu,
              zhengfuid: data.zhengfuid,
            },
          ];
        } else {
          mapData = data.xjlist.map((el) => {
            return {
              name: el.areaname,
              value: el.baojingcishu,
              zhengfuid: el.zhengfuid,
            };
          });
        }
        this.mapData = mapData;
        this.areaName = areaName ? areaName : this.userinfo.diqu;
        this.chartOption.option9 = geooption(
          areaName ? areaName : this.userinfo.diqu,
          mapData
        );
      }
    },
    //政府-注册、监控企业数据
    async getThree(deptId, type = 0) {
      this.load.load1 = true;
      let [err, data] = await homeApi.awaitWrap(
        homeApi.getThree({
          deptId: deptId,
          type: type,
        })
      );
      this.load.load1 = false;
      if (err) {
        this.$message.error(err);
      } else {
        this.lineData = data;
        this.setEchart("option1", "chaosu");
        this.setEchart("option2", "pilao");
        this.setEchart("option3", "yejian");
        this.setEchart("option4", "yichang");
        this.setEchart("option5", "dadianhua");
        this.setEchart("option6", "fenshen");
        this.setEchart("option7", "chouyan");
        this.setEchart("option8", "zhudongbj");
      }
    },
    // 各地区详细报警数据表
    async getFour(deptId) {
      this.load.load2 = true;
      let [err, data] = await homeApi.awaitWrap(
        homeApi.getFour({
          deptId: deptId,
        })
      );
      this.load.load2 = false;
      if (err) {
        this.$message.error(err);
      } else {
        this.tableData = data;
      }
    },

    // 表格数据动态滚动
    // changetable() {
    //   this.tableData.push(this.tableData[0]);
    //   this.tableData.shift();
    // },
    // play() {
    //   // setInterval(this.changetable, 2000);
    // },
    /**操作 */
    // 地图返回
    returnMap() {
      this.zhengfuindex = "";
      // 政府-超速报警次数、疲劳报警总数、夜间行驶报警次数、异常报警次数
      this.getTwo(this.userinfo.deptId, 0, "");
      //政府-注册、监控企业数据
      this.getThree(this.userinfo.deptId, 0);
      this.getOne(this.userinfo.deptId);
      this.getFour(this.userinfo.deptId);
    },
    linkto(url, req = {}) {
      this.$router.push({
        path: url,
        query: req,
      });
    },
    // 地图下钻
    echartdblclick(el, isxiazhuan) {
      this.cengji++;
      this.zhengfuindex = el.data.zhengfuid;
      this.getTwo(el.data.zhengfuid, 1, el.name, isxiazhuan);
      this.getThree(el.data.zhengfuid, 1);
      this.getOne(el.data.zhengfuid);
      this.getFour(el.data.zhengfuid);
    },
    echartclick(el) {
      if (!el.value) return false;
      let myDate = new Date();
      if (this.g_clickTime == null) {
        //第一次进来
        this.g_clickTime = myDate.getMilliseconds();
        //起一个定时器，进行重置
        this.g_TimeFn = setTimeout(() => {
          this.echartdblclick(el, false);
          this.g_clickTime = null;
        }, 300);
      } else {
        clearTimeout(this.g_TimeFn);
        //第二次进来，
        if (Math.abs(myDate.getMilliseconds() - this.g_clickTime) < 300) {
          //是双击操作
          this.echartdblclick(el, true);
        }
        this.g_clickTime = null;
      }
    },
    changeGps(e, type) {
      this[type] = e;
    },
    changeCar(name, carName) {
      this.$refs[name].setActiveItem(carName);
    },
    // 企业总数
    AllQY() {
      this.$router.push({
        name: "QYvehicle",
        params: { jigouleixing: "qiye" },
      });
    },
    AllGT() {
      this.$router.push({
        name: "QYvehicle",
        params: { jigouleixing: "geti" },
      });
    },
    //跳转详情页 超速
    gochaosu() {
      this.$router.push({
        path: "/treatmentRate",
        query: {
          // type: 1,
          begintime: this.begintime,
          endtime: this.endtime,
          // deptName: "",
          // shifouchuli: "",
          // alarmtype: "超速报警",
          isinfo: true,
          zhengfuId: this.$store.state.userinfo.deptId,
          // cheliangpaizhao: "",
          // returnUrl: "/treatmentRate",
          // Allalarmtype: "",
        },
      });
    },
    // 跳转详情页 疲劳
    gopinao() {
      this.$router.push({
        path: "/treatmentRateinfo",
        query: {
          type: 1,
          begintime: this.begintime,
          endtime: this.endtime,
          deptName: "",
          shifouchuli: "",
          alarmtype: "疲劳驾驶报警",
          zhengfuId: this.$store.state.userinfo.deptId,
          cheliangpaizhao: "",
          returnUrl: "/treatmentRate",
          Allalarmtype: "",
        },
      });
    },
    // 跳转详情页 夜间
    goyejian() {
      this.$router.push({
        path: "/treatmentRateinfo",
        query: {
          type: 1,
          begintime: this.begintime,
          endtime: this.endtime,
          deptName: "",
          shifouchuli: "",
          alarmtype: "夜间行驶报警",
          zhengfuId: this.$store.state.userinfo.deptId,
          cheliangpaizhao: "",
          returnUrl: "/treatmentRate",
          Allalarmtype: "",
        },
      });
    },
    // 跳转详情页 异常
    goyichang() {
      this.$router.push({
        path: "/treatmentRateinfo",
        query: {
          type: 1,
          begintime: this.begintime,
          endtime: this.endtime,
          deptName: "",
          shifouchuli: "",
          alarmtype: "异常车辆报警",
          zhengfuId: this.$store.state.userinfo.deptId,
          cheliangpaizhao: "",
          returnUrl: "/treatmentRate",
          Allalarmtype: "",
        },
      });
    },
    // 跳转详情页 主动安全
    gozhudong() {
      this.$router.push({
        path: "/treatmentRateinfo",
        query: {
          type: 0,
          begintime: this.begintime,
          endtime: this.endtime,
          deptName: "",
          shifouchuli: "",
          alarmtype: "",
          zhengfuId: this.$store.state.userinfo.deptId,
          cheliangpaizhao: "",
          returnUrl: "/treatmentRate",
          Allalarmtype: "主动安全报警",
        },
      });
    },
    /**渲染图表 */
    setEchart(name, type) {
      let itemName = lineName.get(type);
      this.chartOption[name] = {
        ...lineoption,
        dataset: { source: this.lineData },
        legend: { ...lineoption.legend, data: itemName.legendDate },
        series: [
          {
            ...lineoption.series,
            name: itemName.legendDate[0],
            encode: { x: "date", y: itemName.yOne },
          },
          {
            ...lineoption.series,
            name: itemName.legendDate[1],
            encode: { x: "date", y: itemName.yTow },
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss">
.homeTable {
  &.el-table--enable-row-hover .el-table__body tr:hover > td {
    background: #ffffff38;
  }
  thead.is-group th {
    background: transparent;
  }
  &.el-table--border th {
    border-bottom: 1px solid #0a3774;
    &.gutter:last-of-type {
      border-bottom: 1px solid #0a3774;
    }
  }
  .el-table__header-wrapper tr {
    background: #56e6ff;
    th {
      color: #0f1f40;
    }
  }
  tr {
    background: transparent;
  }
  td {
    border-right: 1px solid #0a3774;
    border-bottom: 1px solid #0a3774;
    color: #ffffff;
  }
  th.is-leaf {
    border-bottom: 1px solid #0a3774;
  }
  th {
    background: transparent;
    border-right: 1px solid #0a3774;
    color: #ffffff;
  }
  &::before {
    background-color: #58626e;
  }
  &::after {
    background-color: #58626e;
  }
  .el-table__body-wrapper {
    height: calc(100% - 92px);
  }
  // .el-table__row:hover {
  //   background-color: #58626e;
  // }
}
.gpsCarousel {
  .el-carousel__arrow {
    display: none;
  }
}
</style>
