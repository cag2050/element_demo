<template>

</template>

<script>
    import axios from 'axios'

    export default {
        name: 'axios',
        mounted () {
            this.requestData()
        },
        methods: {
            requestData () {
                axios.get('/cag2050/element_demo/file-list/master?token=xxx')
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
