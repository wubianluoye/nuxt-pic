<template>
  <div class="top-continer">
    <div class="banner">
      <div class="max-width top-main">
        <div class="top-content">
          <h2 class="h2">分割抠图</h2>
          <p>基于深度学习框架，结合检测识别技术，实现高精视觉分割能力，可实现秒级全自动主体、场景像素级识别，制作4通道透明素材。不仅实现了发丝级精抠，对高度镂空主体、复杂背景等场景都有很好的效果，同时支持人、货、场等三种类型需求，可广泛应用于电子商务、零售、泛文娱、个人应用等各种场景。</p>
          <div class="btn-box">
            <el-button type="warning" size="large" class="btn">warning</el-button>
            <el-button type="text" class="text-btn">text</el-button>
            <el-button type="text" class="text-btn">text2</el-button>
          </div>
        </div>
        <div class="edbox">
          <Pic :imgs="imgs" />
        </div>
      </div>
    </div>
    <div class="max-width power">
      <div class="wrap">
        <h2 class="h2">能力列表</h2>
        <el-tabs v-model="activeName" class="tabs">
          <el-tab-pane label="通用分割" name="first">
            <el-row>
              <el-col v-for="(item,index) in list" :key="index" :span="6" class="col">
                <PowerItem :options="item" />
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="人像分割" name="second">人像</el-tab-pane>
          <el-tab-pane label="商品分割" name="third">商品</el-tab-pane>
          <el-tab-pane label="分割替换" name="fourth">分割</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="max-width scence">
      <div class="wrap">
        <h2 class="h2">场景</h2>
        <el-tabs v-model="activeName2" class="tabs">
          <el-tab-pane label="电商行业Banner制作" name="first">
            <ScenceItem :info="changjing" />
          </el-tab-pane>
          <el-tab-pane label="娱乐贴纸" name="second">
            娱乐贴纸
            <el-icon size="small" >
              <edit></edit>
            </el-icon>
          </el-tab-pane>
          <el-tab-pane label="证件照制作" name="third">证件照制作</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import Pic from "@/components/mousePic.vue";
import PowerItem from '@/components/powerItem.vue'
import ScenceItem from '@/components/scenceItem.vue'

export default{
  name: 'Index',
  components: {
    Pic,
    PowerItem,
    ScenceItem
  },
  data() {
    return {
      img: [
        {
          beforeImg: "~assets/before.png",
          afterImg: "~assets/after.png",
        },
        {
          beforeImg: "~assets/f1.png",
          afterImg: "~assets/b1.png",
        }
      ],
      changjing: {
        url: '~assets/cj.png'
      },
      activeName: 'first',
      activeName2: 'first'
    }
  }
}

</script>
<style lang="scss" scoped>
.top-continer{
  width: 100%;
  height: 100%;
}
.banner{
  width: 100%;
  height: 100%;
  background-color: #201d20;
  padding-bottom: 60px;
}
.top-main{
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding-right: 2px;
  padding-top: 80px;
  background-color: #201d20;
  box-sizing: border-box;
  .top-content{
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    .h2{
      height: 68px;
      line-height: 68px;
      font-size: 48px;
      width: 100%;
      font-weight: 400;
      color: #fff;
      letter-spacing: 0;
      text-align: justify;
      margin: 0;
    }
    p{
      flex: 1;
      width: 100%;
      opacity: .8;
      margin-top: 32px;
      font-size: 16px;
      color: #fff;
      letter-spacing: .53px;
      line-height: 28px;
    }
    .btn-box{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      font-size: 14px;
      .btn{
        border-radius: 0;
      }
      .text-btn{
        color: #ff6a00;
      }
    }
  }
  .edbox{
    width: 732px;
    height: 351px;
    line-height: 351px;
    display: flex;
    align-items: center;
    position: relative;
  }
}
.power{
  cursor: default;
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #fff;
  .wrap{
    margin: 0 auto;
    position: relative;
    .h2{
      font-size: 28px;
      color: #181818;
      letter-spacing: 1.1px;
      text-align: center;
      margin-bottom: 24px;
    }
  }
}

.scence{
  padding-bottom: 60px;
  .wrap{
    margin: 0 auto;
    position: relative;
    .h2{
      font-size: 28px;
      color: #181818;
      letter-spacing: 1.1px;
      text-align: center;
      margin-bottom: 24px;
    }
  }
}

.tabs{
  :deep(.el-tabs__nav-scroll){
    display: flex;
    justify-content: center;
  }
}
.col{
  padding: 0 10px;
}


</style>
