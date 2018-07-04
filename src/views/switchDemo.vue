<template lang="pug">
    <div id="switchDemo">
        <el-switch v-model="switchValue" @change='switchChange' active-color="#13ce66" inactive-color="#ff4949">
        </el-switch>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                switchValue: true
            }
        },
        methods: {
            switchChange (value) {
                console.log(typeof value)
                console.log(value)
            }
        }
    }
</script>

<style>

</style>
