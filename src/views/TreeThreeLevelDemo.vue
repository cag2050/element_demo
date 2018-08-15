<template>
    <div id="TimePickerDemo">
        <el-tree
            ref="tree"
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expand-all='true'
            :default-checked-keys="[2]"
            :props="defaultProps"
            :check-strictly='false'>
        </el-tree>
        <el-button @click="getCheckedKeys">通过 key 获取</el-button>
        <el-button @click="setCheckedKeys">通过 key 设置</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data2: [
                    {
                        id: 2,
                        label: '一级 2（2）',
                        children: [{
                            id: 5,
                            label: '二级 2-1（5）',
                            children: [
                                {
                                    id: 51,
                                    label: '三级（51）'
                                },
                                {
                                    id: 52,
                                    label: '三级（52）'
                                },
                            ]
                        }, {
                            id: 6,
                            label: '二级 2-2（6）'
                        }]
                    },
                    {
                        id: 3,
                        label: '一级 3（3）',
                        children: [{
                            id: 7,
                            label: '二级 3-1（7）'
                        }, {
                            id: 8,
                            label: '二级 3-2（8）'
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
            },
            setCheckedKeys () {
                this.$refs.tree.setCheckedKeys([51, 52]);
            }
        }
    }
</script>

<style>

</style>
