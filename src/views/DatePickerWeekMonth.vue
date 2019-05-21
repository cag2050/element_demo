<template>
    <div id="DatePickerWeekMonth">
        <el-date-picker
            v-model="checkForm.week"
            type="week"
            format="yyyy 第 WW 周"
            placeholder="选择周"
            @change="weekDateChange"
            :picker-options="pickerOptions2">
        </el-date-picker>
        <el-date-picker
            v-model="checkForm.month"
            type="month"
            value-format="yyyyMM"
            placeholder="选择月"
            @change="monthDateChange"
            :picker-options="pickerOptions0"
        >
        </el-date-picker>
    </div>
</template>

<script>
    import moment from 'moment'

    export default {
        data() {
            return {
                checkForm: {
                    // 上周的最后一天
                    // week: new Date(moment().week(moment().week() - 0).startOf('week').valueOf()),
                    week: '',
                    month: moment().format('YYYYMM')
                },
                pickerOptions2: {
                    firstDayOfWeek: 1,
                    disabledDate (time) {
                        let dayOfWeek = moment().format('d')
                        if (dayOfWeek === '0') {
                            dayOfWeek = '8'
                        }
                        return time.getTime() > Date.now() - 3600 * 1000 * 24 * parseInt(dayOfWeek)
                    }
                },
                pickerOptions0: {
                    disabledDate (time) {
                        let myDate = new Date()
                        // 置灰小于2019年6月1日的月份，即置灰2019年5月及之前的月份
                        // 月份是数组下标
                        myDate.setFullYear(2019, 5, 1)
                        return time.getTime() < myDate.getTime()
                    }
                }
            }
        },
        created () {
            console.log(moment().week(moment().week() - 0).startOf('week').format('YYYYMMDD'))
        },
        methods: {
            weekDateChange (value) {
                console.log('选择日期：')
                console.log(value)
                console.log(moment(value).format('YYYYMMDD'))
                let dayOfWeek = moment(value).format('d')
                console.log('dayOfWeek=')
                console.log(dayOfWeek)
                // if (dayOfWeek === '0') {
                //     dayOfWeek = '8'
                // }
                console.log(moment(value).subtract(1, 'days').format('YYYYMMDD'))
                console.log(moment(value).add(5, 'days').format('YYYYMMDD'))
            },
            monthDateChange(value) {
                console.log(typeof value)
                console.log(value)
            }
        }
    }
</script>

<style>

</style>
