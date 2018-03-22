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
        }
    ]
})
