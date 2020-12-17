<template>
  <div id="app">
    <left-menu class="linkleft" v-show="ismenu"></left-menu>
    <router-view />
  </div>
</template>

<script>
import leftMenu from "@/components/LeftMenu/index";
import { mapMutations } from "vuex";
import { SET_USERINFO, SET_FASONGDANWEI } from "@/store/mutation-types";
export default {
  components: {
    "left-menu": leftMenu,
  },
  created() {
    let userinfo = sessionStorage.getItem("userinfo");
    if (userinfo) {
      userinfo = JSON.parse(userinfo);
      this.SET_USERINFO(userinfo);
      this.SET_FASONGDANWEI(userinfo.deptId);
    }
  },
  data(){
    return{
      ismenu:true
    }
  },
  watch:{
    $route(to,from){
      if(to.path=='/login'){
        this.ismenu = false
      }else{
        this.ismenu = true
      }
    }
  },
  methods: {
    linkto(url) {
      this.$router.push(url);
    },
    ...mapMutations({
      SET_USERINFO,
      SET_FASONGDANWEI: "government/SET_FASONGDANWEI",
    }),
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
}
#app {
  height: 100%;
}
.linkleft {
  position: absolute;
  z-index: 99999;
  left: 0;
  top: 0;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
