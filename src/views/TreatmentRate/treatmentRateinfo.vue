<style lang="scss" scoped>
.enterprise {
  height: 100vh;
  background: #0b122e;
  .main {
    height: calc(100vh - 7rem);
    display: flex;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
    .main-r {
      margin-left: 1.0714rem;
      width: calc(100% - 2rem);
    }
    .btns {
      margin-top: 0.3571rem;
      margin-bottom: 1.0714rem;
      .btn {
        width: 9.2857rem;
        height: 2.8571rem;
        font-size: 1.1429rem;
        border: none;
        color: #ffffff;
        background: url("~@/assets/img/btn.png");
        background-size: 100% 100%;
        .icon {
          width: 1.1429rem;
          height: 1.1429rem;
          margin-right: 0.3571rem;
        }
        &:before {
          background-color: rgba(255, 255, 255, 0);
        }
      }
    }
    .line {
      color: #ffffff;
      text-align: center;
    }
    .sbtn {
      height: 30.0006px;
      width: 59.9998px;
      background-image: linear-gradient(0deg, #0080de 0%, #00c8f5 100%);
    }
    .mainTable {
      width: 100%;
      background: #0f1f40;
      border: 0.0714rem solid #0a3774;
      .spanlabel {
        margin: 4px 0;
        span {
          display: inline-block;
          color: #ffffff;
          font-size: 12px;
          padding: 0px 4px;
          border-radius: 4px;
          transform: rotate(-15deg);
        }
      }
      .redspan span {
        background: red;
      }
      .greenspan span {
        background: rgb(10, 221, 50);
      }
      .bluespan span {
        background: rgb(67, 147, 255);
      }
      .cur {
        cursor: pointer;
      }
    }
  }
  .page {
    display: flex;
    color: #d3d4d6;
    padding: 0 0.7143rem;
    font-size: 0.8571rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.9rem;
    .page-l {
      display: flex;
      align-items: center;
      span {
        margin-right: 0.7143rem;
      }
      strong {
        font-size: 1.2857rem;
        color: #01f8ff;
        margin: 0 0.3571rem;
      }
    }
    .page-r {
      display: flex;
      align-items: center;
      span {
        cursor: pointer;
        padding: 0 0.1429rem;
        font-size: 1.2857rem;
        margin: 0 0.1429rem;
      }
      .pagesize {
        width: 14.2857rem;
        margin-left: 1.4286rem;
      }
      .showselect {
        width: 6.4286rem;
      }
      .num {
        font-size: 0.9286rem;
        width: 1.2857rem;
        height: 1.2857rem;
        padding: 0;
        border-radius: 50%;
        text-align: center;
        &.active {
          background-image: linear-gradient(0deg, #0080de 0%, #00c8f5 100%);
        }
      }
    }
  }
}
.nowarp {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tablePopper {
  max-width: 400px;
}
</style>

<template>
  <div class="enterprise">
    <all-header></all-header>
    <div class="main">
      <div class="main-r">
        <!-- 操作按钮 -->
        <div class="btns">
          <el-button
            @click="changeSearch"
            size="mini"
            class="btn"
            icon="el-icon-search"
            >查询</el-button
          >
          <el-button
            size="mini"
            :loading="downloading"
            @click="downtable"
            class="btn"
          >
            <svg-icon
              class="icon"
              v-show="!downloading"
              icon-class="down"
            />下载
          </el-button>
          <el-button
            @click="refresh"
            size="mini"
            class="btn"
            icon="el-icon-refresh"
            >刷新</el-button
          >
          <el-button
            @click="returnGo"
            size="mini"
            class="btn"
            icon="el-icon-refresh-left"
            >返回</el-button
          >
        </div>
        <!-- 查询 -->
        <el-form
          v-show="searchshow"
          :inline="true"
          size="mini"
          :model="form"
          class="search"
        >
          <el-form-item label="时间 :">
            <el-col :span="11" class="timetype">
              <el-form-item>
                <el-date-picker
                  style="width: 10rem"
                  type="date"
                  placeholder="选择日期"
                  v-model="form.begintime"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11" class="timetype">
              <el-form-item>
                <el-date-picker
                  style="width: 11rem"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  v-model="form.endtime"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="车辆牌照 :" style="margin-left: 2rem">
            <el-input
              v-model="form.cheliangpaizhao"
              style="width: 10rem"
              placeholder="请输入车辆牌照"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="报警类型 :" style="margin-left: 1rem">
            <el-select
              v-model="form.Allalarmtype"
              placeholder="请选择"
              style="width: 10rem"
              @change="Alltype"
            >
              <el-option label="全部" value></el-option>
              <el-option label="北斗报警" value="北斗报警"></el-option>
              <el-option label="主动安全报警" value="主动安全报警"></el-option>
            </el-select>
            <!-- </el-form-item> -->
            <!-- <el-form-item label="主动安全报警类型 :" style="margin-left:1rem;"> -->
            <el-select
              v-model="form.alarmtype"
              placeholder="请选择"
              style="width: 10rem"
              clearable
            >
              <!-- <el-option label="全部" value></el-option> -->
              <el-option
                label="超速报警"
                value="超速报警"
                v-if="GPS"
              ></el-option>
              <el-option
                v-if="GPS"
                label="疲劳驾驶报警"
                value="疲劳驾驶报警"
              ></el-option>
              <el-option
                label="夜间行驶报警"
                value="夜间行驶报警"
                v-if="GPS"
              ></el-option>
              <el-option
                label="异常车辆报警"
                value="异常车辆报警"
                v-if="GPS"
              ></el-option>
              <el-option
                label="接打电话报警"
                value="接打电话报警"
                v-if="zhudong"
              ></el-option>
              <el-option
                label="抽烟报警"
                value="抽烟报警"
                v-if="zhudong"
              ></el-option>
              <el-option
                label="分神驾驶报警"
                value="分神驾驶报警"
                v-if="zhudong"
              ></el-option>
              <el-option
                v-if="zhudong"
                label="生理疲劳报警"
                value="生理疲劳报警"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="处理状态 :" style="margin-left: 1rem">
            <el-select
              v-model="form.shifouchuli"
              placeholder="请选择"
              style="width: 10rem"
            >
              <el-option label="全部" value></el-option>
              <el-option label="未处理" value="未处理"></el-option>
              <el-option label="已处理" value="已处理"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="申述状态 :" style="margin-left: 1rem">
            <el-select
              v-model="form.shifoushenshu"
              placeholder="请选择"
              style="width: 10rem"
            >
              <el-option label="全部" value></el-option>
              <el-option label="未申诉" value="未申诉"></el-option>
              <el-option label="已申诉" value="已申诉"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="sbtn" @click="getData(1)"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
        <!-- mainTable -->
        <el-table
          v-loading="loading"
          element-loading-background="rgba(0, 0, 0, 0.4)"
          size="mini"
          class="mainTable"
          :height="enterpriseListH"
          border
          :data="enterpriseList"
        >
          <el-table-column label="操作" width="50" align="center">
            <template slot-scope="{ row }">
              <svg-icon
                @click="getinfoData(row)"
                slot="prefix"
                class="icon cur"
                icon-class="guiji"
              />
            </template>
          </el-table-column>
          <el-table-column label="是否处理" width="70" align="center">
            <template slot-scope="{ row }">
              <p
                class="spanlabel"
                :class="
                  row.chulizhuangtai == '未处理' ? 'redspan' : 'greenspan'
                "
              >
                <span>{{ row.chulizhuangtai }}</span>
              </p>
            </template>
          </el-table-column>
          <el-table-column label="是否申诉" width="70" align="center">
            <template slot-scope="{ row }">
              <p
                class="spanlabel"
                :class="
                  row.shensuzhuangtai == '未申诉' ? 'redspan' : 'bluespan'
                "
              >
                <span>{{ row.shensuzhuangtai }}</span>
              </p>
            </template>
          </el-table-column>
          <el-table-column
            prop="company"
            label="所属企业"
            width="250"
            :show-overflow-tooltip="true"
            align="center"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            prop="plate"
            label="车牌"
            width="90"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="color"
            label="车牌颜色"
            width="70"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="operatType"
            label="车辆类型"
            width="70"
            :show-overflow-tooltip="true"
            align="center"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            prop="alarmType"
            label="报警类型"
            width="100"
            :show-overflow-tooltip="true"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="calctime"
            label="开始行驶时间"
            width="160"
            align="center"
            :show-overflow-tooltip="true"
            v-if="form.alarmtype == '疲劳驾驶报警'"
          ></el-table-column>
          <el-table-column
            prop="beginTime"
            label="开始时间"
            width="150"
            :show-overflow-tooltip="true"
            align="center"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            v-if="form.type == 1"
            prop="endTime"
            label="结束时间"
            width="150"
            align="center"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            prop="velocity"
            label="报警速度(km/h)"
            width="120"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="longitude"
            label="经度"
            width="90"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="latitude"
            label="纬度"
            width="90"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="roadName"
            label="报警位置"
            width="150"
            align="center"
            :show-overflow-tooltip="true"
          >
            <template slot-scope="{ row }">
              <span class="nowarp">{{ row.roadName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="chuliren"
            label="处理人/申诉人"
            width="100"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="chulishijian"
            label="处理时间/申述时间"
            width="126"
            align="center"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column
            prop="chulixingshi"
            label="处理形式"
            width="70"
            align="center"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column prop="chulimiaoshu" label="处理描述" :show-overflow-tooltip="true" align="center">
            <template slot-scope="{ row }">
              <el-tooltip
                popper-class="tablePopper"
                effect="light"
                :open-delay="500"
                :content="row.chulimiaoshu"
                placement="top"
              >
                <span class="nowarp">{{ row.chulimiaoshu }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
          <el-table-column
            prop="shensuxingshi"
            label="申诉形式"
            width="70"
            align="center"
            :show-overflow-tooltip="true"
          ></el-table-column>
          <el-table-column prop="shensumiaoshu" label="申诉描述" :show-overflow-tooltip="true" align="center">
            <template slot-scope="{ row }">
              <el-tooltip
                popper-class="tablePopper"
                effect="light"
                :open-delay="500"
                :content="row.shensumiaoshu"
                placement="top"
              >
                <span class="nowarp">{{ row.shensumiaoshu }}</span>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
        <!-- page -->
        <div class="page">
          <div class="page-l">
            <span>
              总共
              <strong>{{ total }}</strong> 条消息
            </span>
            <span>
              当前第
              <strong>{{ current }}</strong> 页
            </span>
            <span>
              总
              <strong>{{ pageTotal }}</strong> 页
            </span>
          </div>
          <div class="page-r">
            <span class="el-icon-d-arrow-left" @click="getData(1)"></span>
            <span
              class="el-icon-arrow-left"
              @click="getData(current - 1)"
            ></span>
            <span
              class="num"
              v-show="current - 2 > 0"
              @click="getData(current - 2)"
              >{{ current - 2 }}</span
            >
            <span
              class="num"
              v-show="current - 1 > 0"
              @click="getData(current - 1)"
              >{{ current - 1 }}</span
            >
            <span class="num active">{{ current }}</span>
            <span
              class="num"
              v-show="current + 1 <= pageTotal"
              @click="getData(current + 1)"
              >{{ current + 1 }}</span
            >
            <span
              class="num"
              v-show="current + 2 <= pageTotal"
              @click="getData(current + 2)"
              >{{ current + 2 }}</span
            >
            <span
              class="el-icon-arrow-right"
              @click="getData(current + 1)"
            ></span>
            <span
              class="el-icon-d-arrow-right"
              @click="getData(pageTotal)"
            ></span>
            <div class="pagesize">
              每页显示
              <el-select
                class="showselect"
                size="mini"
                @change="getData(1)"
                v-model="pagesizeactive"
              >
                <el-option
                  v-for="item in pagesize"
                  :key="item"
                  :label="item"
                  :value="item"
                ></el-option> </el-select
              >条信息
            </div>
          </div>
        </div>
      </div>
    </div>
    <vehicledetails
      :visible="visible"
      :vehicleoption="vehicleoption"
      @close="visible = false"
    ></vehicledetails>
  </div>
</template>

<script>
import vehicledetails from "./vehicledetails";
import allHeader from "@/components/Header/index";
import dataAnalysisApi from "@/api/modules/dataAnalysis";
import { mapGetters } from "vuex";
import { format } from "@/config/date";
import { export_json_to_excel } from "@/config/Export2Excel";
export default {
  components: {
    "all-header": allHeader,
    vehicledetails,
  },
  data() {
    return {
      loading: false,
      downloading: false,
      searchshow: false,
      total: 0, //消息总数
      current: 1, //当前页数
      pageTotal: 1, //总页数
      pagesize: [10, 20, 30, 50, 100], //每页显示列表
      pagesizeactive: 20, //当前每页显示
      enterpriseListH: "calc(100vh - 13.5714rem)",
      form: {
        begintime: format(
          new Date().getTime() - 3600 * 1000 * 24,
          "YYYY-MM-DD"
        ),
        endtime: format(new Date().getTime() - 3600 * 1000 * 24, "YYYY-MM-DD"),
        cheliangpaizhao: "",
        alarmtype: "",
        Allalarmtype: this.$route.query.Allalarmtype,
        shifouchuli: "",
        shifoushenshu: "",
      },
      formold: {},
      enterpriseList: [],
      visible: false,
      vehicleoption: {},
      GPS: true,
      zhudong: true,
    };
  },
  created() {
    let {
      type,
      begintime,
      endtime,
      deptName,
      shifouchuli,
      alarmtype,
      returnUrl,
      zhengfuId,
      cheliangpaizhao = "",
      Allalarmtype,
    } = this.$route.query;
    this.form = {
      ...this.form,
      shifoushenshu: shifouchuli == "" ? "" : "已申诉",
      type,
      begintime,
      endtime,
      deptName,
      shifouchuli,
      alarmtype,
      returnUrl,
      zhengfuId,
      cheliangpaizhao,
      Allalarmtype,
    };
    this.formold = {
      ...this.form,
      shifoushenshu: shifouchuli == "" ? "" : "已申诉",
      type,
      begintime,
      endtime,
      deptName,
      shifouchuli,
      alarmtype,
      returnUrl,
      zhengfuId,
      cheliangpaizhao,
      Allalarmtype,
    };
    //报警统计结算
    this.getData(1);
  },
  computed: {
    ...mapGetters({
      zhuzzhiId: "government/fasongdanwei",
    }),
  },
  mounted() {
    if (this.form.Allalarmtype === "北斗报警") {
      this.zhudong = false;
      this.GPS = true;
    } else if (this.form.Allalarmtype === "主动安全报警") {
      this.GPS = false;
      this.zhudong = true;
    } else {
      this.GPS = true;
      this.zhudong = true;
    }
  },
  methods: {
    // 请求数据判断
    getData(page) {
      this.getZFALLBJMX(page);
      // if (this.form.type == 1) {
      //   if (
      //     this.form.Allalarmtype == "主动安全报警" &&
      //     this.form.alarmtype == ""
      //   ) {
      //     this.getZFDMSBJMX(page);
      //   } else {
      //     this.getZFALLBJMX(page);
      //   }
      // } else {
      //   if (this.form.Allalarmtype === "主动安全报警") {
      //     this.getZFDMSBJMX(page);
      //   } else {
      //     this.getZFALLBJMX(page);
      //   }
      // }
    },
    //所有报警详情明细
    async getZFALLBJMX(current = 1) {
      current = Number(current);
      this.loading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFALLBJMX({
          current: current,
          size: this.pagesizeactive,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
          deptName: this.form.deptName,
          cheliangpaizhao: this.form.cheliangpaizhao,
          shifouchuli: this.form.shifouchuli,
          shifoushenshu: this.form.shifoushenshu,
          alarmtype: this.form.alarmtype,
        })
      );
      this.loading = false;
      if (data) {
        this.enterpriseList = data.records;
        //分页处理
        this.current = data.current;
        this.total = data.total;
        this.pageTotal = data.pageTotal;
      } else {
        this.$message.error(err);
      }
    },
    //gps报警详情明细
    async getZFgpsBJMX(current = 1) {
      current = Number(current);
      this.loading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFgpsBJMX({
          current: current,
          size: this.pagesizeactive,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
          deptName: this.form.deptName,
          cheliangpaizhao: this.form.cheliangpaizhao,
          shifouchuli: this.form.shifouchuli,
          shifoushenshu: this.form.shifoushenshu,
          alarmtype: this.form.alarmtype,
        })
      );
      this.loading = false;
      if (data) {
        this.enterpriseList = data.records;
        //分页处理
        this.current = data.current;
        this.total = data.total;
        this.pageTotal = data.pageTotal;
      } else {
        this.$message.error(err);
      }
    },
    // DMS报警详情明细
    async getZFDMSBJMX(current = 1) {
      current = Number(current);
      this.loading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFDMSBJMX({
          current: current,
          size: this.pagesizeactive,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
          deptName: this.form.deptName,
          shifouchuli: this.form.shifouchuli,
          alarmtype: this.form.alarmtype,
        })
      );
      this.loading = false;
      if (data) {
        this.enterpriseList = data.records;
        //分页处理
        this.current = data.current;
        this.total = data.total;
        this.pageTotal = data.pageTotal;
      } else {
        this.$message.error(err);
      }
    },
    returnGo() {
      this.$router.push({
        path: this.form.returnUrl,
        query: {
          isinfo: true,
          zhengfuId: this.formold.zhengfuId,
          begintime: this.formold.begintime,
          endtime: this.formold.endtime,
        },
      });
    },
    refresh() {
      this.form = JSON.parse(JSON.stringify(this.formold));
      this.getData(1);
    },
    getinfoData(row) {
      this.visible = true;
      this.vehicleoption = {
        type: this.form.type,
        ...row,
      };
      for (let i in this.$children) {
        if (this.$children[i].QKclick) {
          this.$children[i].QKclick();
          this.$children[i].CarMsg();
        }
      }
    },
    changeSearch() {
      this.searchshow
        ? (this.enterpriseListH = "calc(100vh - 13.5714rem)")
        : (this.enterpriseListH = "calc(100vh - 16.8571rem)");
      this.searchshow = !this.searchshow;
    },
    // 报警类型选择
    Alltype(data) {
      this.form.alarmtype = "";
      if (data === "北斗报警") {
        this.zhudong = false;
        this.GPS = true;
      } else if (data === "主动安全报警") {
        this.GPS = false;
        this.zhudong = true;
      } else if (data === "") {
        this.GPS = true;
        this.zhudong = true;
      }
    },
    // 统计下载
    async downtable() {
      this.downloading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFALLBJMX({
          current: 0,
          size: 0,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
          deptName: this.form.deptName,
          cheliangpaizhao: this.form.cheliangpaizhao,
          shifouchuli: this.form.shifouchuli,
          shifoushenshu: this.form.shifoushenshu,
          alarmtype: this.form.alarmtype,
        })
      );
      this.downloading = false;
      if (data) {
        data = data.records.map((el, index) => {
          return {
            ...el,
            index: index + 1,
          };
        });
        this.export2Excel(data);
      } else {
        this.$message.error(err);
      }
    },
    //处理下载数据
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },
    export2Excel(list) {
      require.ensure([], () => {
        const tHeader = [
          "排名",
          "是否处理",
          "是否申诉",
          "所属企业",
          "车牌",
          "车牌颜色",
          "车辆类型",
          "报警类型",
          "开始时间",
          "结束时间",
          "报警速度(km/h)",
          "经度",
          "纬度",
          "报警位置",
          "处理人/申诉人",
          "处理时间/申述时间",
          "处理形式",
          "处理描述",
          "申诉形式",
          "申诉描述",
        ];
        const filterVal = [
          "index",
          "chulizhuangtai",
          "shensuzhuangtai",
          "company",
          "plate",
          "color",
          "operatType",
          "alarmType",
          "beginTime",
          "endTime",
          "velocity",
          "longitude",
          "latitude",
          "roadName",
          "chuliren",
          "chulishijian",
          "chulixingshi",
          "chulimiaoshu",
          "shensuxingshi",
          "shensumiaoshu",
        ];
        // const list = this.goodsItems;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel({
          header: tHeader,
          data,
          filename: "处理率统计详情",
        });
      });
    },
  },
};
</script>

<style lang="scss">
.search {
  // display: flex;
  .el-form-item__label {
    color: #01f8ff;
  }
  .timetype {
    .el-form-item {
      margin-right: 0px;
      margin-bottom: 0px;
    }
  }
  input {
    background: #112e4d;
    border-color: #004b77;
    color: #ffffff;
    height: 2.8571rem;
    font-size: 1rem;
    &:focus {
      border-color: #00d2ff;
    }
  }
  .el-form-item--mini.el-form-item {
    margin-bottom: 0.8rem;
  }
  .timetype .el-form-item--mini.el-form-item {
    margin-bottom: 0px;
  }
}
.mainTable {
  &.el-table--enable-row-hover .el-table__body tr:hover > td,
  .el-table__body tr.hover-row > td {
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
  .el-table__fixed-right {
    background: #0f1f40;
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
}
.pagesize {
  .el-input__inner {
    background-color: #0f1f40;
    border: 1px solid #0a3774;
  }
}
</style>
