<template>
  <div class="wel-body">
    <span>加载中，请稍后···</span>
    <img src="@/assets/img/loading2.gif" alt="" />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import loginApi from "@/api/modules/login";
import { mapMutations } from "vuex";
import { SET_USERINFO } from "@/store/mutation-types";
import { config } from "@/config/config.js";
export default {
  data() {
    return {
      redirect: "", //跳转页面
    };
  },
  mounted() {
    this.redirect = this.$route.query.redirect;
    let _this = this;
    setTimeout(_this.login(), 5000);
  },
  methods: {
    async login() {
      //this.GetParameter("username")
      //this.GetParameter("password")
      let formData = {
        name: this.GetParameter("username"),
        pass: this.GetParameter("password"),
        code: "",
        type: 1,
      };
      let [err, data] = await loginApi.awaitWrap(
        loginApi.ZFtoken({
          name: formData.name,
          password: formData.pass,
          clientVerifyCode: config.aesEncrypt(formData.code),
          type: config.aesEncrypt(formData.type),
        })
      );
      if (data) {
        this.SET_USERINFO(data);
        this.SET_FASONGDANWEI(data.deptId);
        Cookies.set("accessToken", data.accessToken);
        Cookies.set("userId", data.userId);
        sessionStorage.setItem("userinfo", JSON.stringify(data));
        this.$router.push({
          path: this.redirect ? this.redirect : "/",
        });
      } else {
        this.$message.error(err);
        setTimeout(function() {
          window.location.href = "http://39.105.108.33/dist/index.html";
        }, 3000);
      }
    },
    // 解析url地址
    GetParameter(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    },
    ...mapMutations({
      SET_USERINFO,
      SET_FASONGDANWEI: "government/SET_FASONGDANWEI",
    }),
  },
};
</script>

<style lang="scss" scoped>
.wel-body {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/img/wel.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    font-size: 5vmin;
    color: white;
  }
  img {
    width: 20%;
    height: 17vmin;
  }
}
</style>
