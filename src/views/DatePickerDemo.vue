<template>
    <div id="TimePickerDemo">
        <el-date-picker v-model="checkForm.day" value-format="yyyyMMdd" type="date" placeholder="选择日期" @change="dateChange">
        </el-date-picker>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkForm: {
                    day: ''
                }
            }
        },
        methods: {
            dateChange(value) {
                console.log(typeof this.checkForm.day)
                console.log(this.checkForm.day)
                console.log(typeof value)
                console.log(value)
            }
        }
    }
</script>

<style>

</style>
