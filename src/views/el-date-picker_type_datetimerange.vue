<template>
    <el-date-picker
        v-model="value1"
        type="datetimerange"
        value-format="yyyy-MM-dd HH:mm:ss"
        @change="handleChange"
        :clearable="false"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
    </el-date-picker>
</template>

<script>
    export default {
        name: 'datePicker_type_datetime',
        data () {
            return {
                value1: []
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
