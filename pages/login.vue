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
        <el-form-item prop="email">
          <el-input
            v-model.trim="form.email"
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
        <el-form-item prop="code">
          <div class="code-item">
            <el-input
              v-model.trim="form.code"
              size="large"
              type="code"
              placeholder="请输入验证码"
              class="code-input"
            ></el-input>
            <el-image class="code-img-box" :src="bs_64" fit="fill" :lazy="true" @click.native="changeCode">
              <div slot="error" class="error-img">
                <i class="el-icon-loading"></i>
                加载中
              </div>
            </el-image>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            size="large"
            style="width: 100%"
            :loading="loading"
            >登录</el-button
          >
        </el-form-item>
        <div class="froget">
          <el-button-group>
            <!-- <el-button type="text" size="default">
              <nuxt-link to="" class="item"> 忘记密码 </nuxt-link>
            </el-button>
            <el-button type="text" size="default">
              <nuxt-link to="" class="item"> 忘记账号 </nuxt-link>
            </el-button> -->
            <el-button type="text" size="default">
              <nuxt-link to="/register" class="item item-go"> 注册 </nuxt-link>
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
        email: '18872211785@163.com',
        password: '123456',
        code: null
      },
      rules: {
        email: { required: true, type: 'email', message: "请输入账号名", trigger: "blur" },
        password: { required: true, message: "请输入密码", min: 6, max: 20, trigger: "blur" },
        code: { required: true, message: "请输入验证码", trigger: "blur" },
      },
      bs_64: null,
      key: null,
      loading: false
    }
  },
  created() {
    this.getCode()
  },
  methods: {
    onSubmit() {
      this.loading= true
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          this.$axios.post('/login', {...this.form, key:this.key}).then(res=> {
            if(res.code === 200) {
              sessionStorage.setItem('userInfo', JSON.stringify(form))
              this.$message.success('登录成功！')
              this.$router.push('/')
            }
            this.loading = false
          })
        } else {
          return false;
        }
      });
    },
    changeCode() {
      this.getCode()
    },
    getCode() {
      this.$axios.get('/captcha').then(res=> {
        if(res.code === 200) {
          const {bs_64, key} = res.data || {}
          this.bs_64 = bs_64
          this.key = key
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
.login-content {
  padding: 30px 20px;
  width: 100%;
  height: 100%;
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
  button{
    padding: 0;
    margin-right: 10px;
  }
  a{
    padding: 4px 6px;
  }
  .item {
    font-size: 12px;
    color: #999;
  }
  .item-go{
    color: #F56C6C;
  }
}

.code-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;
  .code-input{
    width: 120px;
  }
  .code-img-box{
    width: 150px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    img{
      width: 100%;
      height: 100%;
    }
    ::v-deep .error-img{
      border: 1px solid #bbb;
      padding: 0 4px;
      line-height: 36px;
      color: #bbb;
      font-size: 12px;
      border-radius: 4px;
    }
  }
}

</style>
