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
        }
    ]
})
