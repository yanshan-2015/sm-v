<!--
样例：
<my-header>
  <div slot="left" class="left">
    <img>
    <span>返回</span>
  </div>
  <p slot="mid" class="mid">{{title}}</p>
  <div slot="right" class="right">
    <img>
    <span>更多</span>
  </div>
</my-header>

-->


<template>
  <div class="head">
    <slot name="left"></slot>
    <slot name="mid"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    name: 'head',
    data(){
      return{

      }
    }
  }
</script>

<style lang="less" scoped="">
  .head{
    position: relative;
    height: 1.2rem;
    width: 100%;
    background-color: #aaa;
    .left, .right{
      position: absolute;
      top: 0;
      height: 1.2rem;
      width: 1.6rem;
      line-height: 1.2rem;
      img{
        height: 0.6rem;
        width: 0.5rem;
        display: inline-block;
        vertical-align: middle;
      }
      span{
        font-size: 0.48rem;
      }
    }
    .left{
      left: 0;
      text-align: left;
      img{
        margin-left: 0.25rem;
      }
    }
    .right{
      right: 0;
      text-align: right;
      img{
        margin-right: 0.35rem;
      }
    }
    .mid{
      width: 66%;
      height: 1.2rem;
      margin: 0 auto;
      line-height: 1.2rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.48rem;
    }
  }
</style>
