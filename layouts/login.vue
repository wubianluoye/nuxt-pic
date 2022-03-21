<template>
    <el-container class="content">
      <el-header class="header">
        <div class="max-width">
          <div class="header-box">
            <nuxt-link to="/">
              <img src="" alt="" class="logo">
            </nuxt-link>
            <span class="text">{{title}}</span>
          </div>
        </div>
      </el-header>
      <el-main class="main">
        <Nuxt/>
      </el-main>
      <el-footer class="footer">
        <Fabout class="max-width" />
      </el-footer>
    </el-container>
</template>
<script>

  import Fabout from "@/components/fabout.vue";
  export default{
    name: 'Outer',
    components: {
      Fabout
    },
    computed: {
      title() {
        const name = this.$route.name
        const obj = {
          login: '登录',
          register: '注册'
        }
        return obj[name] || '登录'
      }
    }
  }
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100vh;
  position: relative;
}

.header,
.footer {
  background: #201d20;
}
.header{
  height: 60px;
  width: 100%;
  background: #fff;
}

.footer{
  height: auto;
  color: #fff;
}

.main{
  width: 100%;
  height: 100%;
  padding: 0;
  margin-bottom: 30px;
}

.header-box{
  padding: 20px 24px;
  .logo{
    height: 21px;
    padding-right: 10px;
  }
  .text{
    font-size: 18px;
    color: rgb(24, 24, 24);
    display: inline-block;
    padding: 0px 10px;
  }
}
</style>
