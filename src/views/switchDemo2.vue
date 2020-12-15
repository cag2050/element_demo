<template>
    <div id="switchDemo">
        <el-switch v-model="switchValue"
                   @change="handleChange"
                   class="switch_custom"
                   active-color="#31ad9c"
                   active-text="分时数据"
                   inactive-color="#ff9448"
                   inactive-text="累时数据">
        </el-switch>
    </div>
</template>

<script>
export default {
    data () {
        return {
            switchValue: true
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
.switch_custom .el-switch__label {
    position: absolute;
    display: none;
    color: #fff;
}

/*打开时文字位置设置*/
.switch_custom .el-switch__label--right {
    z-index: 1;
    right: 6px;
}

/*关闭时文字位置设置*/
.switch_custom .el-switch__label--left {
    z-index: 1;
    left: 8px;
}

/*显示文字*/
.switch_custom .el-switch__label.is-active {
    display: block;
}

.switch_custom.el-switch .el-switch__core,
.switch_custom.el-switch .el-switch__label {
    width: 90px !important;
}
</style>
