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
            component: () => import('./views/dynamicInputForm')
        },
        {
            path: '/dynamic_select_form',
            name: '',
            component: () => import('./views/dynamicSelectForm')
        },
        {
            path: '/allow_create_select',
            name: '',
            component: () => import('./views/allowCreateSelect')
        },
        {
            path: '/dialog_demo',
            name: '',
            component: () => import('./views/dialogDemo')
        },
        {
            path: '/timepicker_demo',
            name: '',
            component: () => import('./views/TimePickerDemo')
        },
        {
            path: '/input_type_number',
            name: '',
            component: () => import('./views/InputTypeNumber.vue')
        },
        {
            path: '/input_type_number_rule',
            name: '',
            component: () => import('./views/InputNumberRule.vue')
        },
        {
            path: '/date_picker',
            name: '',
            component: () => import('./views/DatePickerDemo.vue')
        },
        {
            path: '/table',
            name: '',
            component: () => import('./views/tableDemo.vue')
        },
        {
            path: '/el_input_number',
            name: '',
            component: () => import('./views/InputNumberDemo')
        },
        {
            path: '/date_week_month',
            name: '',
            component: () => import('./views/DatePickerWeekMonth')
        },
        {
            path: '/data_tables',
            name: '',
            component: () => import('./views/DataTablesDemo')
        },
        {
            path: '/icon',
            name: '',
            component: () => import('./views/iconDemo')
        },
        {
            path: '/tree_second_level',
            name: '',
            component: () => import('./views/TreeSecondLevelDemo')
        },
        {
            path: '/switch',
            name: '',
            component: () => import('./views/switchDemo')
        },
        {
            path: '/menu',
            name: '',
            component: () => import('./views/menuDemo')
        },
        {
            path: '/dynamic_two_input',
            name: '',
            component: () => import('./views/dynamicTwoInputForm')
        },
        {
            path: '/tree_three_level',
            name: '',
            component: () => import('./views/TreeThreeLevelDemo')
        },
        {
            path: '/date_range',
            name: '',
            component: () => import('./views/daterangeDemo')
        },
        {
            path: '/tabs',
            name: '',
            component: () => import('./views/tabsDemo/tabsDemo.vue'),
            children: [
                {
                    name: 'tabFirst',
                    path: 'tabFirst',
                    component: () => import('./views/tabsDemo/tabFirst.vue')
                },
                {
                    name: 'tabSecond',
                    path: 'tabSecond',
                    component: () => import('./views/tabsDemo/tabSecond.vue')
                }
            ]
        },
        {
            path: '/axios',
            name: '',
            component: () => import('./views/axios')
        },
        {
            path: '/radio_group',
            name: '',
            component: () => import('./views/radioGroupDemo.vue')
        },
        {
            path: '/ref',
            name: '',
            component: () => import('./views/refDemo.vue')
        },
        {
            path: '/color_picker',
            name: '',
            component: () => import('./views/colorPickerDemo.vue')
        },
        {
            path: '/datePicker_type_datetime',
            name: '',
            component: () => import('./views/datePicker_type_datetime.vue')
        },
        {
            path: '/el-date-picker_type_datetimerange',
            name: '',
            component: () => import('./views/el-date-picker_type_datetimerange.vue')
        },
        {
            path: '/for_ref',
            name: '',
            component: () => import('./views/for_ref.vue')
        },
        {
            path: '/toggleRowSelection',
            name: '',
            component: () => import('./views/toggleRowSelection.vue')
        },
        {
            path: '/reserve-selection',
            name: '',
            component: () => import('./views/reserve-selection.vue')
        }
    ]
})
