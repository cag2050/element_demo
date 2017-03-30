import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Steps from '../components/Steps'

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
    }
  ]
})
