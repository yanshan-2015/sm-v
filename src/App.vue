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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url("./assets/1-bg.png")no-repeat center;
  background-size: cover;
}
</style>
