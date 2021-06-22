<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100vh;
  background-image: url("~@/assets/img/bg.jpg");
  background-size: cover;
}
.logo {
  align-self: flex-start;
  margin-top: 5.5rem;
  margin-left: 9.0714rem;
  width: 59.1429rem;
  height: 4.7857rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.yamei {
  color: white;
  font-size: 4vh;
  margin-right: 26vh;
  // margin-right: 30vh;
  margin-top: 3vh;
}
.loginbox {
  width: 27.1429rem;
  height: 32.8571rem;
  background-image: url("~@/assets/img/loginbox.png");
  background-size: 100% 100%;
  // margin-top: 7.8571vh;
  margin-top: 10.8571vh;
  margin-right: 15vw;
  display: flex;
  flex-direction: column;
  padding: 1.4286rem 2.8571rem;
  box-sizing: border-box;
  .title {
    font-size: 2rem;
    color: #ffffff;
    text-align: center;
    margin: 1.0714rem 0 1.4286rem;
  }
  .inputbox {
    height: 2.8571rem;
    line-height: 2.8571rem;
    .icon {
      margin-top: 9px;
    }
  }
  .verification {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .inputbox {
      width: 10rem;
      margin-bottom: 0rem;
    }
    .img {
      height: 2.8571rem;
    }
  }
  .loginbtn {
    margin-top: 0.7143rem;
    width: 21.9286rem;
    height: 3.2143rem;
    background-image: linear-gradient(0deg, #0080de 0%, #00c8f5 100%);
    outline: none;
    border: 0.0714rem solid #199fcd;
    font-size: 1.2857rem;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.login {
  .el-form-item {
    margin-bottom: 2.5rem;
  }
  .inputbox {
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
  }
}
</style>

<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/img/logo-22.png" />
      <!-- <img src="@/assets/img/logo3.png" /> -->
      <!-- <img src="@/assets/img/logo5.png" /> -->
    </div>
    <!-- <div class="yamei">
      <span>广州亚美信息科技有限公司</span>
      <span>云南中流科技有限公司</span>
    </div> -->
    <div class="loginbox">
      <p class="title">登 录</p>
      <el-form ref="ruleForm" :rules="rules" :model="form">
        <el-form-item prop="name">
          <el-input
            class="inputbox"
            type="text"
            v-model="form.name"
            placeholder="用户名"
          >
            <svg-icon slot="prefix" class="icon" icon-class="name" />
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            class="inputbox"
            type="password"
            v-model="form.pass"
            placeholder="密码"
          >
            <svg-icon slot="prefix" class="icon" icon-class="pass" />
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="verification">
            <el-input
              class="inputbox"
              type="text"
              v-model="form.code"
              placeholder="验证码"
            ></el-input>
            <img @click="getCode" class="img" :src="codeImage" />
          </div>
        </el-form-item>
      </el-form>
      <el-button class="loginbtn" :loading="loading" @click="login"
        >登 录</el-button
      >
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import loginApi from "@/api/modules/login";
import { mapMutations } from "vuex";
import { SET_USERINFO, SET_FASONGDANWEI } from "@/store/mutation-types";
export default {
  data() {
    return {
      form: {
        // name:'ts',
        // pass:'ts123123',
        name: "",
        pass: "",
        code: "",
      },
      codeImage: "", //验证码
      loading: false,
      redirect: "", //跳转页面
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.redirect = this.$route.query.redirect;
    this.getCode();
  },
  methods: {
    // 获取验证码
    async getCode() {
      let [err, data] = await loginApi.awaitWrap(loginApi.getcode());
      if (data) {
        this.codeImage = data;
      }
    },
    // 登录
    async login() {
      // 验证
      let thevalid;
      this.$refs.ruleForm.validate((valid) => {
        thevalid = valid;
      });
      if (!thevalid) return false;
      // 登录
      this.loading = true;
      let [err, data] = await loginApi.awaitWrap(
        loginApi.ZFtoken({
          name: this.form.name,
          password: this.form.pass,
          verificationCode: this.form.code,
        })
      );
      this.loading = false;

      if (data) {
        this.SET_USERINFO(data);
        this.SET_FASONGDANWEI(data.deptId);
        Cookies.set("accessToken", data.accessToken);
        Cookies.set("userId", data.userId);
        sessionStorage.setItem("userinfo", JSON.stringify(data));
        this.$message.success("登录成功");
        this.$router.push({
          path: this.redirect ? this.redirect : "/",
        });
      } else {
        this.$message.error(err);
        this.getCode();
      }
    },
    ...mapMutations({
      SET_USERINFO,
      SET_FASONGDANWEI: "government/SET_FASONGDANWEI",
    }),
  },
};
</script>
