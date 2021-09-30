<style lang="scss" scoped>
.addressList {
}
.item-tree {
  display: flex;
  align-items: center;
  img {
    margin: 0 10px 0 0px;
  }
}
</style>
<style lang="scss">
.addressList {
  .el-tree {
    background: transparent;
    color: #ffffff;
    .el-tree-node__expand-icon {
      color: #ffffff;
      font-size: 18px;
    }
    .el-tree-node__expand-icon.is-leaf {
      color: transparent;
      cursor: default;
    }
    .is-current > .el-tree-node__content {
      color: #409eff;
    }
    .el-tree-node__content {
      margin: 4px 0;
    }
    .el-tree-node__content:hover {
      background: transparent;
    }
    .el-tree-node:focus > .el-tree-node__content {
      background: transparent;
    }
  }
}
</style>

<template>
  <div class="addressList">
    <el-tree
      :data="treeData"
      node-key="id"
      accordion
      icon-class="el-icon-arrow-right"
      @node-click="handleNodeClick"
      :expand-on-click-node="false"
    >
      <!-- //node,data -->
      <span class="custom-tree-node" slot-scope="{ data }">
        <span class="item-tree">
          <img v-if="data.icontype == 0" src="@/assets/img/icon.png" />
          <img v-if="data.icontype == 1" src="@/assets/img/icon1.png" />
          <img v-if="data.icontype == 2" src="@/assets/img/icon2.png" />
          {{ data.deptName }}
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
import governmentApi from "@/api/modules/government";
import { mapGetters, mapMutations } from "vuex";
import {
  SET_FASONGDANWEI,
  SET_XUANZHONGCHENGSHI,
} from "@/store/mutation-types";
export default {
  data() {
    return {
      treeData: [],
    };
  },
  mounted() {
    // 政府-获取政府组织树结构数据
    this.getTree();
  },
  computed: {
    ...mapGetters({
      userinfo: "userinfo",
    }),
  },
  methods: {
    //获取目录树
    async getTree() {
      let [err, data] = await governmentApi.awaitWrap(
        governmentApi.getTree({
          Id: this.userinfo.userId,
        })
      );
      if (data) {
        data = [
          Object.assign(data[0], {
            xianlist: data[1].xianlist,
            shilist: data[1].shilist,
          }),
        ];
        this.treeData = this.setData(data, 2);
      } else {
        this.$message.error(err);
      }
    },
    //处理数据
    setData(data, icontype) {
      let tempArr = [];
      tempArr = data.map((el) => {
        let children = [],
          city = "";
        if (el.shilist.length > 0) {
          icontype = 0;
          city = el.city;
          children = this.setData(el.shilist, 1);
        }
        if (el.xianlist.length > 0) {
          icontype = 1;
          city = el.city;
          children = this.setData(el.xianlist, 2);
        }
        return {
          id: el.id,
          city:
            icontype == 0 ? el.province : icontype == 1 ? el.city : el.country,
          parentId: el.parentId,
          deptName: el.deptName,
          icontype: icontype,
          children: children,
        };
      });
      return tempArr;
    },
    //点击树
    handleNodeClick(el) {
      this.SET_FASONGDANWEI(el.id);
      this.SET_XUANZHONGCHENGSHI(el);
    },
    ...mapMutations({
      SET_FASONGDANWEI: "government/SET_FASONGDANWEI",
      SET_XUANZHONGCHENGSHI: "government/SET_XUANZHONGCHENGSHI",
    }),
  },
};
</script>
