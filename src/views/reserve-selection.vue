<template>
    <div>
        <el-table ref="multipleTable"
                  :data="tableData3"
                  tooltip-effect="dark"
                  style="width: 100%"
                  :row-key="getRowKeys"
                  @selection-change="handleSelectionChange">
            <el-table-column type="selection"
                             :reserve-selection="true"
                             width="55">
            </el-table-column>
            <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :total="6" :page-size="4" @current-change="to2page">
        </el-pagination>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'reserve-selection',
        data () {
            return {
                tableData3: [
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-08',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-06',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    },
                    {
                        date: '2016-05-07',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }
                ],
                multipleSelection: []
            }
        },
        mounted () {
            this.$nextTick(() => this.toggleSelection([this.tableData3[1], this.tableData3[2]]))
        },
        methods: {
            getRowKeys (row) {
                return row.date
            },
            toggleSelection (rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row)
                    })
                } else {
                    this.$refs.multipleTable.clearSelection()
                }
            },
            handleSelectionChange (val) {
                console.log('handleSelectionChange')
                console.log(val)
                this.multipleSelection = val
            },
            to2page (val) {
                if (val === 2) {
                    this.tableData3 = [
                        {
                            date: '2016-05-08',
                            name: '王小虎',
                            id: 5,
                            address: '上海市普陀区金沙江路 1518 弄'
                        },
                        {
                            date: '2016-05-01',
                            name: '王小虎',
                            id: 6,
                            address: '上海市普陀区金沙江路 1518 弄'
                        }
                    ]
                    console.log('this.multipleSelection')
                } else {
                    this.tableData3 = [
                        {
                            date: '2016-05-01',
                            id: 1,
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1518 弄'
                        },
                        {
                            date: '2016-05-08',
                            name: '王小虎',
                            id: 2,
                            address: '上海市普陀区金沙江路 1518 弄'
                        },
                        {
                            date: '2016-05-06',
                            name: '王小虎',
                            id: 3,
                            address: '上海市普陀区金沙江路 1518 弄'
                        },
                        {
                            date: '2016-05-07',
                            name: '王小虎',
                            id: 4,
                            address: '上海市普陀区金沙江路 1518 弄'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
