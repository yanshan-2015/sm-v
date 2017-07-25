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
    height: 1.2rem;
    margin: 0 auto;
    background-color: #222;
    border-radius: 0.15rem;
    p{
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      font-size: 0.48rem;
      color: #d1d1d1;
    }
  }
</style>
