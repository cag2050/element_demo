<template>
    <div id="TimePickerDemo">
        <el-input-number v-model="checkForm.nHour" controls-position="right" @change="handleChange" :min="1" :max="23"></el-input-number>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkForm: {
                    nHour: ''
                }
            }
        },
        methods: {
            handleChange (value) {
                console.log(typeof value)
                console.log(value)
            }
        }
    }
</script>

<style>

</style>
