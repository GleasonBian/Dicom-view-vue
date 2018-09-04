import Vue from 'vue'
import Router from 'vue-router'
import CanvasDicom from '@/components/CanvasDicom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CanvasDicom',
      component: CanvasDicom
    }
  ]
})
