<template>
<div id="dynamicSelectForm">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic">
        <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" label="" :key="domain.key">
            <el-select class="fl" style='margin-right:20px;width:200px' v-model="domain.selectValue" placeholder="请选择或输入属性" filterable allow-create default-first-option @change="selectChange">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        <!--</el-form-item>-->
        <!--<el-form-item v-for="(domain, index) in dynamicValidateForm.domains" label="value:" :key="domain.key + 1" :prop="'domains.' + index + '.inputValue'" :rules="{ required: true, message: 'x不能为空', trigger: 'blur' }">-->
            <el-input class="fl" style='margin-right:20px;width:200px' v-model="domain.inputValue" placeholder="请输入属性值"></el-input>
            <el-button class="fl" style='' @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
            <el-button @click="addDomain">新增动态表单(select加input)</el-button>
            <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
    export default {
        data() {
            return {
                dynamicValidateForm: {
                    domains: [{
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
                console.log('this.dynamicValidateForm.domains[0].selectValue=')
                console.log(this.dynamicValidateForm.domains[0].selectValue)
                console.log('this.dynamicValidateForm.domains[0].inputValue=')
                console.log(this.dynamicValidateForm.domains[0].inputValue)
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
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
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
