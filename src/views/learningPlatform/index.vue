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
      width: calc(100%);
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
            @click="refresh"
            size="mini"
            class="btn"
            icon="el-icon-refresh"
            >刷新</el-button
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
          <el-form-item label="企业名称">
            <el-input
              v-model="form.deptName"
              placeholder="请输入企业名称"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="学习月份">
            <el-date-picker
              value-format="yyyy-MM"
              type="month"
              placement="bottom-end"
              v-model="form.month"
              placeholder="请选择学习月份"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="完成情况">
            <el-select
              v-model="form.status"
              clearable
              placeholder="请选择完成情况"
            >
              <el-option
                v-for="item in isfinish"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="sbtn" @click="getDate(1)"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
        <el-table
          v-loading="loading"
          element-loading-background="rgba(0, 0, 0, 0.4)"
          size="mini"
          class="mainTable"
          :height="enterpriseListH"
          border
          :data="enterpriseList"
        >
          <el-table-column
            label="企业名称"
            prop="deptname"
            align="center"
          ></el-table-column>
          <el-table-column
            label="学习月份"
            prop="learnmonth"
            width="240"
            align="center"
          ></el-table-column>
          <el-table-column
            label="应学人数"
            prop="yxnum"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="dbnum"
            label="达标人数"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="wdbnum"
            label="未达标人数"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="wxnum"
            label="未学人数"
            align="center"
          ></el-table-column>
          <el-table-column label="操作" align="center" width="110">
            <template slot-scope="{ row }">
              <el-button size="mini" type="primary" @click="learnView(row)"
                >详情</el-button
              >
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
                ></el-option> </el-select
              >条信息
            </div>
          </div>
        </div>
        <viewlearn ref="learnview"></viewlearn>
      </div>
    </div>
  </div>
</template>

<script>
import dataAnalysisApi from "@/api/modules/report";
import { mapGetters } from "vuex";
import viewlearn from "./view.vue";
import { format } from "@/config/date";
export default {
  components: { viewlearn },
  data() {
    return {
      loading: false,
      searchshow: false,
      total: 0, //消息总数
      current: 1, //当前页数
      pageTotal: 1, //总页数
      pagesize: [10, 20, 30, 50, 100], //每页显示列表
      pagesizeactive: 20, //当前每页显示
      enterpriseListH: "calc(100vh - 14.6814rem)",
      form: {
        deptName: "",
        month: format(new Date(), "yyyy-MM"),
        status: "",
      },
      enterpriseList: [],
      zhengfuId: "", //地区id
      isfinish: [
        {
          label: "全部",
          value: "",
        },
        {
          label: "达标",
          value: "达标",
        },
        {
          label: "未达标",
          value: "未达标",
        },
      ],
    };
  },
  created() {
    this.selectZFPersonLearnInfoAll();
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
        this.zhengfuId = this.zhuzzhiId;
        this.getDate(1);
      }
    },
  },
  methods: {
    refresh() {
      this.form = {
        deptName: "",
        month: format(new Date(), "yyyy-MM"),
        status: "",
      };
      this.getDate(1);
    },
    // 请求数据判断
    getDate(page) {
      this.selectZFPersonLearnInfoAll(page);
    },
    //地区报警处理率
    async selectZFPersonLearnInfoAll(current = 1) {
      current = Number(current);
      this.loading = true;
      let lyear = this.form.month.split("-")[0];
      let lmonth = this.form.month.split("-")[1];
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.selectZFPersonLearnInfoAll({
          deptId: this.zhuzzhiId,
          current: current,
          size: this.pagesizeactive,
          lmonth: lmonth,
          lyear: lyear,
          deptName: this.form.deptName,
          status: this.form.status,
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
    changeSearch() {
      this.searchshow
        ? (this.enterpriseListH = "calc(100vh - 13.5714rem)")
        : (this.enterpriseListH = "calc(100vh - 16.8571rem)");
      this.searchshow = !this.searchshow;
    },
    // 详情 弹框
    learnView(row) {
      this.$refs.learnview.usernames = "";
      this.$refs.learnview.statusshow = "";
      this.$refs.learnview.learnStudys = "";
      this.$refs.learnview.rows = row;
      this.$refs.learnview.lmonths = row.learnmonth;
      this.$refs.learnview.selectPersonLearnInfoAll();
      this.$refs.learnview.learnVisible = true;
    },
  },
};
</script>
