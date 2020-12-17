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
      width: calc(100% - 24rem);
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
      .businessName {
        color: #01f8ff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .cur {
        cursor: pointer;
      }
      .numerical {
        margin: 0;
        white-space: nowrap;
        /* span{
          color: rgb(255,217,47)
        } */
        &.ccur span {
          cursor: pointer;
          color: rgb(255, 217, 47);
          text-decoration: underline;
        }
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
</style>
<style lang="scss">
.search {
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

<template>
  <div class="enterprise">
    <all-header></all-header>
    <div class="main">
      <statistics-aside></statistics-aside>
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
            ><svg-icon
              class="icon"
              v-show="!downloading"
              icon-class="down"
            />下载</el-button
          >
          <el-button
            @click="refresh"
            size="mini"
            class="btn"
            icon="el-icon-refresh"
            >重置</el-button
          >
          <el-button
            v-show="hierarchy == 2"
            @click="returnpage"
            size="mini"
            class="btn"
            icon="el-icon-refresh"
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
          <el-form-item label="时间">
            <el-col :span="11" class="timetype">
              <el-form-item>
                <el-date-picker
                  style="width: 100%"
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
                  style="width: 100%"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  v-model="form.endtime"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="企业名称" v-show="hierarchy == 2">
            <el-input
              v-model="form.deptName"
              placeholder="请输入企业名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="sbtn" @click="getDate(1)"
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
          <el-table-column type="index" label="排名" width="50" align="center">
          </el-table-column>
          <el-table-column label="地区名称" min-width="100" align="center">
            <template slot-scope="{ row }">
              <span
                v-if="hierarchy == 1"
                class="businessName cur"
                @click="getZFQYBJCLLVTJ(row.zhengfuid, 1)"
                >{{ row.areaname }}</span
              >
              <span v-else class="businessName">{{ row.areaname }}</span>
            </template>
          </el-table-column>
          <el-table-column
            v-if="hierarchy == 2"
            label="企业名称"
            min-width="200"
            align="center"
          >
            <template slot-scope="{ row }">
              <span class="businessName">{{ row.deptName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="cheliangshu"
            label="报警车辆数"
            align="center"
            min-width="86"
          >
            <template slot-scope="{ row }">
              <p class="numerical" :class="hierarchy == 2 ? 'ccur' : ''">
                <span @click="goCheliang(1, '超速报警', '', '已处理', row)">{{
                  row.cheliangshu
                }}</span>
              </p>
            </template>
          </el-table-column>
          <el-table-column
            prop="date"
            label="统计时间"
            align="center"
            min-width="170"
          >
          </el-table-column>
          <el-table-column label="北斗设备报警" align="center">
            <el-table-column label="处理/超速" align="center" min-width="140">
              <template slot-scope="{ row }">
                <p class="numerical" :class="hierarchy == 2 ? 'ccur' : ''">
                  <span
                    @click="goinfo(1, '超速报警', '北斗报警', '已处理', row)"
                    >{{ row.chaosucl }}</span
                  >
                  /
                  <span @click="goinfo(1, '超速报警', '北斗报警', '', row)">{{
                    row.gpschaosu
                  }}</span>
                  / {{ row.gpschaosucllv }}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              label="处理/疲劳驾驶"
              align="center"
              min-width="140"
            >
              <template slot-scope="{ row }">
                <p class="numerical" :class="hierarchy == 2 ? 'ccur' : ''">
                  <span
                    @click="
                      goinfo(1, '疲劳驾驶报警', '北斗报警', '已处理', row)
                    "
                    >{{ row.pilaocl }}</span
                  >
                  /
                  <span
                    @click="goinfo(1, '疲劳驾驶报警', '北斗报警', '', row)"
                    >{{ row.gpspilao }}</span
                  >
                  / {{ row.gpspilaocllv }}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              label="处理/夜间行驶"
              align="center"
              min-width="140"
            >
              <template slot-scope="{ row }">
                <p class="numerical" :class="hierarchy == 2 ? 'ccur' : ''">
                  <span
                    @click="
                      goinfo(1, '夜间行驶报警', '北斗报警', '已处理', row)
                    "
                    >{{ row.yejiancl }}</span
                  >
                  /
                  <span
                    @click="goinfo(1, '夜间行驶报警', '北斗报警', '', row)"
                    >{{ row.gpsyejian }}</span
                  >
                  / {{ row.gpsyejiancllv }}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              label="处理/异常车辆"
              align="center"
              min-width="140"
            >
              <template slot-scope="{ row }">
                <p class="numerical" :class="hierarchy == 2 ? 'ccur' : ''">
                  <span
                    @click="
                      goinfo(1, '异常车辆报警', '北斗报警', '已处理', row)
                    "
                    >{{ row.yichangcl }}</span
                  >
                  /
                  <span
                    @click="goinfo(1, '异常车辆报警', '北斗报警', '', row)"
                    >{{ row.gpsyichang }}</span
                  >
                  / {{ row.gpsyichangcllv }}
                </p>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column label="DMS设备报警" align="center">
            <el-table-column
              label="处理/接打电话"
              align="center"
              min-width="140"
            >
              <template slot-scope="{ row }">
                <p class="numerical" :class="hierarchy == 2 ? 'ccur' : ''">
                  <span
                    @click="
                      goinfo(2, '接打电话报警', '主动安全处警', '已处理', row)
                    "
                    >{{ row.dadianhuacl }}</span
                  >
                  /
                  <span
                    @click="goinfo(2, '接打电话报警', '主动安全处警', '', row)"
                    >{{ row.dmsjiedadianhua }}</span
                  >
                  / {{ row.dmsjiedadianhuacllv }}
                </p>
              </template>
            </el-table-column>
            <el-table-column label="处理/抽烟" align="center" min-width="140">
              <template slot-scope="{ row }">
                <p class="numerical" :class="hierarchy == 2 ? 'ccur' : ''">
                  <span
                    @click="
                      goinfo(2, '抽烟报警', '主动安全处警', '已处理', row)
                    "
                    >{{ row.chouyancl }}</span
                  >
                  /
                  <span
                    @click="goinfo(2, '抽烟报警', '主动安全处警', '', row)"
                    >{{ row.dmschouyan }}</span
                  >
                  / {{ row.dmschouyancllv }}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              label="处理/分神驾驶"
              align="center"
              min-width="140"
            >
              <template slot-scope="{ row }">
                <p class="numerical" :class="hierarchy == 2 ? 'ccur' : ''">
                  <span
                    @click="
                      goinfo(2, '分神驾驶报警', '主动安全处警', '已处理', row)
                    "
                    >{{ row.fenshencl }}</span
                  >
                  /
                  <span
                    @click="goinfo(2, '分神驾驶报警', '主动安全处警', '', row)"
                    >{{ row.dmsfenshen }}</span
                  >
                  / {{ row.dmsfenshencllv }}
                </p>
              </template>
            </el-table-column>
            <el-table-column
              label="处理/生理疲劳"
              align="center"
              min-width="140"
            >
              <template slot-scope="{ row }">
                <p class="numerical" :class="hierarchy == 2 ? 'ccur' : ''">
                  <span
                    @click="
                      goinfo(2, '疲劳驾驶报警', '主动安全处警', '已处理', row)
                    "
                    >{{ row.pilaoshipincl }}</span
                  >
                  /
                  <span
                    @click="goinfo(2, '疲劳驾驶报警', '主动安全处警', '', row)"
                    >{{ row.dmspilao }}</span
                  >
                  / {{ row.dmspilaocllv }}
                </p>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column
            prop="baojingzongshu"
            label="处理/报警总数"
            min-width="140"
            align="center"
          >
            <template slot-scope="{ row }">
              <p class="numerical">
                <span>{{ row.baojingclcishu }}</span> /
                <span>{{ row.baojingzongshu }}</span> /
                {{ row.baojingzongcllv }}
              </p>
            </template>
          </el-table-column>
        </el-table>
        <!-- page -->
        <div class="page">
          <div class="page-l">
            <span
              >总共 <strong>{{ total }}</strong> 条消息</span
            >
            <span
              >当前第 <strong>{{ current }}</strong> 页</span
            >
            <span
              >总 <strong>{{ pageTotal }}</strong> 页</span
            >
          </div>
          <div class="page-r">
            <span class="el-icon-d-arrow-left" @click="getDate(1)"></span>
            <span
              class="el-icon-arrow-left"
              @click="getDate(current - 1)"
            ></span>
            <span
              class="num"
              v-show="current - 2 > 0"
              @click="getDate(current - 2)"
              >{{ current - 2 }}</span
            >
            <span
              class="num"
              v-show="current - 1 > 0"
              @click="getDate(current - 1)"
              >{{ current - 1 }}</span
            >
            <span class="num active">{{ current }}</span>
            <span
              class="num"
              v-show="current + 1 <= pageTotal"
              @click="getDate(current + 1)"
              >{{ current + 1 }}</span
            >
            <span
              class="num"
              v-show="current + 2 <= pageTotal"
              @click="getDate(current + 2)"
              >{{ current + 2 }}</span
            >
            <span
              class="el-icon-arrow-right"
              @click="getDate(current + 1)"
            ></span>
            <span
              class="el-icon-d-arrow-right"
              @click="getDate(pageTotal)"
            ></span>
            <div class="pagesize">
              每页显示
              <el-select
                class="showselect"
                size="mini"
                @change="getDate(1)"
                v-model="pagesizeactive"
              >
                <el-option
                  v-for="item in pagesize"
                  :key="item"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
              条信息
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import allHeader from "@/components/Header/index";
import statisticsAside from "@/components/StatisticsAside/index";
import dataAnalysisApi from "@/api/modules/dataAnalysis";
import { mapGetters } from "vuex";
import { format } from "@/config/date";
import { export_json_to_excel } from "@/config/Export2Excel";
export default {
  components: {
    "statistics-aside": statisticsAside,
    "all-header": allHeader,
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
        deptName: "",
      },
      enterpriseList: [],
      hierarchy: 1,
      zhengfuId: "", //地区id
    };
  },
  mounted() {
    let { isinfo, zhengfuId, begintime, endtime } = this.$route.query;
    if (isinfo) {
      this.hierarchy = 2;
      this.zhengfuId = zhengfuId;
      this.form = {
        begintime,
        endtime,
      };
      this.getDate(1);
    } else {
      //报警统计结算
      this.getZFDQBJCLLVTJ();
    }
  },
  computed: {
    ...mapGetters({
      zhuzzhiId: "government/fasongdanwei",
      xuanzhongchengshi: "government/xuanzhongchengshi",
    }),
  },
  watch: {
    zhuzzhiId(newid) {
      // 切换单位
      if (newid) {
        if (this.hierarchy == 2) {
          this.zhengfuId = this.zhuzzhiId;
        }
        this.getDate(1);
      }
    },
  },
  methods: {
    returnpage() {
      this.form = {
        begintime: format(
          new Date().getTime() - 3600 * 1000 * 24,
          "YYYY-MM-DD"
        ),
        endtime: format(new Date().getTime() - 3600 * 1000 * 24, "YYYY-MM-DD"),
        deptName: "",
      };
      this.getZFDQBJCLLVTJ(1);
      this.hierarchy = 1;
    },
    refresh() {
      this.form = {
        begintime: format(
          new Date().getTime() - 3600 * 1000 * 24,
          "YYYY-MM-DD"
        ),
        endtime: format(new Date().getTime() - 3600 * 1000 * 24, "YYYY-MM-DD"),
        deptName: "",
      };
      this.getDate(1);
    },
    // 请求数据判断
    getDate(page) {
      if (this.hierarchy == 2) {
        this.getZFQYBJCLLVTJ(this.zhengfuId, page);
      } else {
        this.getZFDQBJCLLVTJ(page);
      }
    },
    // 跳转详情页面
    goinfo(type, alarmtype, Allalarmtype, shifouchuli, row) {
      if (this.hierarchy == 1) return false;
      this.$router.push({
        path: "/treatmentRateinfo",
        query: {
          type: type,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
          deptName: row.deptName,
          shifouchuli: shifouchuli,
          alarmtype: alarmtype,
          Allalarmtype: Allalarmtype,
          zhengfuId: this.zhengfuId,
          returnUrl: "/treatmentRate",
        },
      });
    },
    goCheliang(type, alarmtype, Allalarmtype, shifouchuli, row) {
      if (this.hierarchy == 1) return false;
      this.$router.push({
        path: "/vehicleinfo",
        query: {
          type: type,
          begintime: this.form.begintime,
          deptName: row.deptName,
          endtime: this.form.endtime,
          zhengfuId: this.zhengfuId,
          returnUrl: "/treatmentRate",
        },
      });
    },
    //地区报警处理率
    async getZFDQBJCLLVTJ(current = 1) {
      current = Number(current);
      this.loading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFDQBJCLLVTJ({
          // deptId:5448,
          deptId: this.zhuzzhiId,
          current: current,
          size: this.pagesizeactive,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
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
    // 企业报警处理率
    async getZFQYBJCLLVTJ(zhengfuId, current = 1) {
      this.zhengfuId = zhengfuId;
      this.hierarchy = 2;
      current = Number(current);
      this.loading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFQYBJCLLVTJ({
          // deptId:5448,
          deptName: this.form.deptName,
          deptId: zhengfuId,
          current: current,
          size: this.pagesizeactive,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
        })
      );
      this.loading = false;
      if (data) {
        console.log(data);
        this.enterpriseList = data.records;
        //分页处理
        this.current = data.current;
        this.total = data.total;
        this.pageTotal = data.pageTotal;
      } else {
        this.$message.error(err);
      }
    },
    changeSearch() {
      this.searchshow
        ? (this.enterpriseListH = "calc(100vh - 13.5714rem)")
        : (this.enterpriseListH = "calc(100vh - 16.8571rem)");
      this.searchshow = !this.searchshow;
    },
    // 统计下载
    async downtable() {
      this.downloading = true;
      let req, url;
      if (this.hierarchy == 2) {
        url = "getZFQYBJCLLVTJ";
        req = {
          deptName: this.form.deptName,
          deptId: this.zhengfuId,
        };
      } else {
        url = "getZFDQBJCLLVTJ";
        req = {
          deptId: this.zhuzzhiId,
        };
      }
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi[url]({
          ...req,
          current: 0,
          size: 0,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
        })
      );
      this.downloading = false;
      if (data) {
        data = data.records.map((el, index) => {
          return {
            ...el,
            index: index + 1,
            gpschaosu: `${el.chaosucl}/${el.gpschaosu}/${el.gpschaosucllv}`,
            gpspilao: `${el.pilaocl}/${el.gpspilao}/${el.gpspilaocllv}`,
            gpsyejian: `${el.yejiancl}/${el.gpsyejian}/${el.gpsyejiancllv}`,
            gpsyichang: `${el.yichangcl}/${el.gpsyichang}/${el.gpsyichangcllv}`,
            dmsjiedadianhua: `${el.dadianhuacl}/${el.dmsjiedadianhua}/${el.dmsjiedadianhuacllv}`,
            dmschouyan: `${el.chouyancl}/${el.dmschouyan}/${el.dmschouyancllv}`,
            dmsfenshen: `${el.fenshencl}/${el.dmsfenshen}/${el.dmsfenshencllv}`,
            dmspilao: `${el.pilaoshipincl}/${el.dmspilao}/${el.dmspilaocllv}`,
            baojingzongshu: `${el.baojingclcishu}/${el.baojingzongshu}/${el.baojingzongcllv}`,
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
        let multiHeader, tHeader, filterVal, merges, filename;
        if (this.hierarchy == 2) {
          multiHeader = [
            "排名",
            "地区名称",
            "企业名称",
            "报警车辆数",
            "统计时间",
            "北斗设备报警",
            "",
            "",
            "",
            "DMS设备报警",
            "",
            "",
            "",
            "处理/报警总数",
          ];
          tHeader = [
            "",
            "",
            "",
            "",
            "",
            "处理/超速",
            "处理/疲劳驾驶",
            "处理/夜间行驶",
            "处理/异常车辆",
            "处理/接打电话",
            "处理/抽烟",
            "处理/分神驾驶",
            "处理/生理疲劳",
            "",
          ];
          filterVal = [
            "index",
            "areaname",
            "deptName",
            "cheliangshu",
            "date",
            "gpschaosu",
            "gpspilao",
            "gpsyejian",
            "gpsyichang",
            "dmsjiedadianhua",
            "dmschouyan",
            "dmsfenshen",
            "dmspilao",
            "baojingzongshu",
          ];
          merges = [
            "A1:A2",
            "B1:B2",
            "C1:C2",
            "D1:D2",
            "E1:E2",
            "F1:I1",
            "J1:M1",
            "N1:N2",
          ];
          filename = "企业处理率统计";
        } else {
          multiHeader = [
            "排名",
            "地区名称",
            "报警车辆数",
            "统计时间",
            "北斗设备报警",
            "",
            "",
            "",
            "DMS设备报警",
            "",
            "",
            "",
            "处理/报警总数",
          ];
          tHeader = [
            "",
            "",
            "",
            "",
            "处理/超速",
            "处理/疲劳驾驶",
            "处理/夜间行驶",
            "处理/异常车辆",
            "处理/接打电话",
            "处理/抽烟",
            "处理/分神驾驶",
            "处理/生理疲劳",
            "",
          ];
          filterVal = [
            "index",
            "areaname",
            "cheliangshu",
            "date",
            "gpschaosu",
            "gpspilao",
            "gpsyejian",
            "gpsyichang",
            "dmsjiedadianhua",
            "dmschouyan",
            "dmsfenshen",
            "dmspilao",
            "baojingzongshu",
          ];
          merges = [
            "A1:A2",
            "B1:B2",
            "C1:C2",
            "D1:D2",
            "E1:H1",
            "I1:L1",
            "M1:M2",
          ];
          filename = "地区处理率统计";
        }
        const data = this.formatJson(filterVal, list);
        export_json_to_excel({
          multiHeader,
          header: tHeader,
          data,
          merges,
          filename: filename,
        });
      });
    },
  },
};
</script>
