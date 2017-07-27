<!--
  两个div的事
-->

<template>
    <div class="chose">
      <slot name="title"></slot>
      <ul>
        <li>
          <slot name="man"></slot>
        </li>
        <li>
          <slot name="women"></slot>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: 'choseSex',
        data() {
            return {}
        }
    }
</script>

<style lang="less" scoped>
  .chose{
    ul{
      padding: 0 76px;
      overflow: hidden;
      li{
        float: left;
        width: 50%;
        height: auto;
      }
    }
  }
</style>
