import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Steps from '../components/Steps'
import ELSelect from '../components/ELSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/steps',
      name: 'Steps',
      component: Steps
    },
    {
      path: '/elselect',
      name: 'ELSelect.vue',
      component: ELSelect
    }
  ]
})
