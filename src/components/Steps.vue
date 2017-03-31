<template>
<div>
    引入el-steps报错：Uncaught RangeError: Maximum call stack size exceeded <br/>
    未知原因，待解决(内存泄漏了，可能是死循环了)
</div>
</template>

<script>
export default {
    name: 'el-steps',
    data () {
        return {
            active: 0
        }
    }
}
</script>

<style scoped>
.steps {
    width: 1140px;
    height:51px;
    margin: 0 auto;
    background-color: gray;
}
</style>
