<template>
    <el-color-picker v-model="color1" @change="handleChange"></el-color-picker>
</template>

<script>
    export default {
        name: 'colorPickerDemo',
        data () {
            return {
                color1: '#FFFFFF'
            }
        },
        methods: {
            handleChange (value) {
                console.log(value)
            }
        }
    }
</script>

<style>
.el-color-dropdown__link-btn {
    display: none;
}
</style>
