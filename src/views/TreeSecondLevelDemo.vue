<template>
    <div id="TimePickerDemo">
        <el-tree
            ref="tree"
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
            :check-strictly='false'>
        </el-tree>
        <el-button @click="getCheckedKeys">通过 key 获取</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data2: [
                    {
                        id: 2,
                        label: '一级 2',
                        children: [{
                            id: 5,
                            label: '二级 2-1'
                        }, {
                            id: 6,
                            label: '二级 2-2'
                        }]
                    },
                    {
                        id: 3,
                        label: '一级 3',
                        children: [{
                            id: 7,
                            label: '二级 3-1'
                        }, {
                            id: 8,
                            label: '二级 3-2'
                        }]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            getCheckedKeys () {
                console.log(this.$refs.tree.getCheckedKeys());
            }
        }
    }
</script>

<style>

</style>
