<template>
  <div class="login-content">
    <div class="tab-box">
      <el-form
        :model="form"
        ref="formRef"
        class="form"
        :rules="rules"
        label-width="100px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="注册邮箱" prop="email">
          <el-input
            v-model.trim="form.email"
            size="large"
            placeholder="请输入邮箱"
          ></el-input>
          <el-button type="primary" plain size="mini" :loading="time>0" @click="sendEmail">
            <span>发送验证码</span>
            <span v-if="time>0">({{ time }})</span>
          </el-button>
        </el-form-item>
        <el-form-item label="注册密码" prop="password">
          <el-input
            v-model.trim="form.password"
            size="large"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="邮箱验证码" prop="email_code">
          <el-input
            v-model.trim="form.email_code"
            size="large"
            type="password"
            placeholder="请输入邮箱验证码"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-label">
          <el-button
            type="primary"
            @click="regHandle"
            size="large"
            style="width: 100%"
            >注 册</el-button>
        </el-form-item>
        <div class="froget">
          <div class="item">已有账号，</div>
          <nuxt-link to="/login" class="item item-go"> 去登录 </nuxt-link>
        </div>
      </el-form>
    </div>

    <el-dialog
      title="验证"
      :closeOnClickModal="false"
      :closeOnPressEscape="false"
      :showCancelButton="false"
      :visible.sync="show"
      width="400px"
      @open="getCode()"
      @closed="closed">
      <el-form :model="form2" ref="form2" :rules="rules" label-width="100px" :inline="false" size="normal" @submit.native.prevent>
        <el-form-item label="验证码">
          <el-image :src="form2.bs_64" fit="fill" style="border: 1px solid #999; margin:0 4px;" :lazy="true" @click.native="getCode">
            <div slot="error">
              加载失败
            </div>
            <div slot="placeholder" class="image-slot">
              加载中
            </div>
          </el-image>
        </el-form-item>
        <el-form-item label="确认验证码" prop="code">
          <el-input v-model="form2.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发送验证码</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    
  </div>
</template>
<script>
export default {
  layout: 'login',
  name: 'register',
  data() {
    return {
      TIME_OUT: 60,
      timer: null,
      time: null,
      show: false,
      form: {
        email: null,
        password: null,
        email_code: null
      },
      rules:{
        email: { required: true, type: 'email', message: "请输入正确的邮箱", trigger: "blur" },
        password: { required: true, message: "请输入密码", min: 6, max: 20, trigger: "blur" },
        email_code: { required: true, message: "请输入邮箱验证码", min: 6, max: 20, trigger: "blur" },
        code: { required: true, message: "请输入验证码", trigger: "blur" }
      },
      form2: {
        bs_64: null,
        key: null,
        code: null
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form2.validate((valid) => {
        if (valid) {
          const obj = {...this.form2, email:this.form.email}
          delete obj.bs_64

          this.$axios.get('/email-code', {
            params: obj
          }).then(res=> {
            if(res.code === 200) {
              this.$message.success('发送成功')
              this.show = false
            }else if(res.code === 400){
              this.$message({
                type: 'error',
                message: res.message[0]
              })
              this.getCode()
            }
            else{
              this.$message.error(res.message[0])
            }
          })
        } else {
          return false;
        }
      })
    },
    regHandle() {
      this.$axios.post('/register', this.form).then(res=> {
        if(res.code === 200) {
          this.$message({
            type: 'success',
            message: '注册成功！即将跳转到登录页面',
            onClose: function() {
              this.$router.push("/login");
            }
          })
        }else{
          this.$message.error(res.message[0])
          this.show = false

        }
      })
    },
    sendEmail() {
      const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if(!reg.test(this.form.email)) {
        return
      }

      this.time = this.TIME_OUT
      this.show = true
      this.timer = setInterval(()=> {
      if(this.time<=0) clearInterval(this.timer)
        this.time--
      },1000)
    },
    closed() {
      this.form2 = {
        key: null,
        bs_64: null,
        code: null
      }

      this.show = false
    },
    getCode() {
      this.$axios.get('/captcha').then(res=> {
        if(res.code === 200) {
          const { bs_64, key } = res.data || {}
          this.form2.bs_64 = bs_64
          this.form2.key = key
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
  height: 100%;
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
  .item-go{
    color: #F56C6C;
  }
}
::v-deep button[aria-label="Close"].el-dialog__headerbtn{
  display: none;
}

.btn-label::v-deep .el-form-item__content{
  margin-left: 0!important;
}
</style>
