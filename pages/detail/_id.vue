<template>
  <div class="detail-content">
    <div class="bg-1">
      <div class="max-width breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>detail</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="max-width detail-h1">
        <el-badge value="热卖中" class="item">
          <h1>{{data.title}}</h1>
        </el-badge>
        <div class="p"> 识别输入图像中的商品轮廓，与背景进行分离，返回分割后的前景商品图（4通道），适用于单商品/多商品、复杂背景等场景。</div>
        <div class="p2">开通即享2QPS免费不限量调用</div>
        <div class="btn-box">
          <el-button type="warning" plain>立即开通</el-button>
          <el-button type="warning" plain>立即购买</el-button>
          <el-button type="warning" plain>技术文档</el-button>
          <el-button type="text">
            产品价格
            <i class="el-icon-arrow-right"></i>
          </el-button>
        </div>
        <div class="head-nav">
          <ul class="nav-ul">
            <li class="navLi active">
              <a href="#tiyan">产品体验</a>
            </li>
            <li class="navLi">
              <a href="#code">示例代码</a>
            </li>
            <li class="navLi">
              <a href="#special">特色优势</a>
            </li>
            <li class="navLi">
              <a href="#use">应用场景</a>
            </li>
            <li class="navLi">
              <a href="#position">产品定价</a>
            </li>
            <li class="navLi">
              <a href="#zhichi">技术支持</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="max-width pd-box">
        <h2 class="title" name="tiyan">产品体验</h2>
        <div class="area">
          <div class="imgbox">
            <img src="" alt="" class="left-comp">
            <div class="upload-area">
              <div class="left-input">
                <div class="l-box">
                  <el-input v-model="imgurl" suffix-icon="el-icon-search" placeholder="输入图片url地址" clearable></el-input>
                  <span class="t">或</span>
                    <el-upload
                      class="upload-com"
                      :action="uploadUrl"
                      :multiple="false"
                      :show-file-list="false"
                      accept="image/png,image/jpg"
                      :on-success="changeFile"
                      ref="upload"
                      hidden
                    >
                    <!-- <el-button type="warning" @click="uploadHandle">上传图片</el-button> -->
                  </el-upload>
                  <el-button class="upload-com" type="warning" @click="beforePpload">上传图片</el-button>
                </div>
                <div class="tip">图片格式：JPEG、JPG、PNG（不支持8位、16位、64位PNG）、BMP、WEBP。 图像大小：小于3MB。 图像分辨率：小于1280×1280像素。</div>
              </div>
              <div class="right-btn">
                  <el-button type="warning" plain size="default" @click="download">结果下载</el-button>
                </div>
              </div>
          </div>
          <div class="select-img-box"></div>
        </div>
      </div>
    </div>
    <div class="max-width">
      <div class="xg-box">
        <h4>相关能力体验</h4>
        <el-row :gutter="20" justify="space-between" style="width: 100%; margin: 0;">
          <el-col v-for="(item,index) in table" :key="index" :span="8" class="xg-item">
            <el-card shadow="always" :body-style="{ padding: '0px' }">
              <div class="xg-img-box">
                <img src="" alt="">
                <span class="dod">相关推荐</span>
              </div>
              <div class="xg-bottom">
                <p class="title">分割</p>
                <p class="text">描述</p>
              </div>
            </el-card>
            
          </el-col>
          <el-col :span="7" :offset="1"></el-col>
        </el-row>
      </div>
      <div class="ts-box">
        <h2>特色优势</h2>
        <div class="ts-conent">
          <el-row>
            <el-col :span="12" class="ts-col">
              <div class="ts-item">
                <div class="cont">
                  <div class="title">title</div>
                  <div class="desc">desc</div>
                </div>
                <img class="img" />
              </div>
            </el-col>
            <el-col :span="12" class="ts-col">
              <div class="ts-item">
                <div class="cont">
                  <div class="title">title</div>
                  <div class="desc">desc</div>
                </div>
                <img class="img" />
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data() {
    return {
      uploadUrl: '',
      data: {
        title: '商品分割'
      },
      imgurl: '',
      table: [1,2,3],
      file: {}
    }
  },
  methods: {
    download() {},
    beforePpload() {

      // 1.是否登录
      // this.$router.push('/')

      // 在组件外调用el-upload上传的文件选择
      this.$refs.upload && this.$refs.upload.$refs['upload-inner'] && this.$refs.upload.$refs['upload-inner'].handleClick()
    },
    uploadHandle() {
      
    },
    getPolicy() {

      this.$axios.get('/policy', {
        headers: {
          Cookie: ''
        },
        params: {
          action: '',
          old_name: this.file.name
        }
      }).then(res=> {
        if(res.code === 200) {
          const info = res.data || {}
        }else{
          this.$message.error(res.message[0])
        }
      })
    },
    changeFile(file) {
      this.file = file
    }
  }
}


