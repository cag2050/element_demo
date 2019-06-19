<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label='日期范围：' prop="value1">
            <el-date-picker
                v-model="ruleForm.value1"
                type="datetimerange"
                value-format="yyyy-MM-dd HH:mm:ss"
                @change="handleChange"
                :clearable="false"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import moment from 'moment'

    export default {
        name: 'datePicker_type_datetime',
        data () {
            return {
                ruleForm: {
                    value1: []
                },
                rules: {
                    value1: [
                        { required: true, message: '请填写生效周期', trigger: 'change' },
                        { validator: this.validateDatetimerange, trigger: 'change' }
                    ]
                }
            }
        },
        methods: {
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!')
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            handleChange (value) {
                console.log('value')
                console.log(value)
                console.log('value[0]')
                console.log(value[0])
            },
            validateDatetimerange (rule, value, callback) {
                if (Date.now() > moment(value[0], 'YYYY-MM-DD HH:mm:ss').toDate().getTime()) {
                    callback(new Error('开始时间需大于当前时间'))
                } else {
                    callback()
                }
            }
        }
    }
</script>

<style scoped>

</style>
