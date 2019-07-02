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
            cancelRadioCheck (e) {
                console.log(e)
                e === this.radio2 ? this.radio2 = '' : this.radio2 = e
            }
        }
    }
</script>

<style scoped>

</style>
