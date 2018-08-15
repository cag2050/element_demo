import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/dynamic_input_form',
            name: '',
            component: resolve => require(['./views/dynamicInputForm'], resolve)
        },
        {
            path: '/dynamic_select_form',
            name: '',
            component: resolve => require(['./views/dynamicSelectForm'], resolve)
        },
        {
            path: '/allow_create_select',
            name: '',
            component: resolve => require(['./views/allowCreateSelect'], resolve)
        },
        {
            path: '/dialog_demo',
            name: '',
            component: resolve => require(['./views/dialogDemo'], resolve)
        },
        {
            path: '/timepicker_demo',
            name: '',
            component: resolve => require(['./views/TimePickerDemo'], resolve)
        },
        {
            path: '/input_type_number',
            name: '',
            component: resolve => require(['./views/InputTypeNumber.vue'], resolve)
        },
        {
            path: '/input_type_number_rule',
            name: '',
            component: resolve => require(['./views/InputNumberRule.vue'], resolve)
        },
        {
            path: '/date_picker',
            name: '',
            component: resolve => require(['./views/DatePickerDemo.vue'], resolve)
        },
        {
            path: '/table',
            name: '',
            component: resolve => require(['./views/tableDemo.vue'], resolve)
        },
        {
            path: '/el_input_number',
            name: '',
            component: resolve => require(['./views/InputNumberDemo'], resolve)
        },
        {
            path: '/date_week_month',
            name: '',
            component: resolve => require(['./views/DatePickerWeekMonth'], resolve)
        },
        {
            path: '/data_tables',
            name: '',
            component: resolve => require(['./views/DataTablesDemo'], resolve)
        },
        {
            path: '/icon',
            name: '',
            component: resolve => require(['./views/iconDemo'], resolve)
        },
        {
            path: '/tree',
            name: '',
            component: resolve => require(['./views/TreeSecondLevelDemo'], resolve)
        },
        {
            path: '/switch',
            name: '',
            component: resolve => require(['./views/switchDemo'], resolve)
        },
        {
            path: '/menu',
            name: '',
            component: resolve => require(['./views/menuDemo'], resolve)
        },
        {
            path: '/dynamic_two_input',
            name: '',
            component: resolve => require(['./views/dynamicTwoInputForm'], resolve)
        }
    ]
})
