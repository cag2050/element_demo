<template>
<div>
  <el-select v-model="value5" multiple placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</div>
</template>

<script>
export default {
    name: 'el-select',
    created () {
        console.log(111)
        /**
        this.$http.get('http://admin.creator.miaopai.com/credit/illegalsetting')
            .then(function (response) {
                console.log('response=')
                console.log(response)
            }).catch(function (response) {
                console.log(response)
            })
        **/
        this.options.push({value: '选项3', label: '蚵仔煎'})
    },
    data () {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }],
            value5: ['选项1']
        }
    }
}
</script>

<style>

</style>