</script>
<style lang="scss" scoped>
  .detail-content{
    height: 100%;
    width: 100%;
    background-color: #fff;
  }

  .bg-1{
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    padding: 30px 0;

  }
  
  .breadcrumb{
    :deep(.el-breadcrumb){
      .el-breadcrumb__item .el-breadcrumb__inner{
        color: #999;
      }
      .el-breadcrumb__item:last-of-type .el-breadcrumb__inner{
        color: #333;
      }
    }
  }

  .detail-h1{
    margin-top: 40px;
    :deep(.el-badge) h1{
      font-size: 36px;
      height: 36px;
      width: auto;
      color: #181818;
      letter-spacing: 0;
      line-height: 36px;
      margin-top: 0px;
      font-weight: 400;
      display: inline-block;
    }
    .p{
      font-size: 14px;
      max-width: 738px;
      padding-right: 20px;
      color: #3d3d3d;
      letter-spacing: 0;
      line-height: 24px;
      margin-top: 10px;
    }
    .p2{
      height: 20px;
      width: 732px;
      font-size: 14px;
      color: #ff6a00;
      margin-top: 4px;
    }
    .btn-box{
      margin: 30px 0;
    }
  }
  .head-nav{
    height: 50px;
    width: 100%;
    background: #fafafa;
    background-color: #fafafa;
    line-height: 50px;
    padding-top: 30px;
    .nav-ul{
      width: 100%;
      height: 50px;
      margin: 0 auto;
      .navLi{
        font-size: 14px;
        float: left;
      }
      .navLi a:first-child {
        margin-left: 0;
      }
      .navLi a{
        display: inline-block;
        height: 49px;
        margin: 0 20px;
        color: #333;
      }
      .active a {
        color: #ff6a00;
        border-bottom: 2px solid #ff6a00;
      }
    }
  }
  .pd-box{
    width: 100%;
    height: 100%;
    .title{
      text-align: center;
      font-weight: normal;
    }
  }
  .area{
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    background-color: #f8f8f8;
    .imgbox{
      flex: 1;
    }
    .imgbox{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 633px;
      }
    }
    .select-img-box{
      width: 342px;
      height: 633px;
    }
  }
  .upload-area{
    flex: 1;
    width: 100%;
    display: flex;
    padding: 20px 0 19px 23px;
    border-left: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }
  .left-input{
    width: 100%;
    height: 100%;
    .l-box{
      flex: 1;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      .t{
        padding: 0 10px;
        color: #999;
      }
      .upload-com{
        margin-right: 10px;
      }
    }
    .tip{
      font-size: 12px;
      color: #999;
      line-height: 2em;
    }
  }
  .right-btn{
    width: 172px;
  }
  .xg-box{
    h4{
      font-weight: normal;
    }
    .xg-img-box{
      position: relative;
      img{
        height: 204px;
        width: 100%;
        display: block;
      }
      .dod{
        position: absolute;
        left: 0;
        top: 0;
        padding: 6px 8px;
        border-bottom-right-radius: 8px;
        background-color: #f7b500;
        color: #fff;
        font-size: 14px;
      }
    }
    .xg-bottom{
      position: relative;
      padding: 14px 16px 14px 20px;
      border: 1px solid #edeeef;
      background-color: #fff;
      cursor: pointer;
      p{
        margin: 0;
        line-height: 1.2;
      }
      .title{
        height: 24px;
        font-size: 16px;
        color: #181818;
        letter-spacing: 0;
        line-height: 24px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        display: flex;
        align-items: center;
        margin-bottom: 6px;
      }
      .text{
        height: 40px;
        font-size: 14px;
        color: #666;
        letter-spacing: 0;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
      }
    }

    .xg-item:nth-of-type(3n) {
      padding-right: 0!important;
    }

    .xg-bottom:hover .title{
      color: #f7b500;
    }
  }
  .ts-box{
    width: 100%;
    height: 100%;
    padding: 60px 0;
    background: #fff;
    h2{
      text-align: center;
      margin-top: 0;
    }
    .ts-col{
      margin-top: 24px;
      .ts-item{
        position: relative;
        .cont{
          padding-left: 68px;
          .title{
            height: 24px;
            font-size: 16px;
            color: #181818;
            letter-spacing: 0;
            line-height: 24px;
            margin-bottom: 4px;
            font-weight: 600;
          }
          .desc{
            font-size: 14px;
            color: #3d3d3d;
            letter-spacing: 0;
            line-height: 24px;
            min-height: 48px;
            max-height: 72px;
          }
        }
        .img{
          position: absolute;
          left: 0;
          top: 3px;
          width: 52px;
          height: 52px;
          display: block;
        }
      }
    }
  }
</style>