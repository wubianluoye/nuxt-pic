<template>
  <div class="footer">
    <div class="center">
      <div class="item-box">
        <div class="left">
          <ul>
            <li>售前</li>
            <li>售后</li>
          </ul>
        </div>
        <div class="content">
          <FItem :list="list" title="ceshi"/>
        </div>
      </div>
      <div class="content2">
        <FItem2 :list="list" title="ceshi1"/>
      </div>
      <Fabout/>
    </div>
  </div>
</template>
<script>
import FItem from './components/list.vue'
import FItem2 from './components/list2.vue'
import Fabout from './fabout.vue'

export default {
  name: 'Footer',
  components: {
    FItem,
    FItem2,
    Fabout
  },
  data() {
    return {
      list: [
        {
          text: 'baidu',
          url: 'http://baidu.com'
        },
        {
          text: 'test',
          url: ''
        },
      ]
    }
  },
}

</script>
<style lang="scss" scoped>
.footer{
  width: 100%;
  .center{
    width: 1200px;
    margin: 0 auto;
    .item-box{
      position: relative;
      box-sizing: border-box;
      padding-left: 170px;
      padding-bottom: 16px;
      border-bottom: 1px solid #4b5054;
      padding-top: 46px;
      .left{
        position: absolute;
        left: 0;
        width: 170px;
      }
      .content{
        border-left: 1px solid #4b5054;
        box-sizing: border-box;
        padding-left: 100px;
        width: 100%;
        min-height: 180px;
        display: inline-block;
        clear: both;
        overflow: hidden;
      }
    }
    .content2{
      width: 100%;
      height: auto;
      padding: 15px 0;
      box-sizing: border-box;
      border-bottom: 1px solid #4b5054;
    }
  }
}
</style>
