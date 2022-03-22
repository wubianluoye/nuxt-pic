<template>
    <el-container class="content">
      <el-header class="header">
        <Header class="max-width" />
      </el-header>
      <el-main class="main">
        <nuxt-child />
      </el-main>
      <div class="footer">
        <Footer class="max-width" />
      </div>
    </el-container>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default{
  name: 'Layout',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.max-width {
  width: 100%;
  max-width: 1272px;
  margin: 0 auto;
}

.content {
  width: 100%;
  height: 100%;
  position: relative;
}

.header,
.footer {
  background: #201d20;
}
.header{
  position: fixed;
  z-index: 999;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.footer{
  height: auto;
  color: #fff;
}

.main{
  width: 100%;
  height: 100%;
  margin-top: 60px;
  padding: 0;
}
</style>
