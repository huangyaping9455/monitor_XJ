<template>
  <el-dialog
    title="详情"
    class="learns"
    center
    top="10vh"
    :show-close="false"
    :close-on-click-modal="false"
    :visible.sync="hidVisible"
    width="70%"
  >
    <div class="learn_head">
      <span>隐患名称 : </span>
      <el-input
        size="small"
        clearable
        v-model="troubleMc"
        placeholder="请输入隐患名称"
      ></el-input>
      <span style="margin-left:0.8rem;">隐患来源 : </span>
      <el-input
        size="small"
        clearable
        v-model="troubleLy"
        placeholder="请输入隐患名称"
      ></el-input>
      <span style="margin-left:0.8rem;">隐患描述 : </span>
      <el-input
        size="small"
        clearable
        v-model="troubleYhms"
        placeholder="请输入隐患描述"
      ></el-input>
      <el-button size="small" type="primary" @click="getDateMsg(1)"
        >搜索</el-button
      >
    </div>
    <el-table
      class="learnTable"
      :data="tableData"
      border
      height="500"
      v-loading="msgloading"
      element-loading-background="rgba(0, 0, 0, 0.4)"
    >
      <el-table-column
        prop="dengji"
        label="隐患等级"
        width="90"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="troubleBh"
        label="隐患编号"
        show-overflow-tooltip
        align="center"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="troubleMc"
        label="隐患名称"
        show-overflow-tooltip
        align="center"
        width="90"
      >
      </el-table-column>
      <el-table-column
        prop="troubleLy"
        label="隐患来源"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="troubleYhms"
        label="隐患描述"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="发现日期"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="troubleFxr"
        label="发现人"
        show-overflow-tooltip
        align="center"
        width="90"
      >
      </el-table-column>
      <el-table-column
        prop="troubleXqzgsj"
        label="限期整改时间"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="jindu"
        label="整改进度"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="troubleZgwcrq"
        label="整改完成日期"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
    </el-table>
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
        <span class="el-icon-d-arrow-left" @click="getDateMsg(1)"></span>
        <span
          class="el-icon-arrow-left"
          @click="getDateMsg(current - 1)"
        ></span>
        <span
          class="num"
          v-show="current - 2 > 0"
          @click="getDateMsg(current - 2)"
          >{{ current - 2 }}</span
        >
        <span
          class="num"
          v-show="current - 1 > 0"
          @click="getDateMsg(current - 1)"
          >{{ current - 1 }}</span
        >
        <span class="num active">{{ current }}</span>
        <span
          class="num"
          v-show="current + 1 <= pageTotal"
          @click="getDateMsg(current + 1)"
          >{{ current + 1 }}</span
        >
        <span
          class="num"
          v-show="current + 2 <= pageTotal"
          @click="getDateMsg(current + 2)"
          >{{ current + 2 }}</span
        >
        <span
          class="el-icon-arrow-right"
          @click="getDateMsg(current + 1)"
        ></span>
        <span
          class="el-icon-d-arrow-right"
          @click="getDateMsg(pageTotal)"
        ></span>
        <div class="pagesize">
          每页显示
          <el-select
            class="showselect"
            size="mini"
            @change="getDateMsg(1)"
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
    <div slot="footer">
      <el-button class="topbtn" size="mini" @click="hidVisible = false">
        取 消
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import dataAnalysisApi from "@/api/modules/report";
export default {
  data() {
    return {
      hidVisible: false,
      msgloading: false,
      total: 0, //消息总数
      current: 1, //当前页数
      pageTotal: 1, //总页数
      pagesize: [10, 20, 30, 50, 100], //每页显示列表
      pagesizeactive: 20, //当前每页显示
      troubleMc: "",
      troubleLy: "",
      troubleYhms: "",
      tableData: [],
      rows: {},
      troubleDJ: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    // 请求数据判断
    getDateMsg(page) {
      this.getTroubleSetList(page);
    },
    //地区报警处理率
    async getTroubleSetList(current = 1) {
      current = Number(current);
      this.msgloading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getTroubleSetList({
          comId: this.rows.comId,
          pageNum: current,
          pageSize: this.pagesizeactive,
          troubleDj: this.troubleDJ,
          troubleMc: this.troubleMc,
          troubleLy: this.troubleLy,
          troubleYhms: this.troubleYhms,
        })
      );
      this.msgloading = false;
      if (data) {
        this.tableData = data.rows.map((el) => {
          if (el.troubleDj == 1) {
            el.dengji = "一级";
          } else if (el.troubleDj == 2) {
            el.dengji = "二级";
          } else if (el.troubleDj == 3) {
            el.dengji = "三级";
          } else {
            el.dengji = "四级";
          }
          if (el.troubleZgjd == 1) {
            el.jindu = "待整改";
          } else if (el.troubleZgjd == 2) {
            el.jindu = "整改中";
          } else if (el.troubleZgjd == 3) {
            el.jindu = "整改完成";
          } else {
            el.jindu = "整改延期";
          }
          return el;
        });
        //分页处理
        this.current = current;
        this.total = data.total;
        this.pageTotal = Math.floor(data.total / this.pagesizeactive) + 1;
      } else {
        this.$message.error(err);
      }
    },
  },
};
</script>

<style lang="scss">
.learns {
  .el-dialog {
    background-image: url("~@/assets/img/bg_14.png");
    background-size: 100% 100%;
    background-color: transparent;
    .el-dialog__title {
      color: #ffffff;
      font-weight: bold;
    }
    .el-dialog__body {
      padding: 10px 20px;
    }
    .learn_head {
      display: flex;
      padding: 10px 0;
      span {
        font-size: 14px;
        font-weight: 600;
        display: flex;
        align-items: center;
        margin-right: 5px;
        color: #fff;
      }
      .el-input,
      .el-select,
      .el-date-picker {
        width: 15.2vmin !important;
      }
      .el-button {
        margin-left: 10px;
      }
    }
    .learnTable {
      width: 100%;
      background: #0f1f40;
      border: 0.0714rem solid #0a3774;
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
    .topbtn {
      border: solid 1px #0a3774;
      background-image: linear-gradient(0deg, #0080de 0%, #00c8f5 100%);
      color: #ffffff;
      font-weight: bold;
      width: 130px;
      cursor: default;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
