import Vue from 'vue';
import VueRouter from 'vue-router';

import Dashboard from '../views/Dashboard/Dashboard';
import Settings from '../views/Settings/Settings';

Vue.use(VueRouter);

const Router = new VueRouter({
  routes: [{
    path: '/',
    component: Dashboard
  }, {
    path: '/settings',
    component: Settings
  }]
});

export default Router;
