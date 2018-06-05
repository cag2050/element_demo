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
            placeholder="选择月"
            @change="monthDateChange">
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
                    week: new Date(moment().week(moment().week() - 0).startOf('week').valueOf()),
                    // week: '',
                    month: ''
                },
                pickerOptions2: {
                    firstDayOfWeek: 1,
                    disabledDate (time) {
                        return time.getTime() > Date.now() - 3600 * 1000 * 24 * 2
                    }
                }
            }
        },
        created () {
        },
        methods: {
            weekDateChange(value) {
                console.log(typeof value)
                console.log(value)
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
