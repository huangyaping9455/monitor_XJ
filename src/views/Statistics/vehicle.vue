<style lang="scss" scoped>
.main {
  background: #0b122e;
  padding: 1.4286rem;
  box-sizing: border-box;
  height: 100%;
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
  .search {
    color: #ffffff;
    .sbtn {
      background: #315780;
      color: #d3d4d6;
    }
    .search-input {
      width: 10.7143rem;
    }
  }
  .mainTable {
    background: transparent;
    border: 0.0714rem solid #58626e;
    .pointbtn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      .icon {
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
    margin-top: 1.0714rem;
    .page-l {
      display: flex;
      align-items: center;
      span {
        margin-right: 0.7143rem;
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
      .jump {
        width: 90px;
        margin: 0 15px;
      }
      .jumpbtn {
        padding: 9px 8px 7px;
        border-color: #315780;
        background: #315780;
        color: #d3d4d6;
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
      .pagesize {
        width: 14.2857rem;
      }
      .showselect {
        width: 6.4286rem;
      }
    }
  }
}
</style>
<style lang="scss">
.search {
  .el-form-item__label {
    color: #d3d4d6;
    font-size: 1rem;
  }
  .el-form-item--mini.el-form-item {
    margin-bottom: 0.57rem;
    height: 2.1rem;
  }
  .el-checkbox {
    margin-right: 2.1429rem;
  }
  .el-checkbox,
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #ffffff;
  }
  .el-checkbox__label {
    font-size: 1rem;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #009688;
    border-color: #009688;
  }
}
.mainTable {
  &.el-table--enable-row-hover .el-table__body tr:hover > td {
    background: #ffffff38;
  }
  tr {
    background: #1e2e3e;
  }
  td {
    border-right: 1px solid #58626e;
    border-bottom: 1px solid #58626e;
    color: #ffffff;
  }
  th.is-leaf {
    border-bottom: 1px solid #58626e;
  }
  th {
    background: #1e2e3e;
    border-right: 1px solid #58626e;
    color: #ffffff;
  }
  &::before {
    background-color: #58626e;
  }
  &::after {
    background-color: #58626e;
  }
  .el-table__body-wrapper {
    height: calc(100% - 4.5rem);
  }
}
.jump {
  display: flex;
  align-items: center;
  .el-input-group__append {
    border: none;
    background: #315780;
  }
}
</style>

<template>
  <div class="main">
    <!-- 操作按钮 -->
    <!-- <operation-group :option="operationOption" @operationclick="operationclick"></operation-group> -->
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
        @click="getList"
        class="btn"
      >
        <svg-icon class="icon" v-show="!downloading" icon-class="down" />下载
      </el-button>
    </div>
    <!-- 查询 -->
    <el-form
      v-show="searchshow"
      :inline="true"
      size="mini"
      :model="from"
      class="search"
    >
      <el-form-item label="所属企业:">
        <el-input
          v-model="from.deptname"
          class="search-input"
          placeholder="请输入所属企业"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="车辆牌照:">
        <el-input
          v-model="from.cph"
          class="search-input"
          placeholder="请输入车辆牌照"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="在线状态:">
        <el-select
          v-model="from.zaixian"
          placeholder="请选择"
          class="search-input"
          @change="getzaixian"
        >
          <el-option label="全部" :value="1"></el-option>
          <el-option label="上线" :value="2"></el-option>
          <el-option label="未上线" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车辆状态:">
        <el-select
          v-model="from.zhuangtai"
          placeholder="请选择"
          class="search-input"
        >
          <el-option label="全部" :value="1"></el-option>
          <el-option label="监控车辆" :value="2"></el-option>
          <el-option label="停用" :value="3"></el-option>
          <el-option label="在用" :value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="sbtn"
          icon="el-icon-search"
          @click="getVehicleList(1)"
        ></el-button>
      </el-form-item>
    </el-form>
    <!-- main -->
    <el-table
      v-loading="loading"
      element-loading-background="rgba(0, 0, 0, 0.4)"
      size="mini"
      class="mainTable"
      :data="vehicleList"
      :height="mainTableH"
      border
    >
      <el-table-column prop="areaName" label="所属地区"></el-table-column>
      <el-table-column
        prop="yunguanmingcheng"
        label="所属运管"
      ></el-table-column>
      <el-table-column
        prop="DeptName"
        label="所属企业"
        width="270"
      ></el-table-column>
      <el-table-column prop="vehicleNo" label="车辆牌照"></el-table-column>
      <el-table-column prop="vehicleColor" label="车牌颜色"></el-table-column>
      <el-table-column prop="zhuangtai" label="车辆状态"></el-table-column>
      <el-table-column prop="zaixian" label="在线状态"></el-table-column>
      <el-table-column prop="shiyongxingzhi" label="使用性质"></el-table-column>
    </el-table>
    <!-- page -->
    <div class="page">
      <div class="page-l">
        <span>总共 {{ total }} 条消息</span>
        <span>当前第 {{ current }} 页</span>
        <span>总 {{ pageTotal }} 页</span>
      </div>
      <div class="page-r">
        <span class="el-icon-d-arrow-left" @click="getVehicleList(1)"></span>
        <span
          class="el-icon-arrow-left"
          @click="getVehicleList(current - 1)"
        ></span>
        <span
          class="num"
          v-show="current - 2 > 0"
          @click="getVehicleList(current - 2)"
          >{{ current - 2 }}</span
        >
        <span
          class="num"
          v-show="current - 1 > 0"
          @click="getVehicleList(current - 1)"
          >{{ current - 1 }}</span
        >
        <span class="num active">{{ current }}</span>
        <span
          class="num"
          v-show="current + 1 <= pageTotal"
          @click="getVehicleList(current + 1)"
          >{{ current + 1 }}</span
        >
        <span
          class="num"
          v-show="current + 2 <= pageTotal"
          @click="getVehicleList(current + 2)"
          >{{ current + 2 }}</span
        >
        <span
          class="el-icon-arrow-right"
          @click="getVehicleList(current + 1)"
        ></span>
        <span
          class="el-icon-d-arrow-right"
          @click="getVehicleList(pageTotal)"
        ></span>
        <el-input class="jump" v-model="jumpNum" size="mini">
          <el-button
            slot="append"
            @click="getVehicleList(jumpNum)"
            class="jumpbtn"
            >跳转</el-button
          >
        </el-input>
        <div class="pagesize">
          每页显示
          <el-select
            class="showselect"
            size="mini"
            @change="getVehicleList(1)"
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
</template>

<script>
import governmentApi from "@/api/modules/government";
import { mapGetters } from "vuex";
import { export_json_to_excel } from "@/config/Export2Excel";
export default {
  data() {
    return {
      loading: false,
      searchshow: false, //是否展开查询
      mainTableH: "calc(100% - 6.0714rem)", //列表高度
      total: 0, //消息总数
      current: 1, //当前页数
      pageTotal: 1, //总页数
      pagesize: [10, 20, 30, 50, 100], //每页显示列表
      pagesizeactive: 20, //当前每页显示
      jumpNum: 1, //跳转页面
      vehicleList: [],
      downloading: false,
      from: {
        zaixian: 1,
        zhuangtai: 1,
        cph: "",
        name: "",
        deptname: "",
      },
      options: [],
    };
  },
  mounted() {
    const { query } = this.$route;
    if (query) {
      this.from = {
        ...this.from,
        ...query,
      };
    }
    //获取统计车辆数据
    this.getVehicleList();
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
        this.getVehicleList();
      }
    },
  },
  methods: {
    async getVehicleList(current = 1) {
      current = Number(current);
      this.loading = true;
      let [err, data] = await governmentApi.awaitWrap(
        governmentApi.getVehicleList({
          dept: this.zhuzzhiId,
          page: current,
          cph: this.from.cph,
          deptname: this.from.deptname,
          pagesize: this.pagesizeactive,
          zaixian: this.$route.query.zaixian == "上线" ? 2 : this.from.zaixian,
          zhuangtai: this.from.zhuangtai,
        })
      );
      this.loading = false;
      if (data) {
        this.vehicleList = data.data
          ? data.data.map((el) => {
              return {
                ...el,
                zhuangtai: ["", "全部", "监控车辆", "停用", "在用"][
                  el.zhuangtai
                ],
                zaixian: ["", "全部", "上线", "未上线"][el.zaixian],
              };
            })
          : [];
        //分页处理
        this.current = current;
        this.total = data.total;
        this.pageTotal = data.pageTotal;
      } else {
        this.$message.error(err);
      }
    },
    // 在线状态
    getzaixian(data) {
      console.log(data);
      this.from.zaixian = data;
    },
    // 获取所有数据
    async getList() {
      this.downloading = true;
      let [err, data] = await governmentApi.awaitWrap(
        governmentApi.getVehicleList({
          dept: this.zhuzzhiId,
          page: 0,
          pagesize: 0,
          cph: this.from.cph,
          deptname: this.from.deptname,
          zaixian: this.from.zaixian,
          zhuangtai: this.from.zhuangtai,
        })
      );
      this.downloading = false;
      if (data) {
        data = data.data.map((el) => {
          return {
            ...el,
            zhuangtai: ["", "全部", "监控车辆", "停用", "在用"][el.zhuangtai],
            zaixian: ["", "全部", "上线", "未上线"][el.zaixian],
          };
        });
        this.export2Excel(data);
      } else {
        this.$message.error(err);
      }
    },
    //点击操作按钮
    operationclick(type) {
      switch (type) {
        case "search":
          this.searchshow
            ? (this.mainTableH = "calc(100% - 6.0714rem)")
            : (this.mainTableH = "calc(100% - 8.7857rem)");
          this.searchshow = !this.searchshow;
          break;
        case "down":
          this.getList();
          break;
        default:
          break;
      }
    },
    changeSearch() {
      this.searchshow
        ? (this.mainTableH = "calc(100% - 6.0714rem)")
        : (this.mainTableH = "calc(100% - 8.7857rem)");
      this.searchshow = !this.searchshow;
    },
    //处理下载数据
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) => filterVal.map((j) => v[j]));
    },
    export2Excel(list) {
      require.ensure([], () => {
        const tHeader = [
          "所属地区",
          "所属运管",
          "所属企业",
          "车辆牌照",
          "车牌颜色",
          "车辆状态",
          "在线状态",
          "使用性质",
        ];
        const filterVal = [
          "areaName",
          "yunguanmingcheng",
          "DeptName",
          "vehicleNo",
          "vehicleColor",
          "zhuangtai",
          "zaixian",
          "shiyongxingzhi",
        ];
        // const list = this.goodsItems;
        const data = this.formatJson(filterVal, list);
        // export_json_to_excel(tHeader, data, '车辆统计');
        export_json_to_excel({ header: tHeader, data, filename: "车辆统计" });
      });
    },
  },
};
</script>
