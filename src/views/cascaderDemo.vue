<template>
    <div>
        <span class="demonstration">默认 click 触发子菜单：</span>
        <el-cascader
            :options="options"
            v-model="selectedOptions"
            @change="handleChange">
        </el-cascader>
    </div>
</template>

<script>
export default {
    data () {
        return {
            options: [
                {
                    value: 'Golang',
                    label: 'Golang',
                    children: [
                        {
                            value: '1.14',
                            label: '1.14'
                        },
                        {
                            value: '1.13',
                            label: '1.13'
                        },
                        {
                            value: '1.12',
                            label: '1.12'
                        }
                    ]
                },
                {
                    value: 'Python',
                    label: 'Python',
                    children: [
                        {
                            value: '3.6',
                            label: '3.6'
                        }
                    ]
                },
                {
                    value: 'nodeJS',
                    label: 'nodeJS',
                    children: [
                        {
                            value: '10',
                            label: '10'
                        },
                        {
                            value: '9',
                            label: '9'
                        },
                        {
                            value: '8.12.0',
                            label: '8.12.0'
                        }
                    ]
                },
                {
                    value: 'Java',
                    label: 'Java',
                    children: [
                        {
                            value: '1.8',
                            label: '1.8'
                        }
                    ]
                },
                {
                    value: 'Static',
                    label: 'Static'
                },
                {
                    value: 'C++',
                    label: 'C++',
                    children: [
                        {
                            value: '4.8.5',
                            label: '4.8.5'
                        }
                    ]
                },
                {
                    value: 'PHP',
                    label: 'PHP',
                    children: [
                        {
                            value: '7.1.12',
                            label: '7.1.12'
                        }
                    ]
                }
            ],
            selectedOptions: ['Golang', '']
        }
    },
    methods: {
        handleChange (value) {
            console.log(value)
        }
    }
}
</script>

<style scoped>

</style>
