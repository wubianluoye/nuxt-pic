<template>
  <div class="login-content">
    <div class="tab-box">
      <el-form
        :model="form"
        ref="formRef"
        class="form"
        :rules="rules"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item prop="name">
          <el-input
            v-model.trim="form.name"
            size="large"
            placeholder="输入邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="form.password"
            size="large"
            type="password"
            placeholder="请输入登录密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            size="large"
            style="width: 100%"
            >登录</el-button
          >
        </el-form-item>
        <div class="froget">
          <el-button-group>
            <el-button type="text" size="default">
              <nuxt-link to="" class="item"> 忘记密码 </nuxt-link>
            </el-button>
            <el-button type="text" size="default">
              <nuxt-link to="" class="item"> 忘记账号 </nuxt-link>
            </el-button>
            <el-button type="text" size="default">
              <nuxt-link to="/register" class="item"> 注册 </nuxt-link>
            </el-button>
          </el-button-group>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>

export default {
  layout: 'login',
  name: 'Login',
  data() {
    return {
      active: 'first',
      form: {
        name: null,
        password: null
      },
      rules: {
        name: { required: true, type: 'email', message: "请输入账号名", trigger: "blur" },
        password: { required: true, message: "请输入密码", min: 6, max: 20, trigger: "blur" },
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.fRef.validate((valid) => {
        if (valid) {
          console.log("login");
          sessionStorage.setItem('userInfo', JSON.stringify(form))
          this.$message.success('登录成功！')
          this.$router.push('/')
        } else {
          return false;
        }
      });
    }
  }
}

</script>
<style lang="scss" scoped>
.login-content {
  padding: 30px 20px;
  width: 100%;
  height: 356px;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: center;
  .tab-box {
    width: 600px;
    box-shadow: 0px 2px 3px 3px #999;
    padding: 60px 20px 20px 20px;
    display: flex;
    align-content: center;
    justify-content: center;
    .form {
      width: 280px;
      &::v-deep .el-form-item__content {
        margin: 0!important;
      }
    }
  }
}
.froget {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 10px;
  .item {
    margin-right: 10px;
    font-size: 12px;
    color: #999;
  }
}
</style>
