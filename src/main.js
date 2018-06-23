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

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(DataTables)

Vue.prototype.$XLSX = XLSX

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
