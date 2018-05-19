<template>
    <div id="tableDemo">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                :formatter="formatterColumn"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                    }
                ]
            }
        },
        methods: {
            formatterColumn (row, column, cellValue, index) {
                console.log(row)
                let key = column.property
                let h = this.$createElement
                return h('div', {style: 'color:#ff7b4d;'}, [
                    h('a', {attrs: {href: '/' + row[key]}}, row[key]),
                    h('span', {style: 'width:10px;display: inline-block;'}, ''),
                    h('a', {attrs: {href: '/aaa'}}, [
                        h('i', {class: 'icon icon-account', style: 'color:gray'}, '')
                    ])
                ])
            }
        }
    }
</script>

<style>

</style>
