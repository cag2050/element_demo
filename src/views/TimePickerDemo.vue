<template>
    <div id="TimePickerDemo">
        <el-time-select
            v-model="checkForm.hour"
            value-format="HH"
            format="HH"
            placeholder="选择时间"
            @change="timeChange"
            :picker-options="{
                start: '00:00',
                step: '00:60',
                end: '23:00'
              }"
        >
        </el-time-select>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkForm: {
                    hour: ''
                }
            }
        },
        methods: {
            timeChange(value) {
                console.log(typeof this.checkForm.hour)
                console.log(this.checkForm.hour)
                console.log(typeof value)
                console.log(value)
            }
        }
    }
</script>

<style>

</style>
