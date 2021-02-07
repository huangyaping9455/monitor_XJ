<style lang="scss" scoped>
.enterprise {
  height: 100vh;
  background: #0b122e;
  .home-header {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("~@/assets/img/bg_6.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    position: relative;
    .title {
      font-size: 2.5714rem;
      color: #01f8ff;
      text-align: center;
      font-weight: normal;
    }
    .time {
      top: 8%;
      right: 2.8571rem;
      position: absolute;
      color: #ffffff;
    }
  }
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
      height: calc(100vh - 18rem);
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
    margin-top: 1.0714rem;
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
    margin-bottom: 1.1429rem;
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
    <div class="home-header">
      <h1 class="title">物联网平台数据统计</h1>
      <p class="time">2019-10-30 13:12:35 星期三</p>
    </div>
    <div class="main">
      <statistics-aside></statistics-aside>
      <div class="main-r">
        <!-- 操作按钮 -->
        <div class="btns">
          <el-button size="mini" class="btn" icon="el-icon-search"
            >查询</el-button
          >
          <el-button size="mini" class="btn"
            ><svg-icon class="icon" icon-class="down" />下载</el-button
          >
        </div>
        <!-- 查询 -->
        <el-form :inline="true" size="mini" :model="formInline" class="search">
          <el-form-item label="所属企业">
            <el-input v-model="formInline.company"></el-input>
          </el-form-item>
          <el-form-item label="时间">
            <el-col :span="11" class="timetype">
              <el-form-item>
                <el-date-picker
                  style="width: 100%;"
                  type="date"
                  placeholder="选择日期"
                  v-model="formInline.date"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11" class="timetype">
              <el-form-item>
                <el-date-picker
                  style="width: 100%;"
                  type="date"
                  placeholder="选择日期"
                  v-model="formInline.date1"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="sbtn">搜索</el-button>
          </el-form-item>
        </el-form>
        <!-- mainTable -->
        <el-table
          size="mini"
          class="mainTable"
          border
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column prop="date" label="排名" width="100" align="center">
          </el-table-column>
          <el-table-column label="地区名称" align="center">
            <template slot-scope="{ row }">
              <span class="businessName">{{ row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="车辆总数" align="center">
          </el-table-column>
          <el-table-column label="北斗设备报警（11850）" align="center">
            <el-table-column prop="date" label="超速" align="center">
            </el-table-column>
            <el-table-column prop="date" label="疲劳驾驶" align="center">
            </el-table-column>
            <el-table-column prop="date" label="夜间行驶" align="center">
            </el-table-column>
            <el-table-column prop="date" label="异常车辆" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column label="DMS设备报警（12339）" align="center">
            <el-table-column prop="date" label="接打电话" align="center">
            </el-table-column>
            <el-table-column prop="date" label="抽烟" align="center">
            </el-table-column>
            <el-table-column prop="date" label="分神驾驶" align="center">
            </el-table-column>
            <el-table-column prop="date" label="生理疲劳" align="center">
            </el-table-column>
            <el-table-column prop="date" label="驾驶员异常" align="center">
            </el-table-column>
            <el-table-column prop="date" label="未系安全带" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column label="ADAS设备报警（5532）" align="center">
            <el-table-column prop="date" label="向前碰撞" align="center">
            </el-table-column>
            <el-table-column prop="date" label="车道偏离" align="center">
            </el-table-column>
            <el-table-column prop="date" label="车距过近" align="center">
            </el-table-column>
            <el-table-column prop="date" label="设备" align="center">
            </el-table-column>
          </el-table-column>
          <el-table-column prop="address" label="单车报警比" align="center">
          </el-table-column>
          <el-table-column prop="address" label="报警总数" align="center">
          </el-table-column>
        </el-table>
        <!-- page -->
        <div class="page">
          <div class="page-l">
            <span>总共 <strong>0</strong> 条消息</span>
            <span>当前第 <strong>0</strong> 页</span>
            <span>总 <strong>0</strong> 页</span>
          </div>
          <div class="page-r">
            <span class="el-icon-d-arrow-left"></span>
            <span class="el-icon-arrow-left"></span>
            <span class="num active">1</span>
            <span class="num">2</span>
            <span class="el-icon-arrow-right"></span>
            <span class="el-icon-d-arrow-right"></span>
            <div class="pagesize">
              每页显示
              <el-select class="showselect" size="mini" v-model="value">
                <el-option :label="100" :value="100"> </el-option>
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
import statisticsAside from "@/components/StatisticsAside/index";
export default {
  components: {
    "statistics-aside": statisticsAside,
  },
  data() {
    return {
      formInline: {
        date: "",
        date1: "",
        name: "",
      },
      tableData: [{ name: "123" }],
    };
  },
};
</script>
