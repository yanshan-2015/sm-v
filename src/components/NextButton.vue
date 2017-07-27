<template>
    <div class="nextButton">
      <slot></slot>
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
  .nextButton{
    height: 90px;
    margin: 0 auto;
    background-color: #222;
    border-radius: 8px;
    a{
      display: block;
      height: 90px;
      line-height: 90px;
      text-align: center;
      font-size: 36px;
      color: #d1d1d1;
    }
  }
</style>
