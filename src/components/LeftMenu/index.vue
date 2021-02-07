<style lang="scss" scoped>
.leftMenu {
  width: 190px;
  height: 100vh;
  background-image: url("~@/assets/img/bg_12.png");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  transition: transform 0.3s;
  &.noshow {
    transform: translateX(-100%);
  }
  &.show {
    transform: translateX(0%);
  }
  .leftMenu-menu {
    height: 69%;
    width: 160px;
    overflow: hidden;
    border-right: 0px;
  }
  .menu-item {
    display: flex;
    align-items: center;
    .icon {
      width: 18px;
      height: 18px;
      margin-right: 5px;
      fill: #01f8ff;
    }
  }
  .movebtn {
    position: absolute;
    cursor: pointer;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding-left: 1px;
    left: 100%;
    width: 39px;
    height: 75px;
    overflow: hidden;
    /* background-image: url('~@/assets/img/bg_13.png');
    background-size: 100% 100%; */
    .movebtn-info {
      position: absolute;
      z-index: -1;
      border-radius: 50%;
      left: -10%;
      width: 14px;
      height: 14px;
      background: rgba(10, 51, 109, 1);
      animation: movea 2.7s ease-out infinite;
    }
    .two {
      animation-delay: 0.9s;
    }
    .three {
      animation-delay: 1.8s;
    }
  }
}
@keyframes movea {
  0% {
    transform: scale(1);
    background: rgba(10, 51, 109, 1);
  }
  90% {
    transform: scale(5.5);
    background: rgba(10, 51, 109, 0.5);
  }
  100% {
    transform: scale(5.5);
    background: rgba(10, 51, 109, 0);
  }
}
</style>
<style lang="scss">
.leftMenu {
  .el-submenu__title,
  .el-menu-item {
    background: transparent !important;
  }
  .el-menu-item,
  .el-submenu__title {
    padding: 0 0 0 10px !important;
  }
  .el-submenu__icon-arrow {
    right: 10px;
    color: #01f8ff;
  }
  .el-submenu .el-menu-item {
    width: 100%;
    padding: 0 0 0 40px !important;
  }
  .el-menu-item.is-active .menu-item .icon {
    fill: #ffffff;
  }
}
</style>

<template>
  <aside class="leftMenu" :class="ismenuShow ? 'show' : 'noshow'">
    <el-menu
      :default-active="urlName"
      class="leftMenu-menu"
      active-text-color="#ffffff"
      router
      background-color="transparent"
      text-color="#01f8ff"
      :unique-opened="true"
    >
      <el-menu-item index="home" @click="openMenu">
        <div class="menu-item">
          <svg-icon class="icon" icon-class="home" />
          <span slot="title">首 页</span>
        </div>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="shuju" />
            <span>动态监管分析</span>
          </div>
        </template>
        <el-menu-item index="dataAnalysis" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="shuju" />
            <span>数据分析</span>
          </div>
        </el-menu-item>
        <el-menu-item index="treatmentRate" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="chulilv" />
            <span>处理率统计</span>
          </div>
        </el-menu-item>
        <el-menu-item index="vehicle" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="cheliang" />
            <span>车辆统计</span>
          </div>
        </el-menu-item>
        <el-menu-item index="QYvehicle" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="zhengqi" />
            <span>企业统计</span>
          </div>
        </el-menu-item>
        <el-menu-item index="DayStatistics" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="zhenggai" />
            <span>车辆日运行统计</span>
          </div>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="chulilv" />
            <span>报警排名</span>
          </div>
        </template>
        <el-menu-item index="ZFDQ" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="zhenggai" />
            <span>地区报警排名</span>
          </div>
        </el-menu-item>
        <el-menu-item index="enterprise" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="shuju" />
            <span>企业报警排名</span>
          </div>
        </el-menu-item>
        <el-menu-item index="VehicleRank" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="cheliang" />
            <span>车辆报警排名</span>
          </div>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="zhengqi" />
            <span>政企互通</span>
          </div>
        </template>
        <el-menu-item index="notice" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="tongzhi" />
            <span>通知公告</span>
          </div>
        </el-menu-item>
        <el-menu-item index="SafetyInspection" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="anquan" />
            <span>安全查岗</span>
          </div>
        </el-menu-item>
        <el-menu-item index="documentFile" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="wenjian" />
            <span>文件下发</span>
          </div>
        </el-menu-item>
        <el-menu-item index="issueRectification" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="zhenggai" />
            <span>下发整改</span>
          </div>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="wenjian" />
            <span>安全报告</span>
          </div>
        </template>
        <el-menu-item index="weekReport" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="wenjian" />
            <span>周报</span>
          </div>
        </el-menu-item>
        <el-menu-item index="monthReport" @click="openMenu">
          <div class="menu-item">
            <svg-icon class="icon" icon-class="wenjian" />
            <span>月报</span>
          </div>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div
      class="movebtn"
      :class="ismenuShow ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'"
      @click="changeleftMenu"
    >
      <span class="movebtn-info"></span>
      <span class="movebtn-info two"></span>
      <span class="movebtn-info three"></span>
    </div>
  </aside>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      ismenuShow: false,
      urlName: "",
    };
  },
  watch: {
    $route() {
      let urlName = this.$route.path;
      urlName = urlName.substring(1, urlName.length);
      this.urlName = urlName;
    },
  },
  methods: {
    changeleftMenu() {
      this.ismenuShow = !this.ismenuShow;
    },
    // 菜单点击清除存在xuex中的树节点id
    openMenu() {
      this.SET_FASONGDANWEI(this.$store.state.userinfo.deptId);
    },
    ...mapMutations({
      SET_FASONGDANWEI: "government/SET_FASONGDANWEI",
    }),
  },
};
</script>
