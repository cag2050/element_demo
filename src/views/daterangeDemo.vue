<template>
    <div>
        <el-date-picker
            v-model="dtArr"
            type="daterange"
            value-format="yyyyMMdd"
            @change="daterangeChange"
            :picker-options="pickerOptions1"
            :clearable="false"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
        </el-date-picker>
    </div>

</template>

<script>
    import moment from 'moment'
    export default {
        name: 'daterange',
        data () {
            return {
                dtArr: [moment().subtract(30, 'days').format('YYYYMMDD'), moment().format('YYYYMMDD')],
                pickerOptions1: {
                    disabledDate (time) {
                        // 明天及以后的日期、60天以前的日期，都不可选择
                        return time.getTime() > Date.now() || time.getTime() < Date.now() - 3600 * 1000 * 24 * 60
                    }
                }
            }
        },
        methods: {
            daterangeChange (value) {
                console.log(value)
            },

        }
    }
</script>

<style scoped>

</style>
