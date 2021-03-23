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
        <router-link to='/tree_second_level'>tree 例子：2层</router-link> |
        <router-link to='/switch'>switch 例子</router-link> |
        <router-link to='/menu'>menu 例子</router-link> |
        <router-link to='/dynamic_two_input'>动态添加2个input表单</router-link> |
        <router-link to='/tree_three_level'>tree 例子：3层</router-link> |
        <router-link to='/date_range'>日期范围选择框</router-link> |
        <router-link to='/tabs/tabFirst'>el-tabs 例子</router-link> |
        <router-link to='/axios'>axios 例子</router-link> |
        <router-link to='/radio_group'>el-radio-group 例子</router-link> |
        <router-link to='/ref'>ref 例子</router-link> |
        <router-link to='/color_picker'>el-color-picker 例子</router-link> |
        <router-link to='/datePicker_type_datetime'>el-date-picker，type 为 datetime 例子</router-link> |
        <router-link to='/el-date-picker_type_datetimerange'>el-date-picker，type 为 datetimerange 例子</router-link> |
        <router-link to='/for_ref'>for 遍历，动态添加ref例子</router-link> |
        <router-link to='/toggleRowSelection'>el-table 的 toggleRowSelection</router-link> |
        <router-link to='/reserve-selection'>el-table 的 reserve-selection</router-link> |
        <router-link to='/tableCheckbox'>el-table 的 Checkbox</router-link> |
        <router-link to='/inputDemo'>el-input 的 show-word-limit：显示剩余字数</router-link> |
        <router-link to='/radioCancelCheck'>单选取消勾选</router-link> |
        <router-link to='/tagDemo'>el-tag 例子</router-link> |
        <router-link to='/textareaDemo'>textarea输入yaml格式内容，JSON.stringify成json后再JSON.parse</router-link> |
        <router-link to='/switchDemo2'>switch 例子2：文字在组件里面</router-link> |
        <router-link to='/table_fixed_header'>el-table 固定表头</router-link> |
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
