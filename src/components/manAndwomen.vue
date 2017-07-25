<template>
    <div class="chose">
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

</style>
