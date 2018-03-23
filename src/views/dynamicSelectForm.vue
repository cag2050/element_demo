<template>
<div id="dynamicSelectForm">
    <el-form :model="form" ref="form" class="demo-dynamic">
        <el-form-item v-for="(property, index) in form.properties" label="" :key="property.key">
            <el-select class="fl" style='margin-right:20px;width:200px' v-model="property.selectValue" placeholder="请选择或输入属性" filterable allow-create default-first-option @change="selectChange">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-input class="fl" style='margin-right:20px;width:200px' v-model="property.inputValue" placeholder="请输入属性值"></el-input>
            <el-button class="fl" style='' @click.prevent="removeProperty(property)">删除</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">提交</el-button>
            <el-button @click="addProperty">新增动态表单(select和input)</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    properties: [{
                        inputValue: '',
                        selectValue: ''
                    }]
                },
                options: [{
                    value: '选项1', label: '选项1'
                }, {
                    value: '选项2', label: '选项2'
                }]
            };
        },
        methods: {
            selectChange (value) {
                console.log(value)
            },
            submitForm(formName) {
                console.log('this.form.properties[0].selectValue=')
                console.log(this.form.properties[0].selectValue)
                console.log('this.form.properties[0].inputValue=')
                console.log(this.form.properties[0].inputValue)
                /*
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                */
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeProperty(item) {
                var index = this.form.properties.indexOf(item)
                if (index !== -1) {
                    this.form.properties.splice(index, 1)
                }
            },
            addProperty() {
                this.form.properties.push({
                    inputValue: '',
                    selectValue: '',
                    key: Date.now()
                });
            }
        }
    }
</script>

<style lang="stylus">
#dynamicSelectForm
    .fl
        float left
</style>
