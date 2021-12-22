<template>
  <div class="index-book com-index-book" :key="treeIndex">
    <div class="book-head book-head2x">
      <div class="title">安全生产标准化考评目录</div>
    </div>
    <div class="book-container">
      <div v-if="treeData.length > 0">
        <tree-form
          :state="form"
          :active="nodeData"
          :parentNodes="parentNodes"
          @load="loadNode"
        ></tree-form>
        <tree-menu
          :state="menuState"
          :menu="treeMenu"
          @on-click="treeMenuClick"
        ></tree-menu>
      </div>
      <scroll>
        <div class="tree" v-loading="loading">
          <p v-show="!loading && treeData.length == 0">暂无数据</p>
          <tree-item
            v-for="(item, index) in treeData"
            :key="index.name"
            :data="item"
            :active="nodeData"
            :expandAll="expandAll"
            :order="index + 1"
            @on-click="treeItemClick"
            @contextmenu="contextmenu"
            @loadNode="loadNode"
            @parentNodes="getParentNodes"
          ></tree-item>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import action from "../actions/book";
import treeMenu from "../tree-menu";
import treeItem from "../tree-item2X";
import treeHead from "./tree-head";
// import {
//   getTree,
//   addSubtemplateDir,
//   setFileNature,
//   setFilebelong,
//   modifyFileNumber,
//   remove,
//   download,
//   moveFile,
//   rename,
//   imgPreview,
//   setsafetyBind,
//   cancelSafetyBind,
// } from "@/api/modules/standard";
import standardApi from "@/api/modules/standard";

import { mapGetters } from "vuex";
import TreeForm from "../tree-form.vue";

treeItem.components.treeHead = treeHead;

export default {
  name: "standard-book",
  components: {
    treeItem,
    treeMenu,
    TreeForm,
  },
  mixins: [action],
  props: {
    target: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      treeIndex: 0,
    };
  },
  computed: {
    ...mapGetters({
      zhuzzhiId: "government/fasongdanwei",
    }),
    treeMenu() {
      const menu = [
        {
          label: "查看文件",
          request: this.getDoc,
          show: !this.isFolder,
          action: this.viewFile,
          icon: "icon-9",
        },
        // {
        //   label: '下载文件',
        //   show: !this.isFolder && this.nodeData.docSource != 1,
        //   request: download,
        //   action: this.downloadFile
        // },
        // {
        //   label: '替換文件',
        //   form: 'upload',
        //   show: !this.isFolder && this.nodeData.docSource != 1,
        //   request: '/api/blade-doc/doc/biaozhunhuamuban/replaceSubtemplateFile',
        //   param: 'replace'
        // },
        // {
        //   label: "新增文件",
        //   form: "upload",
        //   show: this.isFolder && this.nodeData.docSource != 1,
        //   request: "/api/blade-doc/doc/biaozhunhuamuban/addSubtemplateFile",
        //   param: "add",
        //   icon: "icon-1",
        // },
        // {
        //   label: "刪除文件",
        //   show:
        //     (!this.isFolder && this.nodeData.docSource != 1) ||
        //     this.nodeData.fileNum == 0,
        //   request: remove,
        //   action: this.removeFile,
        //   icon: "icon-10",
        // },
        // {
        //   label: "新增文件夾",
        //   show: this.isFolder && this.nodeData.docSource != 1,
        //   form: "addFolder",
        //   request: addSubtemplateDir,
        //   icon: "icon-2",
        // },
        // {
        //   label: '文件重命名',
        //   show: !this.isFolder && this.nodeData.docSource != 1,
        //   form: 'rename',
        //   request: rename
        // },
        // {
        //   label: "设置性质",
        //   show: this.nodeData.docSource != 1,
        //   form: "setFileNature",
        //   request: setFileNature,
        //   icon: "icon-3",
        // },

        // {
        //   label: "设置所属人",
        //   show: this.nodeData.docSource != 1,
        //   form: "setFilebelong",
        //   request: setFilebelong,
        //   icon: "icon-6",
        // },
        // {
        //   label: '修改文件编号',
        //   show: !this.isFolder && this.nodeData.docSource != 1,
        //   form: 'modifyFileNumber',
        //   request: modifyFileNumber
        // },
        // {
        //   label: "上移文件",
        //   show: this.nodeData.docSource != 1,
        //   request: moveFile,
        //   action: this.moveFile,
        //   param: "up",
        //   icon: "icon-4",
        // },
        // {
        //   label: "下移文件",
        //   show: this.nodeData.docSource != 1,
        //   request: moveFile,
        //   action: this.moveFile,
        //   param: "down",
        //   icon: "icon-5",
        // },
        // {
        //   label: "文档绑定",
        //   show: this.isFolder && this.nodeData.docSource != 1,
        //   form: "setsafetyBind",
        //   request: setsafetyBind,
        //   icon: "icon-7",
        // },
        // {
        //   label: "文档解绑",
        //   show: !this.isFolder && this.nodeData.docSource == 1,
        //   request: cancelSafetyBind,
        //   action: this.cancelSafetyBind,
        //   icon: "icon-8",
        // },
      ];
      return menu.filter((item) => item.show);
    },
  },
  mounted() {
    this.initBook();
  },
  beforeCreate() {
    // treeItem.components.treeHead = treeHead;
  },
  methods: {
    getNode(data) {
      return standardApi.awaitWrap(
        standardApi.getTree({
          // deptId: this.zhuzzhiId,
          deptId: this.$route.query.id,
          parentId: data ? data.id : "",
          fileProperty: this.target,
        })
      );
    },
    getDoc() {
      return standardApi.awaitWrap(
        standardApi.imgPreview({
          id: this.nodeData.id,
          docSource: this.nodeData.docSource,
        })
      );
    },
  },
};
</script>

<style lang="scss">
@import "../index.scss";
.com-index-book {
  .book-container {
    // padding-bottom: 30px;
    padding-left: 2vh;
  }
  .download {
    width: 30px;
  }
  .book-head2x {
    margin-left: 0 !important;
    margin-bottom: 10px;
  }
}
</style>
