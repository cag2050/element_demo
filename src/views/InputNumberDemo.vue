<template>
    <div id="TimePickerDemo">
        <el-input-number v-model="checkForm.nHour" controls-position="right" @change="handleChange" :max="10000"></el-input-number>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                checkForm: {
                    nHour: 0
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
