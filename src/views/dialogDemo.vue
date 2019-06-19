<template>
    <div id="dialogDemo">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            :lock-scroll="true"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <button id="SaveButton" onclick="console.log('click')"
                        style="font-size:14px;float: right;position: relative;top: -10px;right: 112px;">保存工作流修改</button>
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogVisible: false
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        console.log(_)
                        console.log(typeof _)
                        done();
                    })
                    .catch(_ => {
                    });
            }
        }
    }
</script>

<style>

</style>
