<template>
    <el-date-picker
        v-model="value1"
        type="datetime"
        value-format="yyyy-MM-dd HH:mm:ss"
        :clearable="false"
        @change="handleChange"
        placeholder="选择日期时间">
    </el-date-picker>
</template>

<script>
    export default {
        name: 'datePicker_type_datetime',
        data () {
            return {
                value1: ''
            }
        },
        methods: {
            handleChange (value) {
                console.log(value)
            }
        }
    }
</script>

<style scoped>

</style>
