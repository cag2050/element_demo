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
                axios.get('/cag2050/element_demo/file-list/master')
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }
</script>

<style scoped>

</style>
