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
          >
            <svg-icon
              class="icon"
              v-show="!downloading"
              icon-class="down"
            />下载
          </el-button>
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
                  :picker-options="pickerOptions"
                  type="date"
                  placeholder="选择日期"
                  v-model="form.begintime"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="1">-</el-col>
            <el-col :span="11" class="timetype">
              <el-form-item>
                <el-date-picker
                  style="width: 100%"
                  :picker-options="pickerOptions"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  v-model="form.endtime"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="企业名称">
            <el-input
              v-model="form.deptName"
              placeholder="请输入企业名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="车牌号">
            <el-input
              v-model="form.chepaihao"
              placeholder="输入车牌号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="营运类型" clearable>
            <el-input
              v-model="form.yingyunleixing"
              placeholder="输入营运类型"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="sbtn" @click="getZFCLBJTJPM(1)"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
        <!-- mainTable -->
        <el-table
          v-loading="loading"
          @sort-change="changeSort"
          element-loading-background="rgba(0, 0, 0, 0.4)"
          size="mini"
          class="mainTable"
          :height="enterpriseListH"
          border
          :data="enterpriseList"
        >
          <el-table-column type="index" label="排名" width="50" align="center">
            <template scope="scope">
              <span>{{
                (current - 1) * pagesizeactive + scope.$index + 1
              }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="cheliangpaizhao"
            label="车牌号"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column label="企业名称" min-width="240" align="center">
            <template slot-scope="{ row }">
              <span class="businessName">{{ row.deptName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="shiyongxingzhi"
            label="营运类型"
            min-width="140"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="chepaiyanse"
            label="车牌颜色"
            min-width="100"
            align="center"
          ></el-table-column>
          <el-table-column label="北斗报警" align="center">
            <el-table-column
              prop="gpschaosu"
              label="超速报警次数"
              min-width="120"
              sortable="custom"
              align="center"
            ></el-table-column>
            <!-- <el-table-column
              prop="gpsyejian"
              label="夜间限速报警次数"
              sortable="custom"
              align="center"
              min-width="150"
            ></el-table-column> -->
            <el-table-column
              prop="gpspilao"
              label="疲劳驾驶报警次数"
              sortable="custom"
              align="center"
              min-width="150"
            ></el-table-column>
            <el-table-column
              prop="gpsyejian"
              label="夜间报警次数"
              sortable="custom"
              align="center"
              min-width="150"
            ></el-table-column>
            <el-table-column
              prop="gpsyichang"
              label="异常报警次数"
              sortable="custom"
              align="center"
              min-width="120"
            ></el-table-column>
          </el-table-column>
          <el-table-column
            prop="gpsbaojingzongshu"
            label="北斗报警次数"
            sortable="custom"
            align="center"
            min-width="120"
          ></el-table-column>
          <el-table-column label="主动安全报警" align="center">
            <el-table-column
              prop="dmsjiedadianhua"
              sortable="custom"
              label="接打电话"
              align="center"
              min-width="100"
            ></el-table-column>
            <el-table-column
              prop="dmschouyan"
              sortable="custom"
              label="抽烟"
              align="center"
              min-width="90"
            ></el-table-column>
            <el-table-column
              prop="dmsfenshen"
              sortable="custom"
              label="分神"
              align="center"
              min-width="90"
            ></el-table-column>
            <el-table-column
              prop="dmspilao"
              sortable="custom"
              label="生理疲劳"
              align="center"
              min-width="100"
            ></el-table-column>
          </el-table-column>
          <el-table-column
            prop="dmsbaojingzongshu"
            sortable="custom"
            label="主动安全报警数"
            align="center"
            min-width="130"
          ></el-table-column>
          <el-table-column
            prop="baojingzongshu"
            sortable="custom"
            min-width="100"
            label="报警总数"
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
            <span class="el-icon-d-arrow-left" @click="getZFCLBJTJPM(1)"></span>
            <span
              class="el-icon-arrow-left"
              @click="getZFCLBJTJPM(current - 1)"
            ></span>
            <span
              class="num"
              v-show="current - 2 > 0"
              @click="getZFCLBJTJPM(current - 2)"
              >{{ current - 2 }}</span
            >
            <span
              class="num"
              v-show="current - 1 > 0"
              @click="getZFCLBJTJPM(current - 1)"
              >{{ current - 1 }}</span
            >
            <span class="num active">{{ current }}</span>
            <span
              class="num"
              v-show="current + 1 <= pageTotal"
              @click="getZFCLBJTJPM(current + 1)"
              >{{ current + 1 }}</span
            >
            <span
              class="num"
              v-show="current + 2 <= pageTotal"
              @click="getZFCLBJTJPM(current + 2)"
              >{{ current + 2 }}</span
            >
            <span
              class="el-icon-arrow-right"
              @click="getZFCLBJTJPM(current + 1)"
            ></span>
            <span
              class="el-icon-d-arrow-right"
              @click="getZFCLBJTJPM(pageTotal)"
            ></span>
            <div class="pagesize">
              每页显示
              <el-select
                class="showselect"
                size="mini"
                @change="getZFCLBJTJPM(1)"
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
  </div>
</template>

<script>
import allHeader from "@/components/Header/index";
import statisticsAside from "@/components/StatisticsAside/index";
import dataAnalysisApi from "@/api/modules/report";
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
      newtime: "",
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
          new Date().getTime() - 24 * 60 * 60 * 1000,
          "YYYY-MM-DD"
        ),
        endtime: format(
          new Date().getTime() - 24 * 60 * 60 * 1000,
          "YYYY-MM-DD"
        ),
        deptName: "",
        chepaihao: "",
        yingyunleixing: "",
      },
      enterpriseList: [],
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
    this.getZFCLBJTJPM();
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
        this.getZFCLBJTJPM();
      }
    },
  },
  methods: {
    //报警统计结算
    async getZFCLBJTJPM(current = 1) {
      current = Number(current);
      this.loading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFCLBJTJPM({
          // deptId:5448,
          deptId: this.zhuzzhiId,
          current: current,
          size: this.pagesizeactive,
          orderColumns: this.orderColumns,
          order: this.order,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
          deptName: this.form.deptName,
          cheliangpaizhao: this.form.chepaihao,
          shiyongxingzhi: this.form.yingyunleixing,
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
      //   console.log(this.order);
      this.getZFCLBJTJPM(1);
    },
    // 统计下载
    async downtable() {
      this.downloading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getZFCLBJTJPM({
          // deptId:5448,
          deptId: this.zhuzzhiId,
          current: 0,
          size: 0,
          orderColumns: this.orderColumns,
          order: this.order,
          begintime: this.form.begintime,
          endtime: this.form.endtime,
          deptName: this.form.deptName,
          cheliangpaizhao: this.form.chepaihao,
          shiyongxingzhi: this.form.yingyunleixing,
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
        let multiHeader, theader, filterVal, merges, filename;
        multiHeader = [
          "序号",
          "车牌号",
          "企业名称",
          "营运类型",
          "车牌颜色",
          "北斗报警",
          "",
          "",
          "",
          "北斗报警次数",
          "主动安全报警",
          "",
          "",
          "",
          "主动安全报警总数",
          "报警总数",
        ];
        theader = [
          "",
          "",
          "",
          "",
          "",
          "超速报警次数",
          "疲劳驾驶报警次数",
          "夜间报警次数",
          "异常报警次数",
          "",
          "接打电话",
          "抽烟",
          "分神",
          "疲劳驾驶",
          "",
          "",
        ];
        filterVal = [
          "index",
          "cheliangpaizhao",
          "deptName",
          "shiyongxingzhi",
          "chepaiyanse",
          "gpschaosu",
          "gpspilao",
          "gpsyejian",
          "gpsyichang",
          "gpsbaojingzongshu",
          "dmsjiedadianhua",
          "dmschouyan",
          "dmsfenshen",
          "dmspilao",
          "dmsbaojingzongshu",
          "baojingzongshu",
        ];
        merges = [
          "A1:A2",
          "B1:B2",
          "C1:C2",
          "D1:D2",
          "E1:E2",
          "F1:I1",
          "J1:J2",
          "K1:N1",
          "O1:O2",
          "P1:P2",
        ];
        // const list = this.goodsItems;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel({
          multiHeader: multiHeader,
          header: theader,
          data,
          merges,
          filename: "车辆报警排名",
        });
      });
    },
  },
};
</script>
