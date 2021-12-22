<template>
  <div class="hide">
    <div class="hide-top">
      <div class="car-item">
        <img src="~@/assets/img/cao.png" alt="" />
        <span>1级隐患未完成整改</span>
        <span>{{ listCount.num1 }}</span>
      </div>
      <div class="car-item">
        <img src="~@/assets/img/cao.png" alt="" />
        <span>2级隐患未完成整改</span>
        <span>{{ listCount.num2 }}</span>
      </div>
      <div class="car-item">
        <img src="~@/assets/img/cao.png" alt="" />
        <span>3级隐患未完成整改</span>
        <span>{{ listCount.num3 }}</span>
      </div>
      <div class="car-item">
        <img src="~@/assets/img/cao.png" alt="" />
        <span>4级隐患未完成整改</span>
        <span>{{ listCount.num4 }}</span>
      </div>
      <div class="car-item">
        <img src="~@/assets/img/cao.png" alt="" />
        <span>风险因子</span>
        <span>{{ listCount.num5 }}</span>
      </div>
    </div>
    <el-table
      class="hideTable"
      :data="tableData"
      border
      v-loading="msgloading"
      element-loading-background="rgba(0, 0, 0, 0.4)"
      :height="tableListH"
    >
      <el-table-column
        prop="deptName"
        label="公司名称"
        width="210"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column label="一级隐患数" show-overflow-tooltip align="center">
        <template slot-scope="{ row }">
          <span v-if="row.num1 > 0" class="spancolor" @click="hidView(row, 1)">
            {{ row.num1 }}
          </span>
          <span v-else>{{ row.num1 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="二级隐患数" show-overflow-tooltip align="center">
        <template slot-scope="{ row }">
          <span v-if="row.num2 > 0" class="spancolor" @click="hidView(row, 2)">
            {{ row.num2 }}
          </span>
          <span v-else>{{ row.num2 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="三级隐患数" show-overflow-tooltip align="center">
        <template slot-scope="{ row }">
          <span v-if="row.num3 > 0" class="spancolor" @click="hidView(row, 3)">
            {{ row.num3 }}
          </span>
          <span v-else>{{ row.num3 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="四级隐患数" show-overflow-tooltip align="center">
        <template slot-scope="{ row }">
          <span v-if="row.num4 > 0" class="spancolor" @click="hidView(row, 4)">
            {{ row.num4 }}
          </span>
          <span v-else>{{ row.num4 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="总隐患数" show-overflow-tooltip align="center">
        <template slot-scope="{ row }">
          <span
            v-if="row.totlenums > 0"
            class="spancolor"
            @click="hidView(row, '')"
          >
            {{ row.totlenums }}
          </span>
          <span v-else>{{ row.totlenums }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="dorate"
        label="整改率"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="num5"
        label="风险因子"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column label="操作" align="center" width="110">
        <template slot-scope="{ row }">
          <el-button size="mini" type="primary" @click="sendZG(row)">
            下发整改
          </el-button>
        </template>
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
        <span class="el-icon-d-arrow-left" @click="getDate(1)"></span>
        <span class="el-icon-arrow-left" @click="getDate(current - 1)"></span>
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
        <span class="el-icon-arrow-right" @click="getDate(current + 1)"></span>
        <span class="el-icon-d-arrow-right" @click="getDate(pageTotal)"></span>
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
    <hideview ref="hidev"></hideview>
  </div>
</template>

<script>
import dataAnalysisApi from "@/api/modules/report";
import { mapGetters } from "vuex";
import hideview from "./view";
export default {
  components: {
    hideview,
  },
  data() {
    return {
      msgloading: false,
      total: 0, //消息总数
      current: 1, //当前页数
      pageTotal: 1, //总页数
      pagesize: [10, 20, 30, 50, 100], //每页显示列表
      pagesizeactive: 20, //当前每页显示
      tableListH: "calc(100vh - 20.8828rem)",
      tableData: [],
      listCount: [],
      zhengfuId: this.$store.state.userinfo.deptId,
    };
  },
  created() {
    this.getTroublelistCount();
    this.getTroubleList();
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
    // 请求数据判断
    getDate(page) {
      this.getTroubleList(page);
    },
    //地区报警处理率
    async getTroubleList(current = 1) {
      current = Number(current);
      this.msgloading = true;
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getTroubleList({
          current: current,
          size: this.pagesizeactive,
          yunguanid: this.zhengfuId,
        })
      );
      this.msgloading = false;
      if (data) {
        this.tableData = data.rows;
        //分页处理
        this.current = current;
        this.total = data.total;
        this.pageTotal = Math.floor(data.total / this.pagesizeactive) + 1;
      } else {
        // this.$message.error(err);
      }
    },
    //获取整改数
    async getTroublelistCount() {
      let [err, data] = await dataAnalysisApi.awaitWrap(
        dataAnalysisApi.getTroublelistCount({
          yunguanid: this.zhengfuId,
        })
      );
      if (data) {
        this.listCount = data;
      } else {
        this.$message.error(err);
      }
    },
    // 隐患明细
    hidView(row, index) {
      this.$refs.hidev.troubleMc = "";
      this.$refs.hidev.troubleLy = "";
      this.$refs.hidev.troubleYhms = "";
      this.$refs.hidev.rows = row;
      this.$refs.hidev.troubleDJ = index;
      this.$refs.hidev.getTroubleSetList();
      this.$refs.hidev.hidVisible = true;
    },
    // 下发整改
    sendZG(row) {
      this.$router.push({
        path: "/addIssueRectification",
        query: {
          type: "add",
          returnUrl: "/hidDanger",
          comId: row.comId,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.hide {
  .hide-top {
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    .car-item {
      width: 19%;
      height: 10.7143rem;
      border-radius: 0.7143rem;
      box-sizing: border-box;
      padding: 2.4286rem;
      color: #ffffff;
      font-size: 1.1429rem;
      background-size: 100% 100%;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      span:last-of-type {
        display: block;
        font-size: 2.8571rem;
        font-weight: bold;
      }
      &:nth-of-type(1) {
        background: linear-gradient(
          270deg,
          rgb(197, 39, 39) 0%,
          rgb(254, 126, 111) 100%
        );
        cursor: pointer;
      }
      &:nth-of-type(2) {
        background: linear-gradient(
          270deg,
          rgb(225, 98, 7) 0%,
          rgb(255, 156, 40) 100%
        );
        cursor: pointer;
      }
      &:nth-of-type(3) {
        background: linear-gradient(
          270deg,
          rgb(249, 165, 37) 0%,
          rgb(255, 207, 51) 100%
        );
        cursor: pointer;
      }
      &:nth-of-type(4) {
        background: linear-gradient(
          270deg,
          rgb(39, 78, 214) 0%,
          rgb(85, 162, 255) 100%
        );
        cursor: pointer;
      }
      &:nth-of-type(5) {
        background: linear-gradient(
          270deg,
          rgb(255, 85, 85) 0%,
          rgb(247, 167, 198) 100%
        );
        cursor: pointer;
      }
      img {
        width: 40%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
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
.hideTable {
  width: 100%;
  background: #0f1f40;
  border: 0.0714rem solid #0a3774;
  margin-top: 15px;
  .spancolor {
    color: #00c8f5;
    cursor: pointer;
    text-decoration: underline;
  }
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
</style>
