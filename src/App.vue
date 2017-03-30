<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    路由列表：<br/>
    <router-link to='/'>首页</router-link><br/>
    <router-link to='/steps'>el-steps步骤条</router-link><br/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
