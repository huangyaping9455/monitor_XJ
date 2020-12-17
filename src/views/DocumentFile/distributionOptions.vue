<style lang="scss" scoped>
.main {
  background: #0b122e;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .search {
    color: #ffffff;
    .sbtn {
      background: #315780;
      color: #d3d4d6;
    }
  }
  .mainTable{
    background: transparent;
    border: 1px solid #58626e;
    height: calc(100vh - 180px);
  }
  .page{
    display: flex;
    color: #d3d4d6;
    padding: 0 10px;
    font-size: 12px;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    .page-l{
      display: flex;
      align-items: center;
      span{
        margin-right: 10px;
      }
    }
    .page-r{
      display: flex;
      align-items: center;
      span{
        cursor: pointer;
        padding: 0 2px;
        font-size: 18px;
        margin: 0 2px;
      }
      .jump{
        width: 90px;
        margin: 0 15px;
      }
      .jumpbtn{
        padding: 9px 8px 7px;
        border-color: #315780;
        background: #315780;
        color: #d3d4d6;
      }
      .showselect{
        width: 90px;
      }
    }
  }
}
</style>
<style lang="scss">
.search {
  .el-form-item__label {
    color: #d3d4d6;
  }
}
.mainTable{
  &.el-table--enable-row-hover .el-table__body tr:hover>td{
    background: #ffffff38;
  }
  tr{
    background: #1e2e3e;
  }
  td{
    border-right: 1px solid #58626e;
    border-bottom: 1px solid #58626e;
    color:#ffffff;
  }
  th.is-leaf{
    border-bottom: 1px solid #58626e;
  }
  th{
    background: #1e2e3e;
    border-right: 1px solid #58626e;
    color:#ffffff;
  }
  &::before{
    background-color: #58626e;
  }
  &::after{
    background-color: #58626e;
  }
  .el-table__body-wrapper{
    height: calc(100% - 63px);
  }
}
.jump{
  .el-input__inner{
    padding:0 10px;
  }
  .el-input-group__append{
    border:none;
  }
}
</style>

<template>
  <div class="main">
    <!-- 操作按钮 -->
    <operation-group :option="operationOption"></operation-group>
    <!-- main -->
    <el-table class="mainTable" border :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="150" align="center"></el-table-column>
      <el-table-column prop="name" label="单位名称"> </el-table-column>
      <el-table-column prop="date" label="风险因值"> </el-table-column>
    </el-table>
    <!-- page -->
    <div class="page">
      <div class="page-l">
        <span>总共 0 条消息</span>
        <span>当前第 1 页</span>
        <span>总 1 页</span>
      </div>
      <div class="page-r">
        <span class="el-icon-d-arrow-left"></span>
        <span class="el-icon-arrow-left"></span>
        <span class="el-icon-arrow-right"></span>
        <span class="el-icon-d-arrow-right"></span>
        <el-input class="jump" v-model="input3" size="mini">
          <el-button slot="append" size="mini" class="jumpbtn">跳转</el-button>
        </el-input>
        <div>
          每页显示
          <el-select class="showselect" size="mini" v-model="value">
            <el-option
              :label="100"
              :value="100">
            </el-option>
          </el-select>
          条信息
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import operationGroup from "@/components/0perationGroup/index";
export default {
  components: {
    "operation-group": operationGroup,
  },
  data() {
    return {
      operationOption:{
        jurisdiction:{
          search:true,
          ok:true
        }
      },
      formInline: {
        company: "",
        name: "",
      },
      tableData:[{name:'123',data:123},{name:'123',data:123}]
    };
  },
  methods:{
  }
};
</script>