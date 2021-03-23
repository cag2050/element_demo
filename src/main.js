// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import DataTables from 'vue-data-tables'
import XLSX from 'xlsx'
// import StickyTable from 'element-ui-sticky-table'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(DataTables)

// global registration
// Vue.component('sticky-table', StickyTable)
// or directly override el-table (StickyTable is a superset of ElTable)
// Vue.component('el-table', StickyTable)

Vue.prototype.$XLSX = XLSX

router.beforeEach((to, from, next) => {
    // build_str.json 文件在开发环境和生产环境路径不同，在 build/build.js 文件中有说明。
    let buildStrJson = require('./build_str.json')
    let newBuildStr = buildStrJson.build_str
    let oldBuildStr = localStorage.getItem('build_str') || ''
    if (oldBuildStr !== newBuildStr) {
        console.log('auto refresh')
        localStorage.setItem('build_str', newBuildStr)
        next()
        location.reload()
    }
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
    template: '<App/>',
    components: { App }
})
/*
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
    */
