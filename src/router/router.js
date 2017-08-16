import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: require('../views/1th-index.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: require('../views/1th-index.vue')
    },
    {
      path: '/age',
      name: 'age',
      component: require('../views/2th-age.vue')
    },
    {
      path: '/weight',
      name: 'weight',
      component: require('../views/3th-weight.vue')
    },
    {
      path: '/shoulderW',
      name: 'shoulderW',
      component: require('../views/4th-shoulderW.vue')
    },
    {
      path: '/shoulderH',
      name: 'shoulderH',
      component: require('../views/5th-shoulderH.vue')
    },
    {
      path: '/waistline',
      name: 'waistline',
      component: require('../views/6th-waistline.vue')
    },
    {
      path: '/waistW',
      name: 'waistW',
      component: require('../views/7th-waistW.vue')
    },
    {
      path: '/waistH',
      name: 'waistH',
      component: require('../views/8th-waistH.vue')
    },
    {
      path: '/hipW',
      name: 'hipW',
      component: require('../views/9th-hipW.vue')
    },
    {
      path: '/hipH',
      name: 'hipH',
      component: require('../views/10th-hipH.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: require('../views/11th-report.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: require('../views/12th-history.vue')
    }
  ]
})
