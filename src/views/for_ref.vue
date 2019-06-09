<template>
    <div>
        <div>通过 :ref =某变量 添加ref（即加了:号） ,如果想获取该ref时需要加 [0]，如this.$refs[refsArrayItem] [0]；如果不是:ref =某变量的方式而是 ref =某字符串时则不需要加，如this.$refs[refsArrayItem]</div>
        <div ref="demoRef"></div>
        <div v-for="(item, index) in list">
            <div :ref="item.value + index"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ref_for',
        data () {
            return {
                list: [
                    {
                        value: 'aaa'
                    },
                    {
                        value: 'bbb'
                    }
                ]
            }
        },
        mounted () {
            console.log(this.$refs)
        }
    }
</script>

<style scoped>

</style>
