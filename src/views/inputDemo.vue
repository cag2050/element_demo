<template>
    <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        show-word-limit
        :minlength="0"
        :maxlength="200"
        placeholder="200字以内"
        v-model="textarea1">
    </el-input>
</template>

<script>
    export default {
        name: 'input',
        data () {
            return {
                'textarea1': ''
            }
        }
    }
</script>

<style scoped>

</style>
