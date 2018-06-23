<template>
    <div id="TimePickerDemo">
        <data-tables :data="tableData" :pagination-def="paginationDef" :table-props="tableProps" :search-def="searchDef" :actions-def='actionsDef'>
            <el-table-column v-for="(title, index) in tableTitles" :prop="title.prop" :label="title.label" :key="title.label" sortable="custom">
            </el-table-column>
        </data-tables>
    </div>
</template>

<script>
    import FileSaver from 'file-saver'

    export default {
        data() {
            return {
                actionsDef: {
                    colProps: {
                        span: 6,
                        offset: 0
                    },
                    def: [{
                        name: '导出表格数据',
                        size: 'small',
                        handler: () => {
                            this.exportFile(this.getFileData(this.tableData), 'sheet1', 'all')
                        },
                        icon: ''
                    }]
                },
                tableTitles: [
                    {prop: 'dt', label: '日期'}
                ],
                paginationDef: {
                    show: false
                },
                tableProps: {
                    height: 200
                },
                searchDef: {
                    show: true,
                    colProps: {
                        span: 6,
                        offset: 12
                    },
                    inputProps: {
                        placeholder: '表格全局搜索'
                        // size: 'medium'
                    }
                },
                tableData: [
                    {dt: '20190809'},
                    {dt: '20190810'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'},
                    {dt: '2019081'}
                ]
            }
        },
        methods: {
            exportFile (data, sheetName, fileName) {
                const ws = this.$XLSX.utils.aoa_to_sheet(data)
                const wb = this.$XLSX.utils.book_new()
                this.$XLSX.utils.book_append_sheet(wb, ws, sheetName)
                const wbout = this.$XLSX.write(wb, {type: 'binary', bookType: 'xlsx'})
                FileSaver.saveAs(new Blob([this.s2ab(wbout)], {type: 'application/octet-stream'}), fileName + '.xlsx')
            },
            s2ab (s) {
                const buf = new ArrayBuffer(s.length)
                const view = new Uint8Array(buf)
                for (let i = 0; i !== s.length; ++i) {
                    view[i] = s.charCodeAt(i) & 0xFF
                }
                return buf
            },
            getFileData (tableDataParam) {
                let allData = []
                let titlesData = []
                let lineData = []
                let allLineData = []
                for (let item of this.tableFixedTitles) {
                    titlesData.push(item.label)
                }
                for (let item of this.tableTitles) {
                    titlesData.push(item.label)
                }
                let fixedTitleLen = this.tableFixedTitles.length
                let titleLen = this.tableTitles.length
                for (let item of tableDataParam) {
                    lineData = []
                    for (let i = 0; i < fixedTitleLen; i++) {
                        lineData.push(item[this.tableFixedTitles[i].prop])
                    }
                    for (let i = 0; i < titleLen; i++) {
                        lineData.push(item[this.tableTitles[i].prop])
                    }
                    allLineData.push(lineData)
                }
                allData.push(titlesData)
                allData = allData.concat(allLineData)
                return allData
            }
        }
    }
</script>

<style lang="stylus">
.sc-table
    .tool-bar
        text-align left
</style>
