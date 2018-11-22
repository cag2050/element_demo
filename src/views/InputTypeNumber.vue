<template>
    <div id="TimePickerDemo">
        <el-input type="number" v-model.number="checkForm.fileNum" @change="handleChange" placeholder="请输入内容"></el-input>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkForm: {
                    fileNum: ''
                }
            }
        },
        methods: {
            handleChange(value) {
                console.log(typeof value)
                console.log(value)
            }
        }
    }
</script>

<style>
    /*<input type="number">移除上下箭头*/
    /*火狐*/
    input[type=number] {
        -moz-appearance:textfield;
    }
    /*谷歌*/
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
