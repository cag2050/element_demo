<template>
    <div>
        tabFirst
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods: {
        },
        beforeRouteLeave (to, from, next) {
            if (to.name === 'tabSecond') {
                next()
            } else {
                this.$confirm(
                    '您确定要离开当前页面？离开后系统将不会保留您做的修改',
                    {
                        cancelButtonText: '取消',
                        confirmButtonText: '确认'
                    }
                )
                    .then(() => {
                        next()
                    })
                    .catch(() => {
                        next(false)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
