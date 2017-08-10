<template>
    <div class="g-decoration">
      <p><span>--------------------------</span></p>
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
  .g-decoration{
    p{
      width: 296px;
      height: 40px;
      line-height: 40px;
      border-left: 8px solid #dadedc;
      overflow: hidden;
      span{
        font-size: 30px;
        color: #dadedc;
      }
    }
  }
</style>
