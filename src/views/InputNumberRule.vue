<template>
    <div id="TimePickerDemo">
        <el-form :model="checkForm" :rules="checkRules">
            <el-form-item label="检查文件个数：" prop="fileNum">
                <el-input type="number" v-model.number="checkForm.fileNum" :max="10000" @change="handleChange" placeholder="请输入内容"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkForm: {
                    fileNum: ''
                },
                checkRules: {
                    fileNum: {type: 'number', required: true, message: '请输入数字', trigger: 'blur'}
                }
            }
        },
        methods: {
            handleChange(value) {
                // value 是字符串
                console.log(typeof value)
                console.log(value)
                // this.checkForm.fileNum，是数字
                console.log(typeof this.checkForm.fileNum)
                console.log(this.checkForm.fileNum)
            }
        }
    }
</script>

<style>

</style>
