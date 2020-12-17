<template>
  <enter-price></enter-price>
  <!-- <el-collapse-transition>
      <div v-show="previews">
        <preview></preview>
      </div>
  </el-collapse-transition>-->
</template>

<script>
import EnterPrice from "./enterprice";
// import preview from "./preview";
export default {
  components: {
    EnterPrice,
    // preview,
  },
  data() {
    return {
      // enter: true,
      // previews: false,
    };
  },
};
</script>

<style>
</style>