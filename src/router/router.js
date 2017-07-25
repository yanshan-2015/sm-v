import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../views/1th-index.vue')
    },
    {
      path: '/',
      name: 'shape',
      component: require('../views/2th-shape.vue')
    },
    {
      path: '/',
      name: 'height',
      component: require('../views/3th-height.vue')
    }
  ]
})
