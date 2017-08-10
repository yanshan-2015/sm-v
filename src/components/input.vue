<template>
    <div class="inputArea">
      <slot name="str"></slot>
      <slot name="input"></slot>
      <slot name="unit"></slot>
    </div>
</template>

<script>
    export default {
        name: 'inputArea',
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
  label,span{
    font-weight: bold;
    font-size: 34px;
    color: #5a6676;
  }
  input{
    width: 160px;
    text-align: center;
    font-size: 28px;
    color: #5a6676;
    background: none;
    border: none;
    border-bottom: 1px solid #5a6676;
    border-radius: 0;
  }
</style>
