<template>
  <div class="about">
    <div class="about-link">
      <a href="" class="item">关于</a>
    </div>
    <div class="about-link">
      <a href="" class="item2">集团</a>
    </div>
    <div class="about-link">
      <a href="" class="item3">
        <img src="" class="img">
        <span class="text">备案</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about{
    width: 100%;
    padding-top: 10px;
    padding-bottom: 33px;
    .about-link{
      width: 100%;
      height: auto;
      clear: both;
      .item{
        text-decoration: none;
        text-align: left;
        line-height: 30px;
        font-size: 16px;
        color: #9b9ea0;
        letter-spacing: .5px;
        display: inline-block;
        margin-right: 35px;
      }
      .item2{
        text-align: left;
        line-height: 30px;
        font-size: 14px;
        color: #73777a;
        text-decoration: none;
        letter-spacing: .5px;
        display: inline-block;
        margin-right: 10px;
      }
      .item3{
        display: inline-block;
        text-decoration: none;
        .img{
          width: 20px;
          display: inline-block;
          height: 20px;
          margin-right: 12px;
        }
        .text{
          height: 20px;
          line-height: 20px;
          color: #939393;
          margin-left: -7px;
          font-size: 14px;
        }
      }
    }
  }
</style>