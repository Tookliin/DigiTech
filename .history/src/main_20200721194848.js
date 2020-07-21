import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bootstrap-icons';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
// import Dashboard from 'components/Dashboard.vue';
import Profile from 'components/Profile';
import Error from 'components/Error.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
routes: [
  {path: '/', component: () => import('Dashboard')},
  {path: '/profile', component: Profile},
  {path: '*', component: Error}
], 
mode: 'history  '
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
