<template>
  <div class="enterprise">
    <div class="main" style="display: flex">
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
            <el-form-item>
              <el-date-picker
                style="width: 100%"
                :picker-options="pickerOptions"
                type="week"
                placeholder="选择周"
                v-model="form.begintime"
                format="yyyy 第 WW 周"
              ></el-date-picker>
            </el-form-item>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="sbtn" @click="getZFBJTJJS(1)"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
        <!-- mainTable -->
        <el-table
          width="1700"
          v-loading="loading"
          @sort-change="changeSort"
          element-loading-background="rgba(0, 0, 0, 0.4)"
          size="mini"
          class="mainTable"
          :height="enterpriseListH"
          border
          :data="enterpriseList"
        >
          <el-table-column label="查看" width="50" align="center">
            <template slot-scope="{ row }">
              <img src="../../assets/img/edit.png" @click="rowClick(row)" alt />
            </template>
          </el-table-column>
          <el-table-column label="企业名称" align="center">
            <template slot-scope="{ row }">
              <span class="businessName">{{ row.zhengfuname }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="countdate"
            label="统计日期"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="createtimeshow"
            label="监控时间"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="caozuoren"
            label="报告制作人"
            align="center"
          ></el-table-column>
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
            <span class="el-icon-d-arrow-left" @click="getZFBJTJJS(1)"></span>
            <span
              class="el-icon-arrow-left"
              @click="getZFBJTJJS(current - 1)"
            ></span>
            <span
              class="num"
              v-show="current - 2 > 0"
              @click="getZFBJTJJS(current - 2)"
              >{{ current - 2 }}</span
            >
            <span
              class="num"
              v-show="current - 1 > 0"
              @click="getZFBJTJJS(current - 1)"
              >{{ current - 1 }}</span
            >
            <span class="num active">{{ current }}</span>
            <span
              class="num"
              v-show="current + 1 <= pageTotal"
              @click="getZFBJTJJS(current + 1)"
              >{{ current + 1 }}</span
            >
            <span
              class="num"
              v-show="current + 2 <= pageTotal"
              @click="getZFBJTJJS(current + 2)"
              >{{ current + 2 }}</span
            >
            <span
              class="el-icon-arrow-right"
              @click="getZFBJTJJS(current + 1)"
            ></span>
            <span
              class="el-icon-d-arrow-right"
              @click="getZFBJTJJS(pageTotal)"
            ></span>
            <div class="pagesize">
              每页显示
              <el-select
                class="showselect"
                size="mini"
                @change="getZFBJTJJS(1)"
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
      <div class="main-pre" v-if="previewshow">
        <div class="main-pre-head">
          <span>{{ wenjianming }}</span>
          <el-tooltip content="下载文件" placement="bottom" effect="light">
            <i class="el-icon-connection" @click="downwenjian"></i>
          </el-tooltip>
        </div>
        <div
          class="main-pre-img"
          v-loading="weekloading"
          element-loading-text="加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <img :src="item" v-for="item in Preimg" :key="item.id" alt />
        </div>
        <div class="main-pre-foot">
          <el-button type="primary" @click="backto">退出</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import allHeader from "@/components/Header/index";
import statisticsAside from "@/components/StatisticsAside/index";
import dataAnalysisApi from "@/api/modules/report";
import { mapGetters } from "vuex";
import { format } from "@/config/date";
import { export_json_to_excel } from "@/config/Export2Excel";
import axios from "axios";

let downid;
export default {
  components: {
    "statistics-aside": statisticsAside,
    "all-header": allHeader,
  },
  data() {
    return {
      loading: false,
      // downloading: false,
      searchshow: false,
      previewshow: false,
      total: 0, //消息总数
      current: 1, //当前页数
      pageTotal: 1, //总页数
      pagesize: [10, 20, 30, 50, 100], //每页显示列表
      pagesizeactive: 20, //当前每页显示
      enterpriseListH: "calc(100vh - 14.5828rem)",
      form: {
        begintime: "",
      },
      enterpriseList: [],
      Preimg: [],
      wenjianming: "",
      weekloading: false,
      pickerOptions: {
        disabledDate: (time) => {
          let nowData = new Date();
          nowData = new Date(nowData.setDate(nowData.getDate() - 1));
          return time > nowData;
        },
      },
      orderColumns: "", //排序字段
      order: "", //正序/倒序
      isorder: "",
    };
  },
  mounted() {
    //报警统计结算
    this.getZFBJTJJS();
    this.isorder = new Map()
      .set("ascending", 0)
      .set("descending", 1)
      .set(null, "");
  },
  computed: {
    ...mapGetters({
      zhuzzhiId: "government/fasongdanwei",
    }),
  },
  watch: {
    zhuzzhiId(newid) {
      // 切换单位
      if (newid) {
        this.getZFBJTJJS();
      }
    },
  },
  methods: {
    getMonday() {
      let day = new Date().getDay();
      let deltaday;
      if (day == 0) {
        deltaday = 6;
      } else {
        deltaday = day - 1;
      }
      let monday = new Date(
        new Date().getTime() - deltaday * 24 * 60 * 60 * 1000
      );
      return monday;
    },
    //报警统计结算
    async getZFBJTJJS(current = 1) {
      current = Number(current);
      this.loading = true;
      if (this.form.begintime == "") {
        // this.form.begintime = format(new Date().getTime(), "YYYY-MM-DD");
        this.form.begintime = this.getMonday();
      }
      let yunguanid;
      if (this.zhuzzhiId == this.$store.state.userinfo.deptId) {
        yunguanid = "";
      } else {
        yunguanid = this.zhuzzhiId;
      }
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFBJTJJS({
          // deptId:5448,
          deptId: this.$store.state.userinfo.deptId,
          current: current,
          size: this.pagesizeactive,
          orderColumns: this.orderColumns,
          order: this.order,
          property: 12,
          time: format(this.form.begintime, "YYYY-MM-DD"),
          yunguanId: yunguanid,
        })
      );
      this.loading = false;
      if (data) {
        this.enterpriseList = data.data.records;
        //分页处理
        this.current = data.data.current;
        this.total = data.data.total;
        this.pageTotal = data.data.pageTotal;
      } else {
        this.$message.error(err);
      }
    },
    // 查看
    async rowClick(row) {
      this.previewshow = true;
      this.weekloading = true;
      let look = document.getElementsByClassName("main")[0];
      let lookwidth = document.getElementsByClassName("main-r")[0];
      look.style.display = "flex";
      lookwidth.style.width = 50 + "%";
      this.wenjianming = row.name;
      downid = row.muluid;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZBdown({
          fileType: 2,
          id: row.muluid,
        })
      );
      if (data) {
        this.weekloading = false;
        this.Preimg = data.imgList;
      } else {
        this.$message.error(msg);
      }
    },
    // 下载 文件
    async downwenjian() {
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZBdown({
          fileType: 4,
          id: downid,
        })
      );
      if (data) {
        window.location.href = "http://58.144.142.198:8894/" + data.path;
      } else {
        this.$message.error(msg);
      }
    },
    // 退出
    backto() {
      this.previewshow = false;
      let lookwidth = document.getElementsByClassName("main-r")[0];
      lookwidth.style.width = 100 + "%";
    },
    changeSearch() {
      this.searchshow
        ? (this.enterpriseListH = "calc(100vh - 13.5714rem)")
        : (this.enterpriseListH = "calc(100vh - 16.8571rem)");
      this.searchshow = !this.searchshow;
    },
    //排序
    changeSort(val) {
      this.orderColumns = val.prop;
      this.order = this.isorder.get(val.order);
      this.getZFBJTJJS(1);
    },
  },
};
</script>
<style lang="scss" scoped>
.enterprise {
  height: 90vh;
  background: #0b122e;
  .main {
    height: calc(100vh - 7rem);
    display: flex;
    padding: 0 10px 10px 10px;
    box-sizing: border-box;
    .main-r {
      //   margin-left: 1.0714rem;
      // width: calc(100% - 24rem);
      width: 100%;
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
      }
    }
    // 预览
    .main-pre {
      margin: 0 1rem;
      padding: 0.5rem;
      .main-pre-head {
        height: 2rem;
        width: 39vw;
        background-color: #0f1f40;
        padding: 1rem;
        display: flex;
        span {
          font-size: 20px;
          color: white;
          line-height: 2rem;
        }
        i {
          line-height: 2.5rem;
          margin: 0 0.5rem;
          color: white;
        }
      }
      .main-pre-img {
        background: #0f1f40;
        width: 40.5vw;
        height: 76vh;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        margin: 1rem 0;
        overflow-y: scroll;
        img {
          width: 96%;
          // height: 100px;
          padding: 1rem;
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
    height: calc(100% - 90px);
  }
}
.pagesize {
  .el-input__inner {
    background-color: #0f1f40;
    border: 1px solid #0a3774;
  }
}
</style>
