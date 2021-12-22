<template>
  <div class="standard">
    <all-header></all-header>
    <div class="standard_b">
      <standard-book @on-view="onView" class="standard_left"></standard-book>
      <tag-tabs
        class="standard_right"
        v-model="tabSlot"
        :tabs="tabs"
        @on-click="onClick"
      >
        <!-- 数据 table -->
        <info-table
          class="com-tab"
          slot="table"
          :data-tab="dataTab"
          :type="type"
          :row-name="rowName"
          v-loading="loadingTab"
          :data="dataTab"
        >
        </info-table>
        <!-- 预览 -->
        <preview-doc
          class="preview-doc"
          slot="doc"
          :active="previewNode"
          :action="previewAction"
          @close-view="closeView"
        ></preview-doc>
      </tag-tabs>
    </div>
    <div class="sort">
      此次得分:
      <h2>{{ totalpoints }}</h2>
    </div>
    <div class="backs">
      <el-button type="primary" icon="el-icon-arrow-left" @click="rBacksafe"
        >返回上一页</el-button
      >
    </div>
  </div>
</template>

<script>
import allHeader from "@/components/Header/index";
import infoTable from "./table";
import { standardBook, previewDoc } from "@/components/index-book";
import tagTabs from "@/components/tag-tabs";
import standardApi from "@/api/modules/standard";
import { mapGetters } from "vuex";
import MockTreeTab2X from "./treeTab2X.json";
import Vue from "vue";
export default {
  components: { allHeader, infoTable, standardBook, previewDoc, tagTabs },
  data() {
    return {
      totalpoints: 0,
      dataTab: MockTreeTab2X.data,
      dataTab2: [],
      type: 3,
      rowName: "",
      // 是否预览，预览节点，预览的接口
      preview: false,
      previewNode: {},
      previewAction: () => {},
      // 当前 tab slot
      tabSlot: "table",
      loadingTab: true,
    };
  },
  computed: {
    ...mapGetters({
      zhuzzhiId: "government/fasongdanwei",
      xuanzhongchengshi: "government/xuanzhongchengshi",
    }),
    // tab 选项卡
    tabs() {
      let tabs = [
        { label: "标准化自评", slot: "table", show: !this.preview },
        { label: "正文", slot: "doc", show: this.preview, class: "preview-bg" },
      ];
      return tabs;
    },
  },
  created() {},
  mounted() {
    new Vue().$on("clickTree", this.clickTreeHadnle());
  },
  // beforeDestroy() {
  //   new Vue().$off("clickTree", this.clickTreeHadnle());
  // },
  // destroyed() {
  //   new Vue().$off("clickTree", this.clickTreeHadnle());
  // },
  methods: {
    treeFunc(data) {
      let temp = [];
      let tree = [];
      data.forEach((item, index) => {
        if (!temp.includes(item.parentName)) {
          let bojItem = {
            parentName: item.parentName,
            twoTree: item.erparentName,
            yunyingleixing: item.yunyingleixing,
            children: [],
          };
          temp.push(item.parentName);
          tree.push(bojItem);
        }
      });
      return tree;
    },

    async itemObject(object, originData) {
      originData.forEach((item) => {
        if (item.parentName === object.parentName) {
          object.children.push(item);
        }
      });
    },
    getTreeTab(data) {
      const tempData = this.treeFunc(data);
      tempData.forEach((item) => {
        this.itemObject(item, data);
      });
      return tempData;
    },
    async clickTreeHadnle() {
      let datas = this.dataTab.length == 1 ? this.dataTab : this.dataTab2;
      this.loadingTab = true;
      const { deptId, yunyingleixing, type } = datas;
      this.rowName = datas.name;
      const TreeType = Array.isArray(datas);
      const params = {
        Id: TreeType
          ? ""
          : datas._unfold == false && datas.parentId == 0
          ? ""
          : datas.id,
        fileProperty: TreeType
          ? 3
          : datas._unfold == false && datas.parentId == 0
          ? 3
          : datas.yunyingleixing,
        deptId: TreeType ? this.$route.query.id : datas.deptId,
      };
      //   this.dataTab = data.children;
      if (yunyingleixing < 0 || type === "文件") {
        this.loadingTab = false;
        return;
      }
      let [err, data] = await standardApi.awaitWrap(
        standardApi.getTreeTable(params)
      );
      if (data) {
        if (data.length > 0) {
          const treeTabData = this.getTreeTab(data);
          this.totalpoints = data[0].totalpoints;
          this.type = +data[0].yunyingleixing;
          this.dataTab = treeTabData;
          this.loadingTab = false;
        } else {
          this.$message.warning("未生成标准化文件");
          this.dataTab = "";
          this.loadingTab = false;
        }
      }
      this.tabSlot = "table";
      this.preview = false;
      this.tabs.forEach((item) => {
        item.show = false;
        if (item.slot === "table") {
          item.show = true;
        }
      });
      // console.log("---clickTree", data);
    },
    onClick(item) {
      // console.log("--onClick--", item);
    },
    // 预览文件---查看doc格式文件
    onView({ node, request }) {
      this.preview = true;
      this.previewNode = node;
      this.previewAction = request;
      this.tabSlot = "doc";
    },
    // 关闭预览
    closeView() {
      this.preview = false;
      this.tabSlot = "table";
      this.tabs.forEach((item) => {
        item.show = false;
        if (item.slot === "table") {
          item.show = true;
        }
      });
    },
    // 返回上一页
    rBacksafe() {
      this.$router.push({ path: "/safeStandard" });
      // this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.standard {
  height: 100vh;
  overflow: hidden;
  background: #0b122e;
  display: flex;
  flex-direction: column;
  .standard_b {
    display: flex;
    justify-content: space-between;
    padding: 2vmin;
    .standard_right {
      height: 82vh;
      box-sizing: border-box;
      .preview-doc {
        height: 100%;
        width: 100%;
      }
      .com-tab {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
    .standard_left {
      width: 68%;
      height: 88vh;
      box-sizing: border-box;
      background-image: url("~@/assets/img/bg_11.png");
      background-size: 100% 100%;
      margin-right: 5vmin;
      padding: 2vmin 3vmin;
    }
  }
  .sort {
    display: flex;
    margin: 1vh 2vh 1vh 2vh;
    align-items: center;
    justify-content: flex-end;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    position: absolute;
    right: 10px;
    bottom: 5px;
    h2 {
      margin-left: 10px;
      font-size: 26px;
      color: #01f8ff;
    }
  }
  .backs {
    position: absolute;
    bottom: 2vh;
    right: 49%;
    margin: 1vh 2vh 1vh 2vh;
  }
}
</style>
