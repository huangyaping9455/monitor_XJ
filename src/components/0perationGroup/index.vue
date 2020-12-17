<style lang="scss" scoped>
.btns{
  margin-bottom: 1.0714rem;
}
.btn{
  width: 100px;
  border-right: 0;
  border-color: #2f4761;
  background: #324041;
  &:hover{
    background: rgb(49,87,128)
  }
  .icon{
    width: 12px;
    height: 12px;
    margin-right: 5px;
  }
}
</style>

<template>
  <div class="btns">
    <el-button v-if="option.jurisdiction.search" @click="btnclick('search')" size="mini" class="btn" type="primary" icon="el-icon-search">查询</el-button>
    <el-button v-if="option.jurisdiction.add" @click="btnclick('add')" size="mini" class="btn" type="primary" icon="el-icon-plus">新增</el-button>
    <el-button v-if="option.jurisdiction.refresh" @click="btnclick('refresh')" size="mini" class="btn" type="primary" icon="el-icon-refresh">刷新</el-button>
    <el-button v-if="option.jurisdiction.save" :loading="option.loading.save" @click="btnclick('save')" size="mini" class="btn" type="primary"><svg-icon v-show="!option.loading.save" class="icon" icon-class="save"/>保存</el-button>
    <el-button v-if="option.jurisdiction.ok" @click="btnclick('ok')" size="mini" class="btn" type="primary"><svg-icon class="icon" icon-class="save"/>确定</el-button>
    <el-button v-if="option.jurisdiction.close" @click="btnclick('close')" size="mini" class="btn" type="primary" icon="el-icon-close">关闭</el-button>
    <el-button v-if="option.jurisdiction.down" :loading="option.loading.down" @click="btnclick('down')" size="mini" class="btn" type="primary"><svg-icon v-show="!option.loading.down" class="icon" icon-class="down"/>下载</el-button>
  </div>
</template>

<script>
export default {
  props:{
    option:{
      type:Object,
      default:()=>{
        return {
          jurisdiction:{
            search:false,
            add:false,
            refresh:false,
            save:false,
            close:false,
            ok:false,
            down:false
          }
        }
      }
    }
  },
  mounted(){
  },
  methods:{
    btnclick(type){
      this.$emit('operationclick', type)
    }
  }
}
</script>
