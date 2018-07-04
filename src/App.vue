<template>
    <div id="app">
        路由列表：
        <router-link to='/'>首页</router-link> |
        <router-link to='/dialog_demo'>dialog 例子</router-link> |
        <router-link to='/dynamic_input_form'>动态添加input表单</router-link> |
        <router-link to='/dynamic_select_form'>动态添加select和input表单</router-link> |
        <router-link to='/allow_create_select'>select允许创建条目</router-link> |
        <router-link to='/timepicker_demo'>时间选择器</router-link> |
        <router-link to='/input_type_number'>input框类型为数字</router-link> |
        <router-link to='/input_type_number_rule'>input框类型为数字，检验</router-link> |
        <router-link to='/date_picker'>日期选择器</router-link> |
        <router-link to='/table'>表格的formatter使用</router-link> |
        <router-link to='/el_input_number'>el-input-number 例子</router-link> |
        <router-link to='/date_week_month'>date 周、月</router-link> |
        <router-link to='/data_tables'>DataTables 例子</router-link> |
        <router-link to='/icon'>icon 例子</router-link> |
        <router-link to='/tree'>tree 例子</router-link> |
        <router-link to='/switch'>switch 例子</router-link> |
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
