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
            placeholder="输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model.trim="form.password"
            size="large"
            type="password"
            placeholder="请输入用户密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input
            v-model.trim="form.password2"
            size="large"
            type="password"
            placeholder="请再次输入用户密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="phoneNumber">
          <el-input
            v-model.trim="form.phoneNumber"
            size="large"
            type="text"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            size="large"
            style="width: 100%"
            >注册</el-button
          >
        </el-form-item>
        <div class="froget">
          <div class="item">已有账号，</div>
          <nuxt-link to="/login" class="item"> 去登录 </nuxt-link>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'login',
  name: 'register',
  data() {
    //phoneNumber prop与form中的键名一致才能使其校验生效
    const phoneValid = (rule, value, callback) => {
      if(!value) {
        callback(new Error('请输入手机号'))
      }else{
        const reg = /^1[3-9]{1}[0-9]{8}/
        if( value.length!==11 || !reg.test(value)) {
          callback(new Error('请输入正确的手机号码'))
        }
      }
      callback()
    }
    return {
      form: {
        name: 'null@qq.com',
        password: '11111111',
        password2: '11111111',
        phoneNumber: '13111111111'
      },
      rules:{
        name: { required: true, type: 'email', message: "请输入账号名", trigger: "blur" },
        password: { required: true, message: "请输入密码", min: 6, max: 20, trigger: "blur" },
        password2: { required: true, message: "请输入密码", min: 6, max: 20, trigger: "blur" },
        phoneNumber: { required: true, validator: phoneValid, trigger: "blur" },
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.fRef.validate((valid) => {
        if (valid) {
          console.log("register");

          this.$message({
            type: 'success',
            message: '注册成功！即将跳转到登录页面',
            onClose: function() {
              this.$router.push("/login");
            }
          })
        } else {
          return false;
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.login-content {
  padding: 10px 20px 30px;
  width: 100%;
  height: 460px;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: center;
  .tab-box {
    width: 600px;
    box-shadow: 0px 2px 3px 3px #999;
    padding: 40px 20px 20px 20px;
    display: flex;
    align-content: center;
    justify-content: center;
    .form {
      width: 280px;
      &:deep(.el-form-item__content) {
        margin: 0!important;
      }
    }
  }
}
.froget {
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-bottom: 10px;
  .item {
    font-size: 12px;
    color: #999;
  }
}
</style>
