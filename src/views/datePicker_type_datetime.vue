<template>
    <el-form :model="ruleForm" :rules="rules">
        <el-form-item label='日期范围：' prop="value1">
            <el-date-picker
                v-model="ruleForm.value1"
                type="datetime"
                value-format="yyyy-MM-dd HH:mm:ss"
                :clearable="true"
                @change="handleChange"
                placeholder="选择日期时间">
            </el-date-picker>
        </el-form-item>

    </el-form>
</template>

<script>
    export default {
        name: 'datePicker_type_datetime',
        data () {
            return {
                ruleForm: {
                    value1: ''
                },
                rules: {
                    value1: [
                        { validator: validateNickName, trigger: 'blur' }
                    ]
                }
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
