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
    width: 500px;
    height: 90px;
    margin: 0 auto;
    background: -webkit-linear-gradient(left, #75c7f0 , #74a0ef);
    border-radius: 8px;
    a{
      display: block;
      height: 90px;
      line-height: 90px;
      text-align: center;
      font-size: 40px;
      color: #f2f6f9;
    }
  }
</style>
