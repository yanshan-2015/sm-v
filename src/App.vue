<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import '@/less/common.less'
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url("./assets/images/1-bg.png")no-repeat center;
  background-size: cover;
}
</style>
