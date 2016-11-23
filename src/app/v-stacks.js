import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import Vue from 'vue';
import Router from './router/Router';
import MasterLayout from './views/Layout/Layout';

/* eslint-disable no-new */
new Vue(Vue.util.extend({
  router: Router
}, MasterLayout)).$mount('#app');
