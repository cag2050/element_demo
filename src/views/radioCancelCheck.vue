<template>
    <el-radio-group v-model="radio2">
        <el-radio @click.native.prevent="cancelRadioCheck(3)" :label="3"> 备选项</el-radio>
        <el-radio @click.native.prevent="cancelRadioCheck(6)" :label="6"> 备选项</el-radio>
        <el-radio @click.native.prevent="cancelRadioCheck(9)" :label="9"> 备选项</el-radio>
    </el-radio-group>
</template>

<script>
    export default {
        name: 'radioCancelCheck',
        data () {
            return {
                radio2: '3'
            }
        },
        methods: {
            cancelRadioCheck (value) {
                this.radio2 === value ? this.radio2 = '' : this.radio2 = value
            }
        }
    }
</script>

<style>
    /* 选中后，再次点击取消选中时，去掉出现的 box-shadow 效果 */
    .el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
        box-shadow: none;
    }
</style>
