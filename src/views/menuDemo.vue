<template lang='pug'>
    <div id='menuDemo'>
        el-button(@click='changeProduct') 点击切换产品： {{ dropDownProduct }}
        el-menu(v-for='(item, index1) in getAuthorizeRouters' :key='index1' class='navi fl' unique-opened router active-text-color='#147071' element-loading-text='数据加载中' style='width: 210px;overflow-x: hidden;overflow-y: scroll;' v-show="item.menuName === dropDownProduct")
            el-menu-item(v-show='list.children.length === 0' v-for="(list, index) in getAuthorizeRouters[index1]['children']"
        :key='list.menuUrl' :index='list.menuUrl')
                span.second_level(slot='title') {{ list.menuName }}
            el-submenu(v-show='list.children.length > 0' v-for="(list, index) in getAuthorizeRouters[index1]['children']"
        :key='list.menuName' :index='list.menuName')
                template(slot='title')
                    span {{ list.menuName }}
                el-menu-item(v-for='(item, index) in list.children' :key='item.menuUrl' :index='item.menuUrl') {{ item.menuName }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dropDownProduct: '产品1',
                getAuthorizeRouters: [{
                    'id': 226,
                    'parentId': null,
                    'menuName': '产品1',
                    'menuNum': 1,
                    'menuUrl': null,
                    'checked': null,
                    'children': [{
                        'id': 31,
                        'parentId': 226,
                        'menuName': '产品1栏目1',
                        'menuNum': 1,
                        'menuUrl': '/',
                        'checked': null,
                        'children': []
                    }, {
                        'id': 32,
                        'parentId': 226,
                        'menuName': '产品1栏目2',
                        'menuNum': 100000,
                        'menuUrl': '',
                        'checked': null,
                        'children': [{
                            'id': 34,
                            'parentId': 32,
                            'menuName': '产品1栏目2-1',
                            'menuNum': 100001,
                            'menuUrl': '/1-2-1',
                            'checked': null,
                            'children': []
                        }, {
                            'id': 35,
                            'parentId': 32,
                            'menuName': '产品1栏目2-2',
                            'menuNum': 100002,
                            'menuUrl': '/1-2-2',
                            'checked': null,
                            'children': []
                        }]
                    }]
                }, {
                    'id': 228,
                    'parentId': null,
                    'menuName': '产品2',
                    'menuNum': 3,
                    'menuUrl': '',
                    'checked': null,
                    'children': [{
                        'id': 31,
                        'parentId': 226,
                        'menuName': '产品2栏目1',
                        'menuNum': 1,
                        'menuUrl': '/2-1',
                        'checked': null,
                        'children': []
                    }, {
                        'id': 229,
                        'parentId': 228,
                        'menuName': '产品2栏目2',
                        'menuNum': 300100,
                        'menuUrl': '',
                        'checked': null,
                        'children': [{
                            'id': 218,
                            'parentId': 229,
                            'menuName': '产品2栏目2-1',
                            'menuNum': 100040,
                            'menuUrl': '/2-2-1',
                            'checked': null,
                            'children': []
                        }]
                    }]
                }]
            }
        },
        methods: {
            changeProduct () {
                if (this.dropDownProduct === '产品1') {
                    this.dropDownProduct = '产品2'
                } else {
                    this.dropDownProduct = '产品1'
                }
            }
        }
    }
</script>

<style>

</style>
