<style lang="scss" scoped>
.vehicledetails {
  .topbtn {
    border: solid 1px #0a3774;
    background-image: linear-gradient(0deg, #0080de 0%, #00c8f5 100%);
    color: #ffffff;
    font-weight: bold;
    width: 130px;
    cursor: default;
    font-size: 16px;
    &:last-of-type {
      margin-left: 30px;
    }
    &.active {
      background-color: #0add32;
      color: #ffffff;
    }
    &.noact {
      background: red;
    }
    &.nom {
      margin: 0;
      cursor: pointer;
    }
  }
  .subbtn {
    background-image: linear-gradient(0deg, #0080de 0%, #00c8f5 100%);
    color: #ffffff;
  }
  .veh-main {
    .main-top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .baidumap {
        flex: 0 0 58%;
        height: 470px;
      }
      .top-r {
        flex: 0 0 40%;
        border: solid 1px #0a3774;
        .title {
          display: flex;
          justify-content: center;
          p {
            text-align: center;
            // color: #01f8ff;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            padding: 3px 2rem;
            cursor: pointer;
          }
          p:hover{
            background-color: #0a3774;
            color: white;
            box-shadow: 2px 3px 10px black;
            border-radius:10px;
          }
        }
      }
      .means {
        .means-top {
          display: flex;
          padding: 10px;
          box-sizing: border-box;
          min-height: 220px;
        }
        .img {
          width: 200px;
          margin-right: 20px;
          img {
            width: 100%;
          }
        }
        .means-name {
          color: #ffffff;
          font-size: 20px;
          margin: 5px 0;
        }
        .means-txt {
          color: #ffffff;
          margin: 5px 0;
        }
        .means-bottom {
          border-top: solid 1px #0a3774;
          padding: 10px;
          box-sizing: border-box;
          color: #668bd6;
          display: flex;
          flex-wrap: wrap;
          p {
            flex: 0 0 50%;
            margin: 5px 0;
            overflow:hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            
          }
        }
        .video {
          display: flex;
          flex-wrap: wrap;
          // justify-content: flex-end;
          align-content: space-between;
          video,
          img {
            margin: 10px;
            width: calc(50% - 20px);
            // height: calc(100% - 20px);
            background: #ccc;
            height: 14rem;
          }
        }
        .novideo {
          display: block;
          background-color: #ccc;
          margin: 1rem;
          height: 80%;
          p {
            text-align: center;
            color: white;
            font-size: 25px;
            padding-top: 12rem;
          }
        }
      }
    }
    .main-bottom{
      // display: flex;
      .bottom-item-head{
        display: flex;
        background-color: #0f1f40;
        border: solid 1px #0a3774;
        color: #ffffff;
        // div{
        //   padding: 7px 0;
        //   box-sizing: border-box;
        //   flex: 0 0 50%;
        //   display: flex;
        //   justify-content: center;
        //   border-right: solid 1px #0a3774;
        // }
        div:first-of-type {
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          border-right: solid 1px #0a3774;
          flex: 0 0 60%;
          padding: 5px;
          span{
            padding: 7px 0px;
            margin: 0 4px;
            width: 50%;
            display: flex;
            justify-content: center;
            border-radius: 10px;
            box-shadow: 2px 3px 10px black;
            border-right: solid 1px #0a3774;
            background-color: #0a3774;
          }
          span:hover{
            background-color:#0f1f40;
            cursor: pointer;
          }
        }
        div:last-of-type {
          padding: 7px 0;
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          border-right: solid 1px #0a3774;
          flex: 0 0 40%;
        }
      }
      .bottom-item {
        display: flex;
        background-color: #0f1f40;
        border: solid 1px #0a3774;
        color: #ffffff;
        &:first-of-type {
          text-align: center;
          border-bottom: none;
          div {
            padding: 7px 0;
            box-sizing: border-box;
          }
        }
        &:last-of-type {
          height: 200px;
          div {
            padding: 10px;
            box-sizing: border-box;
            overflow-y: auto;
          }
        }
        // div{
        //   flex: 0 0 50%;
        //   border-right: solid 1px #0a3774;
        // }
        div:first-of-type {
          flex: 0 0 60%;
        }
        div:last-of-type {
          flex: 0 0 40%;
        }
      }
    }
    .item-txt {
      display: flex;
      flex-wrap: wrap;
      flex-grow: 1;
      // flex-direction: column;
      justify-content: flex-start;
      border-right: solid 1px #0a3774;
      overflow-y: scroll;
      p {
        // display: flex;
        // flex: 0 0 4%;
        margin:8px;
      //   .pingzheng {
      //     cursor: pointer;
      //     width: 30px;
      //     height: 30px;
      //     margin: -10px 0;
      //   }
      //   .fujian {
      //     height: 180px;
      //   }
      // }
      p:nth-of-type(6),
      p:nth-of-type(7) {
        // flex: 0 0 12%;
        display: flex;
        span:first-of-type {
          // flex: 0 0 70px;
        }
      }
      span:first-of-type {
        color: #395da8;
      }
    }
    }
    .item-list{
      background-color: #0f1f40;
      border-right: solid 1px #0a3774;
    }
    .item-msg{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: space-between;
      border-right: solid 1px #0a3774;
        p{
          margin: 8px;
          .pingzheng {
            cursor: pointer;
            width: 30px;
            height: 30px;
            margin: -10px 0;
          }
          // .fujian {
          //   height: 180px;
          // }
        }
        // .fujian{
        //   height: 100px;
        // }
      }
  }
}
</style>

<template>
  <el-dialog
    top="1vh"
    width="60%"
    class="vehicledetails"
    center
    :show-close="false"
    :close-on-click-modal="false"
    :visible.sync="dialogVisible"
  >
    <div slot="title">
      <el-button class="topbtn" size="mini">{{
        vehicleoption.plate
      }}</el-button>
      <el-button
        :class="
          vehicleoption.chulizhuangtai == '未处理' ||
          vehicleoption.chulizhuangtai == '未申述'
            ? 'noact'
            : 'active'
        "
        class="topbtn"
        size="mini"
        >{{ vehicleoption.chulizhuangtai }}</el-button
      >
    </div>
    <div
      class="veh-main"
      v-loading="loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <div class="main-top">
        <baidu-map
          class="baidumap"
          :center="center"
          :zoom="15"
          :scroll-wheel-zoom="true"
        >
          <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
          <!-- <bm-polyline :path="paths" strokeColor="red"></bm-polyline> -->
          <bm-driving
            Marker="false"
            :start="startline"
            :end="endline"
            :panel="false"
            :auto-viewport="true"
          ></bm-driving>
          <bm-driving
          v-if="vehicleoption.alarmType =='疲劳驾驶报警'"
            Marker="false"
            :start="kaishiline"
            :end="startline"
            :panel="false"
            :auto-viewport="true"
          ></bm-driving>
          <!-- 开始行驶时间 -->
          <bm-marker :top="true" :position="kaishiline"  v-if="vehicleoption.alarmType =='疲劳驾驶报警'">
            <bm-label
              :content="`开始行驶时间: ${time2.start}`+`<br>`+`地址：${kaishidi}`"
              :labelStyle="{ color: 'red', fontSize: '12px' }"
              :offset="{ width: 10, height: 30 }"
            />
          </bm-marker>
          <bm-marker :top="true" :position="startline">
            <bm-label
              :content="`起点 ${time.start}`+`<br>`+`地址：${qidian}`"
              :labelStyle="{ color: 'red', fontSize: '12px' }"
              :offset="{ width: 10, height: 30 }"
            />
          </bm-marker>
          <bm-marker :top="true" :position="endline" >
            <!-- :icon="{url:require('../../assets/logo.png'),size: {width: 32, height: 32}}" -->
            <bm-label
              :content="`终点 ${time.end}`+`<br>`+`地址：${zhongdian}`"
              :labelStyle="{ color: 'red', fontSize: '12px' }"
              :offset="{ width: 10, height: 30 }"
            />
          </bm-marker>
        </baidu-map>
        <div class="top-r means">
          <div class="title">
            <p @click="CarMsg" ref="ziliao" style="background-color:#0080de;border-radius:10px;">车辆资料</p>
            <p @click="getImageData" ref="shipin">实时视频</p>
          </div>
          <div class="means-top" v-if="ziliao">
            <div class="img">
              <img
                v-show="cheliang.cheliangzhaopian"
                :src="cheliang.cheliangzhaopian"
              />
              <img
                v-show="!cheliang.cheliangzhaopian"
                src="@/assets/img/che.png"
              />
            </div>
            <div>
              <p class="means-name">{{ vehicleoption.plate }}</p>
              <p class="means-txt">车牌颜色：{{ cheliang.chepaiyanse }}</p>
              <p class="means-txt">运营类型：{{ cheliang.shiyongxingzhi}}</p>
              <!-- <p class="means-txt">使用性质：{{ cheliang.shiyongxingzhi }}</p>
              <p class="means-txt">核定载客：{{ cheliang.hedingzaike }}</p>
              <p class="means-txt">车辆状态：{{ cheliang.cheliangzhuangtai }}</p> -->
            </div>
          </div>
          <div class="means-bottom" v-if="ziliao">
            <p>驾&nbsp;&nbsp;驶&nbsp;&nbsp;员：{{ cheliang.jiashiyuanxingming }}</p>
            <p>驾驶员电话：{{ cheliang.jiashiyuandianhua }}</p>
            <p>押&nbsp; 运&nbsp; 员：{{ cheliang.yayunyuanxingming }}</p>
            <p>押运员电话：{{ cheliang.yayunyuandianhua }}</p>
            <p>车&emsp;&emsp;主：{{ cheliang.chezhu }}</p>
            <p>车 主 电 话：{{ cheliang.chezhudianhua }}</p>
            <p>终端型号：{{ cheliang.zongduanxinghao }}</p> 
            <p>车 &nbsp;&nbsp;架 &nbsp;&nbsp;号：{{ cheliang.chejiahao }}</p>
            <p>厂&emsp;&emsp;牌：{{ cheliang.changpai }}</p>
            <p>运 &nbsp;&nbsp;营 &nbsp;&nbsp;商：{{ cheliang.yunyingshangmingcheng }}</p>
          </div>
          <div class="video" v-if="showVideo" v-loading="videoLoading">
            <video :src="video" controls="controls"></video>
            <img :src="item" v-for="item in src" :key="item" alt />
          </div>
          <div class="novideo" v-if="noVideo">
            <p>暂无视频</p>
          </div>
        </div>
      </div>
      <div class="main-bottom">
        <div class="bottom-item-head">
          <div>
            <span @click="QKclick" ref="fenxi" style="background-color:#0080de;">情况分析</span>
            <span @click="TXclick" ref="xiaoxi">提醒消息</span>
            <span @click="dealMsg" v-if="vehicleoption.chulizhuangtai=='已处理'||vehicleoption.shensuzhuangtai=='已申诉'" ref="dealmsg">处理信息</span>
          </div>
          <div>{{ vehicleoption.alarmType }}-标准判断</div>
        </div>
        <div class="bottom-item">
          <div v-if="QKFX" class="item-txt">
            <!-- <p>
              <span>依据：</span>
              <span>《{{ vehicleoption.company }}驾驶员违规处理办法》</span>
            </p> -->
            <p>
              <span>违规内容：</span>
              <span>{{ vehicleoption.alarmType }}</span>
            </p>
            <p>
              <span>行驶速度：</span>
              <span>{{ vehicleoption.velocity }}(km/h)</span>
            </p>
            <!-- <p v-if="false">
              <span>超速等级：</span>
              <span>{{ vehicleoption.alarmlevel }}</span>
            </p> -->
            <p v-if="vehicleoption.alarmType =='超速报警'">
              <span>超速百分比：</span>
              <span>14%</span>
            </p>
            <p v-if="vehicleoption.alarmType =='超速报警'">
              <span>限速数值：</span>
              <span>{{ vehicleoption.roadLimited }}(km/h)</span>
            </p>
            <p>
              <span>移动距离：</span>
              <span>{{ vehicleoption.distance }}km</span>
            </p>
            <p v-if="vehicleoption.alarmType =='疲劳驾驶报警'">
              <span>开始行驶时间：</span>
              <span>{{ vehicleoption.calctime }}</span>
            </p>
            <p>
              <span>违规时间：</span>
              <span v-if="vehicleoption.alarmType =='抽烟报警'||vehicleoption.alarmType =='分神驾驶报警'||vehicleoption.alarmType =='接打电话报警'||vehicleoption.alarmType =='驾驶员异常报警'"
                >{{ begintime }}--{{ endtime }}(
                  3分钟
                )</span
              >
              <span v-else-if="vehicleoption.alarmType !='抽烟报警'||vehicleoption.alarmType !='分神驾驶报警'||vehicleoption.alarmType !='接打电话报警'||vehicleoption.alarmType !='驾驶员异常报警'"
                >{{ vehicleoption.beginTime }}--{{ vehicleoption.endTime }}({{
                  vehicleoption.keeptimeShow
                }})</span
              >
            </p>
            <p>
              <span>驾驶员IC卡登签信息：</span>
              <span>{{ vehicleoption.icardsign }}</span>
            </p>
            <!-- <p>
              <span>处理凭证：</span>
              <span>
                <el-popover placement="top" trigger="click">
                  <img
                    src="../../assets/img/ping.png"
                    slot="reference"
                    class="pingzheng"
                    alt
                  />
                  <div slot="content">
                    <img class="fujian" :src="vehicleoption.fujian" alt />
                  </div>
                </el-popover>
              </span>
            </p> -->
            <p>
              <span>违规地点：</span>
              <span>{{ vehicleoption.roadName }}</span>
            </p>
            <!-- <p>
              <span>处理方式：</span>
              <span>{{ vehicleoption.chulixingshi }}</span>
            </p> -->
            <!-- <p>
              <span>处理描述：</span>
              <span>{{ vehicleoption.chulimiaoshu }}</span>
            </p> -->
          </div>
          <div v-if="TXXX" class="item-list">
            <el-table
              :data="tableData"
              class="mainTable"
              style="background-color: #0f1f40;border: 0.0714rem solid #0a3774;padding:0;position:inherit;">
              <el-table-column
                align="center"
                label="序号"
                type="index"
                width="50">
              </el-table-column>
              <el-table-column
                prop="time"
                align="center"
                :show-overflow-tooltip="showOverflowTooltip=true"
                width="180"
                label="时间">
              </el-table-column>
              <el-table-column
                prop="lastSpeed"
                align="center"
                width="100"
                label="速度(km/h)">
              </el-table-column>
              <el-table-column
                prop="messageType"
                 align="center"
                label="类型">
              </el-table-column>
              <el-table-column
                prop="message"
                align="center"
                :show-overflow-tooltip="showOverflowTooltip=true"
                label="内容">
              </el-table-column>
            </el-table>
          </div>
          <div v-if="CLXX" class="item-msg">
            <p>
              <span>处理方式：</span>
              <span>{{ vehicleoption.chulixingshi }}</span>
            </p>
            <p>
              <span>处理内容：</span>
              <span>{{ vehicleoption.chulimiaoshu }}</span>
            </p>
            <p>
              <span>处理人：</span>
              <span>{{ vehicleoption.chuliren }}</span>
            </p>
            <p>
              <span>处理时间：</span>
              <span>{{ vehicleoption.chulishijian }}</span>
            </p>
            <p>
              <span>处理凭证：</span>
              <span v-if="vehicleoption.fujian!==''">
                <el-popover placement="top-start" trigger="click">
                  <img
                    src="../../assets/img/ping.png"
                    slot="reference"
                    class="pingzheng"
                    alt
                  />
                  <div class="fujian">
                    <!-- <img :src="vehicleoption.fujian" style="max-height:180px;" alt /> -->
                      <img
                        v-for="(item, index) in arryImg"
                        :key="index"
                        class="fujian"
                        :src="arryImg[index]"
                        style="max-height:180px;"
                        alt
                      />
                  </div>
                </el-popover>
              </span>
            </p>
          </div>
          <div v-if="CLXXX" class="item-msg">
            <p>
              <span>处理方式：</span>
              <span>{{ vehicleoption.chulixingshi }}</span>
            </p>
            <p>
              <span>处理内容：</span>
              <span>{{ vehicleoption.chulimiaoshu }}</span>
            </p>
            <p>
              <span>处理人：</span>
              <span>{{ vehicleoption.chuliren }}</span>
            </p>
            <p>
              <span>处理时间：</span>
              <span>{{ vehicleoption.chulishijian }}</span>
            </p>
            <p>
              <span>处理凭证：</span>
              <span v-if="vehicleoption.fujian!==''">
                <el-popover placement="top-start" trigger="click">
                  <img
                    src="../../assets/img/ping.png"
                    slot="reference"
                    class="pingzheng"
                    alt
                  />
                  <div class="fujian">
                    <!-- <img :src="vehicleoption.fujian" style="max-height:180px;" alt /> -->
                    <img
                        v-for="(item, index) in arryImg"
                        :key="index"
                        class="fujian"
                        :src="arryImg[index]"
                        style="max-height:180px;"
                        alt
                      />
                  </div>
                </el-popover>
              </span>
            </p>
            <p>
              <span>申诉审核人：</span>
              <span>{{ vehicleoption.chulishijian }}</span>
            </p>
            <p>
              <span>申诉审核时间：</span>
              <span>{{ vehicleoption.chulishijian }}</span>
            </p>
            <p>
              <span>申诉审核意见：</span>
              <span>{{ vehicleoption.shensumiaoshu }}</span>
            </p>
          </div>
          <div style="white-space: pre-wrap">{{ destandard }}</div>
        </div>
      </div>
    </div>
    <div slot="footer">
      <el-button class="topbtn nom" size="mini" @click="dialogVisible = false"
        >取 消</el-button
      >
    </div>
  </el-dialog>
</template>

<script>
import { gpsdestandard, dmsdestandard } from "@/config/const";
import { format } from "@/config/date";
import dataAnalysisApi from "@/api/modules/dataAnalysis";
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    vehicleoption: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      loading: false,
      cheliang: {},
      jiashiyuan: {},
      center: { lng: 116.404, lat: 39.915 },
      startline: { lng: 116.404, lat: 39.915 },
      endline: { lng: 116.404, lat: 39.915 },
      kaishiline:{lng: "", lat: ""},
      time: { start: "", end: "" },
      time2:{ start: "", end: "" },
      kaishidi:"",
      qidian:"",
      zhongdian:"",
      // labelStyles:{ color: 'red', fontSize: '12px' },
      begintime: format(
        new Date().getTime() - 60 * 1000,
        "YYYY-MM-DD HH:mm:ss"
      ),
      endtime: format(
        new Date().getTime() + 2 * 60 * 1000,
        "YYYY-MM-DD HH:mm:ss"
      ),
      // paths: [],
      imgList: "",
      ziliao: true,
      showVideo: false,
      video: "",
      noVideo: false,
      src: [],
      videoLoading: false,
      tableData:[],
      QKFX:true,
      TXXX:false,
      CLXX:false,
      CLXXX:false,
      arryImg:"",
    };
  },
  computed: {
    dialogVisible: {
      get: function () {
        return this.visible;
      },
      set: function (newValue) {
        this.$emit("close");
      },
    },
    destandard() {
      let html = "";
      if (this.vehicleoption) {
        this.vehicleoption.type == 1
          ? (html = gpsdestandard[this.vehicleoption.alarmType])
          : (html = dmsdestandard[this.vehicleoption.alarmType]);
      }
      return html;
    },
  },
  watch: {
    visible(newvisible) {
      if (newvisible) {
        this.loading = true;
        this.getData();
      }
    },
  },
  methods: {
    getData() {
      this.selectByCPYS();
      this.getAlarmGuIdList();
      //
      // console.log(this.vehicleoption);
    },
    //获取数据明细
    async selectByCPYS() {
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.selectByCPYS({
          cheliangpaizhao: this.vehicleoption.plate,
          chepaiyanse: this.vehicleoption.color,
        })
      );
      if (data) {
        if(data.cheliang.jiashiyuandianhua ==-1||data.cheliang.yayunyuandianhua ==-1||data.cheliang.chezhudianhua ==-1||data.cheliang.changpai =="null"||data.cheliang.chejiahao =="null"){
          data.cheliang.jiashiyuandianhua =""
          data.cheliang.yayunyuandianhua =""
          data.cheliang.chezhudianhua =""
          data.cheliang.changpai =""
          data.cheliang.chejiahao =""
        }
        this.cheliang = data.cheliang;
        this.jiashiyuan = data.jiashiyuan;
        this.getPointDataNew();
      } else {
        this.$message.error(err);
        this.loading = false;
      }
    },
    //获取点位数据
    async getPointDataNew() {
     if(this.vehicleoption.alarmType =="疲劳驾驶报警"){
        // 开始行驶时间
      let [err2, data2] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getPointDataNew({
          beginTime: this.vehicleoption.calctime,
          endTime: this.vehicleoption.beginTime,
          mark: this.vehicleoption.type - 1,
          vehid: this.cheliang.id,
        })
      );
      // this.loading = false;
      if (data2) {
        if (data2.length > 0) {
          this.kaishiline = {
            lng: data2[0].longitude,
            lat: data2[0].latitude,
          };
          // this.endline = {
          //   lng: data2[data2.length - 1].longitude,
          //   lat: data2[data2.length - 1].latitude,
          // };
          this.time2 = {
            start: data2[0].GpsTime,
            end: data2[data2.length - 1].GpsTime,
          };
          // js解析经纬度为地理位置
          let pointkaishidi = new BMap.Point(this.kaishiline.lng,this.kaishiline.lat);
          let gc= new BMap.Geocoder();
          let kaishidi;
          let _this =this
          gc.getLocation(pointkaishidi,function(rs){
            kaishidi =rs.address;
          _this.kaishidi =kaishidi;
          })
        }
      } else {
        this.$message.error(err2);
      }
     }
     if(this.vehicleoption.alarmType =="抽烟报警"||this.vehicleoption.alarmType =="分神驾驶报警"||this.vehicleoption.alarmType =="接打电话报警"||this.vehicleoption.alarmType =="驾驶员异常报警"){
        this.vehicleoption.endTime = this.endtime;
        this.vehicleoption.beginTime=this.begintime;
     }
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getPointDataNew({
          beginTime: this.vehicleoption.beginTime,
          endTime: this.vehicleoption.endTime,
          mark: this.vehicleoption.type - 1,
          vehid: this.cheliang.id,
        })
      );
      this.loading = false;
      if (data) {
        if (data.length > 0) {
          this.center = {
            lng: data[0].longitude,
            lat: data[0].latitude,
          };
          this.startline = {
            lng: data[0].longitude,
            lat: data[0].latitude,
          };
          this.endline = {
            lng: data[data.length - 1].longitude,
            lat: data[data.length - 1].latitude,
          };
          this.time = {
            start: data[0].GpsTime,
            end: data[data.length - 1].GpsTime,
          };
          // js解析经纬度为地理位置
          let pointqidian = new BMap.Point(this.startline.lng,this.startline.lat);
          let pointzhongdian = new BMap.Point(this.endline.lng,this.endline.lat);
          let gc= new BMap.Geocoder();
          let qidian;
          let zhongdian;
          let _this =this
          gc.getLocation(pointqidian,function(rs){
            qidian =rs.address;
          _this.qidian =qidian;
          })
          gc.getLocation(pointzhongdian,function(rs){
            zhongdian =rs.address;
          _this.zhongdian =zhongdian;
          })
        }
      } else {
        this.$message.error(err);
      }
    },
    //获取 报警详情
    async getAlarmGuIdList() {
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getAlarmGuIdList({
          alarmGuId:this.vehicleoption.alarmGuid
        })
      );
      if(data){
        let tabledatas =data.map(el=>{
          el.time=el.time.replace(/\.0$/g,'')
          return el
        })
        this.tableData =tabledatas;
      }
    },
    // 情况分析 点击
    QKclick(){
      if(this.$refs.fenxi){
        this.$refs.fenxi.style.backgroundColor ="#0080de";
      }
      if(this.$refs.xiaoxi){
        this.$refs.xiaoxi.style.backgroundColor="";
      }
      if(this.$refs.dealmsg){
        this.$refs.dealmsg.style.backgroundColor ="";
      }
     this.QKFX =true;
     this.TXXX =false;
     this.CLXX =false;
     this.CLXXX =false;
    },
    // 提醒消息 点击
    TXclick(){
      if(this.$refs.fenxi){
        this.$refs.fenxi.style.backgroundColor ="";
      }
      if(this.$refs.xiaoxi){
        this.$refs.xiaoxi.style.backgroundColor="#0080de";
      }
      if(this.$refs.dealmsg){
        this.$refs.dealmsg.style.backgroundColor ="";
      }
      this.QKFX =false;
      this.TXXX =true;
      this.CLXX =false;
      this.CLXXX=false;
    },
    // 处理信息
    dealMsg(){
      let arry = this.vehicleoption.fujian.replace(/\,$/g,"").split(",");
      this.arryImg =arry;
      if(this.$refs.fenxi||this.$refs.xiaoxi||this.$refs.dealmsg){
        this.$refs.fenxi.style.backgroundColor ="";
        this.$refs.xiaoxi.style.backgroundColor="";
        this.$refs.dealmsg.style.backgroundColor ="#0080de";
      }
      this.QKFX =false;
      this.TXXX =false;
      if(this.vehicleoption.chulizhuangtai =="已处理"){
        this.CLXX =true;
        this.CLXXX =false
      }else{
        this.CLXX =false;
        this.CLXXX =true;
      }
      // this.selectBJDetail();
    },
    // 获取报警详情
    // async selectBJDetail(){
    //   let [err, data] = await dataAnalysisApi.awaitWrap(
    //     dataAnalysisApi.selectBJDetail({
    //       baojingid:this.vehicleoption.alarmReportID,
    //     })
    //   );
    //   if(data){
    //     console.log(this);
    //     console.log(data);
    //   }
    // },
    // 车辆资料
    CarMsg() {
      if(this.$refs.ziliao||this.$refs.shipin){
         this.$refs.ziliao.style.backgroundColor ='#0080de';
         this.$refs.ziliao.style.color='#fff'
         this.$refs.shipin.style.backgroundColor ='';
      }
      this.ziliao = true;
      this.showVideo = false;
      this.noVideo = false;
    },
    //获取图片视频数据
    async getImageData() {
      this.ziliao = false;
      this.videoLoading = true;
      this.$refs.shipin.style.backgroundColor ='#0080de';
      this.$refs.shipin.style.color='#fff';
      this.$refs.shipin.style.borderRadius=10+"px";
      this.$refs.ziliao.style.backgroundColor='';
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getImageData({
          alarmNumber: this.vehicleoption.alarmReportID,
          alarmType: this.vehicleoption.alarmType,
        })
      );
      // console.log(data);
      if (data) {
        this.videoLoading = false;
        if (data.Video == "") {
          this.noVideo = true;
          this.showVideo = false;
        } else {
          this.showVideo = true;
          this.noVideo = false;
          this.video = data.Video;
          this.src = data.Picture;
        }
      } else {
        this.$message.error(err);
      }
    },
    // 附件 点击
    // getAlarmDetail() {
    //   this.imgList = this.vehicleoption.fujian;
    // },
  },
};
</script>

<style lang="scss">
.vehicledetails {
  .el-dialog {
    background-image: url("~@/assets/img/bg_14.png");
    background-size: 100% 100%;
    background-color: transparent;
  }
}
.baidumap {
  .BMap_Marker:nth-of-type(n + 4) {
    display: none;
  }
  path:nth-of-type(1){
  stroke:red;
  stroke-opacity:0.7;
  }
  path:nth-of-type(2){
  stroke-opacity:0.7;
  }
}
.mainTable th.is-leaf {
    border-bottom: 1px solid #0a3774;
}
.mainTable th{
    border-right: 1px solid #0a3774;
    padding: 6px 0;
}
</style>
