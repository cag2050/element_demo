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

</style>
