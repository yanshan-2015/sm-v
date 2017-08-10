<template>
    <div class="g-head">
      <ul>
        <li class="g-left">
          <slot name="e-num"></slot>
        </li>
        <li class="g-right">
          <slot name="e-cn"></slot>
          <slot name="e-en"></slot>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
  ul{
    padding: 60px 30px 0;
    overflow: hidden;
    li{
      float: left;
    }
    .g-left{
      font-family: Heat;
      border-bottom: 8px solid #74a0ef;
      h1{
        letter-spacing: 5px;
        font-size: 120px;
        color: #5a6676;
      }
    }
    .g-right{
      margin-left: 30px;
      padding-top: 32px;
      color: #8795a3;
      h1{
        font-size: 34px;
      }
      p{
        line-height: 48px;
        font-size: 28px;
      }
    }
  }
</style>
