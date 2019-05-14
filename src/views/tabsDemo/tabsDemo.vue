<template>
    <div>
        <el-tabs ref="" v-model="activeName" @tab-click="handleTabClick" :before-leave="handleBeforeLeave">
            <el-tab-pane label="侵权投诉" name="tabFirst"></el-tab-pane>
            <el-tab-pane label="我的投诉" name="tabSecond"></el-tab-pane>
        </el-tabs>
        <div>注意：用到了 el-tabs 的 before-leave 属性，element-ui 版本 2.4.11 才支持。</div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeName: 'tabFirst'
            }
        },
        watch: {
            // 路由切换时，保证 tab 样式在正确的位置上
            '$route' (to, from) {
                console.log('watch $route to')
                console.log(to)
                this.activeName = this.$route.name
            }
        },
        beforeRouteEnter (to, from, next) {
            console.log('beforeRouteEnter to')
            console.log(to)
            next(vm => {
                // 刷新时，保证 tab 样式在正确的位置上
                vm.activeName = to.name
            })
        },
        methods: {
            handleTabClick (tab, event) {
                let name = this.activeName
                this.$router.push({name})
            },
            handleBeforeLeave (newActiveName, oldActiveName) {
                if (newActiveName === 'tabSecond' && this.$route.name !== 'tabSecond') {
                    let promise = new Promise((resolve, reject) => {
                        this.$confirm(
                            '您确定要离开当前页面？离开后系统将不会保留您做的修改',
                            {
                                cancelButtonText: '取消',
                                confirmButtonText: '确认'
                            }
                        )
                            .then(() => {
                                // 你可以在这儿做些操作
                                this.$router.push({name: 'tabSecond'})
                                resolve()
                            })
                            .catch(err => {
                                // 你可以在这儿做些操作
                                reject(err)
                            })
                    })
                    return promise
                }
            }
        }
    }
</script>

<style scoped>

</style>
