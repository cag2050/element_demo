<template>
<div id="dynamicSelectForm">
    <div class="fl">参数：</div>
    <el-form :model="form" ref="form" class="fl" size="small">
        <!--<el-form-item v-for="(property, index) in form.properties" label="">-->
        <el-form-item v-for="(property, index) in form.properties" label="" :key="property.key">
            <el-input class="fl" style='margin-right:20px;width:200px' v-model="property.inputValue1" placeholder="请输入参数名"></el-input>
            <div class="fl" style="margin-right: 10px">=</div>
            <el-input class="fl" style='margin-right:20px;width:200px' v-model="property.inputValue2" placeholder="请输入参数值"></el-input>
            <el-button class="fl" style='' @click.prevent="removeProperty(property)">删除</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">提交</el-button>
            <el-button @click="addProperty">新增参数</el-button>
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
                        inputValue1: '',
                        inputValue2: ''
                    }]
                    // properties: []
                },
                propertiesArray: []
            };
        },
        methods: {
            submitForm(formName) {
                /*
                console.log('this.form.properties[0].inputValue1=')
                console.log(this.form.properties[0].inputValue1)
                console.log('this.form.properties[0].inputValue2=')
                console.log(this.form.properties[0].inputValue2)
                */
                var propertiesLen = this.form.properties.length
                for (var i = 0; i < propertiesLen; i++) {
                    console.log('this.form.properties[i]')
                    if (this.form.properties[i].inputValue1 === '') {
                        console.log(i + " key：" + this.form.properties[i].inputValue1)
                        this.$alert('第' + (i + 1) + '个属性项的属性为空，请输入', '提示：', {
                            dangerouslyUseHTMLString: true
                        });
                        return
                    }
                    if (this.form.properties[i].inputValue2 === '') {
                        console.log(i + " value：" + this.form.properties[i].inputValue2)
                        this.$alert('第' + (i + 1) + '个属性项的属性值为空，请输入', '提示：', {
                            dangerouslyUseHTMLString: true
                        });
                        return
                    }
                    this.propertiesArray.push({key: this.form.properties[i].inputValue1, value: this.form.properties[i].inputValue2})
                    // console.log(this.form.properties[i])
                }
                console.log(this.propertiesArray)
                console.log(JSON.stringify(this.propertiesArray))
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
                let _this = this
                for (let i = 0; i < 1; i++) {
                    console.log(i)
                    // setTimeout(function () {
                    //     _this.form.properties.push({
                    //         inputValue1: '111' + i,
                    //         inputValue2: '111' + i,
                    //         key: Date.now() + 1
                    //     }, 500);
                    // })
                    _this.form.properties.push({
                        inputValue1: '',
                        inputValue2: '',
                        key: Date.now() + i
                    })
                }
                // this.form.properties.push({
                //     inputValue1: '',
                //     inputValue2: '',
                //     key: Date.now() + 1
                // });
            }
        }
    }
</script>

<style lang="stylus">
#dynamicSelectForm
    .fl
        float left
</style>
