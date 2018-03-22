<template>
    <div id="app">
        路由列表：<br/>
        <router-link to='/'>首页</router-link><br/>
        <router-link to='/dynamic_input_form'>动态添加input表单</router-link><br/>
        <router-link to='/dynamic_select_form'>动态添加select表单</router-link><br/>
        <router-link to='/allow_create_select'>select允许创建条目</router-link>
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
