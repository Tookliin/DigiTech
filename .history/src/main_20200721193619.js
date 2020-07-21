import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap-icons';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import Dashboard from 'components/Dashboard.vue';
import Profile from 'components/Profile';
import Error from 'components/Error.vue'


Vue.config.productionTip = false
Vue
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
