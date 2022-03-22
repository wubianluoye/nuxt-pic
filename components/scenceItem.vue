<template>
  <div class="content">
    <div class="content-left">
      <el-image :src="info.url" />
    </div>
    <div class="content-right">
      <div class="right-wrap">
        <h3>电商行业Banner制作</h3>
        <p>阿里云鹿班智能设计在大规模批量化banner生产和投放场景下，利用抠图+模版方式，快速搭配产出各类风格的电商营销图片，同时降低商家设计成本、提高设计效率。</p>
        <h3>相关行业</h3>
        <p><span class="busi-item">互联网</span><span class="busi-item">电子商务</span><span class="busi-item">视觉设计</span></p>
        <h3>相关能力</h3>
        <div class="btnbox">
          <el-button>Default</el-button>
          <el-button>Default</el-button>
          <el-button>Default</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'ScenceItem',
  props: {
    info: {
      type: Object,
      default: ()=>{
        return {
          url: '',
        }
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.scence{
  width: 100%;
  padding: 60px 0;
  background: #fff;
  .wrap{
    margin: 0 auto;
    position: relative;
    .h2{
      font-size: 28px;
      color: #181818;
      letter-spacing: 1.1px;
      text-align: center;
      height: 40px;
      line-height: 40px;
      margin-bottom: 40px;
    }
  }
  .content{
    display: flex;
    height: 398px;
    .content-left{
      flex: 1;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .content-right{
      flex: 1;
      position: relative;
      background: #eee;
      .right-wrap{
        padding: 32px;
        h3{
          font-size: 16px;
          color: #181818;
          letter-spacing: 0;
          line-height: 24px;
          margin-bottom: 10px;
          font-weight: 600;
        }
        p{
          font-size: 14px;
          color: #3d3d3d;
          letter-spacing: 0;
          line-height: 24px;
          margin-bottom: 32px;
          max-height: 72px;
          overflow: hidden;
        }
        .busi-item{
          margin-left: 16px;
        }
        .busi-item:first-child{
          margin-left: 0;
        }
      }
    }
  }
}
</style>