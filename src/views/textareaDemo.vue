<template>
    <div>
        <div>
            <el-input
                type="textarea"
                :rows="10"
                placeholder="请输入yaml格式内容"
                v-model="textarea">
            </el-input>
        </div>
        <div class="btn_div">
            <el-button @click="getTextarea" class="btn">获得textarea的值</el-button>
            <el-button @click="clearTextarea" class="btn">清除textarea的值</el-button>
            <el-button @click="setTextarea" class="btn">设置textarea的值</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                textarea: '',
                jsonStr: '',
                json: {}
            }
        },
        methods: {
            getTextarea () {
                console.log(this.textarea)
                this.json = {
                    key: this.textarea
                }
                console.log('json')
                console.log(this.json)
                this.jsonStr = JSON.stringify(this.json)
                console.log('jsonStr')
                console.log(this.jsonStr)
            },
            clearTextarea () {
                this.textarea = ''
            },
            setTextarea () {
                this.textarea = JSON.parse(this.jsonStr)['key']
            },
        }
    }
</script>

<style scoped>
    .btn_div {
        height: 50px;
    }
    .btn {
        float: left;
        margin-top: 10px;

    }
    .code {
        text-align: left;
    }
</style>
