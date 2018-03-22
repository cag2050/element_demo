<template>
    <div id="app">
        路由列表：<br/>
        <router-link to='/'>首页</router-link><br/>
        <router-link to='/dynamic_form'>动态表单</router-link>
        <br/>
        <div>===下面是内容===</div>
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
    }
</style>
