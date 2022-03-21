<template>
  <div class="tab-content">
    <el-image
    :src="options.url"
    :fit="fit"
    class="img"
  ></el-image>
  <h3 class="title">
    {{options.title}}
    <i v-if="options.icon">hot</i>
  </h3>
  <div class="link-text">{{options.text}}</div>
  <div v-if="options.activity&&Object.keys(options.activity).length" class="link-wrap">
    <span class="text">{{options.activity.name}}</span>
    <span class="text">{{options.activity.text}}</span>
  </div>
  <NuxtLink :to="`/detail/${options.id}`" class="link-btn">立即体验</NuxtLink>
  </div>
</template>
<script>
  export default {
    name: 'PowerItem',
    props: {
      fit: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: () => {}
      }
    }
  }

</script>
<style lang="scss" scoped>
  .tab-content{
    height: 328px;
    width: auto;
    border: 1px solid #f4f4f4;
    background: #fff;
    position: relative;
    padding: 149px 16px 16px;
    transition: all .3s ease;
    overflow: hidden;
    box-sizing: border-box;
    .img{
      width: 100%;
      height: 149px;
      position: absolute;
      top: 0;
      left: 0;
    }
    .title{
      font-size: 16px;
      color: #181818;
      letter-spacing: .49px;
      line-height: 24px;
      margin-top: 20px;
    }
    .text{
      font-size: 14px;
      color: #6b6c6d;
      letter-spacing: 0;
      text-align: justify;
      line-height: 24px;
      margin-top: 5px;
      max-height: 72px;
      height: 72px;
    }
    .link-text{
      font-size: 14px;
      color: #6b6c6d;
      letter-spacing: 0;
      text-align: justify;
      line-height: 24px;
      margin-top: 5px;
      max-height: 72px;
      height: 72px;
    }
    .link-btn{
      position: absolute;
      width: 100%;
      height: 40px;
      bottom: -40px;
      left: 0;
      background: #ff6a00;
      font-size: 14px;
      color: #fff;
      letter-spacing: .43px;
      text-align: center;
      line-height: 40px;
      cursor: pointer;
    }
    .link-wrap{
      margin-top: 15px;
      display: flex;
      font-size: 14px;
      line-height: 20px;
      align-items: center;
      color: #ccc;
      position: relative;
      .text{
        margin: 0 10px;
        color: #ff6a00;
        letter-spacing: 0;
        border: 1px solid transparent;
      }
    }
  }

  .tab-content:hover{
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
  }
  .tab-content:hover .link-btn{
    animation: upbtn 0.3s;
    bottom: 0;
  }
  @keyframes upbtn {
    from{
      bottom: -40px;
    }
    to {
      bottom: 0px;
    }
  }
</style>