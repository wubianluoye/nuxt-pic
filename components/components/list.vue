<template>
  <ul class="list">
    <span class="title">{{title}}</span>
    <li v-for="(item, index) in props.list" :key="index" class="item">
      <NuxtLink v-if="item.url" :to="item.url" class="link">{{item.text}}</NuxtLink>
      <span v-else class="link">{{item.text}}</span>
    </li>
  </ul>
</template>
<script>
  export default{
    name: 'MyList',
    props: {
      list: {
        type: Array,
        default: ()=>[]
      }
    }
  }

</script>
<style lang="scss" scoped>
  .list{
    float: left;
    .title{
      display: block;
      text-align: left;
      line-height: 18px;
      font-size: 14px;
      color: #d7d8d9;
      letter-spacing: .44px;
      margin-bottom: 16px;
    }
    .item{
      width: 100%;
      height: 100%;
    }
    .link{
      display: block;
      text-align: left;
      line-height: 22px;
      font-size: 12px;
      color: #9b9ea0;
      letter-spacing: .43px;
      text-decoration: none;
      transition: color .3s;
    }
    .link:hover{
      color: #ff6a00;
    }
  }
</style>