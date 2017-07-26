// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import { flexible } from './js/lib/properScreen.js'
import { flexibleCss } from './js/lib/properScreen_css.js'
flexible();
flexibleCss();

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
