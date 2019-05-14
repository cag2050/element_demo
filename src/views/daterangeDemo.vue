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
                dtArr: [moment().subtract(7, 'days').format('YYYYMMDD'), moment().subtract(1, 'days').format('YYYYMMDD')],
                pickerOptions1: {
                    disabledDate (time) {
                        return time.getTime() > Date.now() - 3600 * 1000 * 24 || time.getTime() < Date.now() - 3600 * 1000 * 24 * 31
                    }
                }
            }
        },
        methods: {
            daterangeChange (value) {
                console.log(value)
            }
        }
    }
</script>

<style scoped>

</style>
