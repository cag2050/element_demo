<template lang="pug">
    <div id="switchDemo">
        <el-radio-group v-model="radio_value" fill="rgb(137, 231, 137)">
            <el-radio-button label="A" border="false"></el-radio-button>
            <el-radio-button label="B"></el-radio-button>
            <el-radio-button label="C"></el-radio-button>
            <el-radio-button label="D"></el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                radio_value: 'A'
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

<style lang="less">
    #switchDemo {
        .el-radio-button__inner {
            border-radius: 0;
            border: none;
        }
    }
</style>
