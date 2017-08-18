import Vue from 'vue'
import Router from 'vue-router'
import Coffee from '@/components/Coffee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Coffee',
      component: Coffee
    }
  ]
})
