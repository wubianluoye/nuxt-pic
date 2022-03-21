<template>
  <div class="header">
    <div class="title-box">
      <nuxt-link to="/" class="logo" >
        <el-image :src="props.logo" class="img" />
      </nuxt-link>
      <nuxt-link to="/">
        <h1 class="title">视觉开放平台</h1>
      </nuxt-link>
    </div>
    <div v-if="name" class="login-box">
      <el-avatar :size="50" :src="props.avatar" />
      <span>{{props.name}}</span>
    </div>
    <div v-else class="login-box">
      <nuxt-link to="/login">
        <el-button type="text">登录</el-button>
      </nuxt-link>
      <span class="span">/</span>
      <nuxt-link to="/register">
        <el-button type="text">注册</el-button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    logo: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default:''
    },
    name: String
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-menu {
    flex-grow: 0;
  }
  .title-box{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .logo{
      width: 100%;
      height: 100%;
      max-width: 190px;
      cursor: pointer;
      display: block;
      overflow: hidden;
      .img{
        width: 100%;
        height: 100%;
        max-width: 190px;
        cursor: pointer;
      }
    }
    .title{
      width: 144px;
      height: 20px;
      line-height: 20px;
      font-size: 18px;
      color: #fff;
      margin: 0 0 0 24px;
      font-weight: 400;
      white-space: nowrap;
    }
  }
}

.login-box{
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  .span{
    padding: 0 2px;
  }
  button{
    color: #fff;
  }
  button:hover{
    color: #f60;
  }
}
</style>
