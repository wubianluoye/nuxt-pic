<template>
  <div class="list">
    <span class="title">{{title}}</span>
    <div class="wrap">
      <span v-for="(item, index) in list" :key="index" class="item">
        <NuxtLink v-if="item.url" :to="item.url" class="link">{{item.text}}</NuxtLink>
        <span v-else class="link">{{item.text}}</span>
      </span>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'MyList',
    props: {
      title: String,
      list: {
        type: Array,
        default: ()=>[]
      }
    }
  }

</script>
<style lang="scss" scoped>
  .list{
    position: relative;
    height: auto;
    .title{
      position: absolute;
      left: 0;
      text-align: left;
      line-height: 25px;
      font-size: 12px;
      color: #9b9ea0;
      letter-spacing: .43px;
      padding-right: 20px;
      font-weight: 700;
    }
    .wrap{
      zoom: 1;
      padding-left: 70px;
      width: 100%;
      box-sizing: border-box;
    }
    .item{
      width: 100%;
      height: 100%;
    }
    .link{
      display: inline-block;
      width: 10%;
      text-align: left;
      line-height: 25px;
      font-size: 12px;
      color: #73777a;
      letter-spacing: .43px;
      text-decoration: none;
    }
    .link:hover{
      color: #ff6a00;
    }
  }
</style>