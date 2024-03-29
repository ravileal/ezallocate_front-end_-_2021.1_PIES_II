// =========================================================
// * Vuetify Material Dashboard - v2.1.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vuetify-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Amplify from 'aws-amplify';
import Vue from 'vue';
// import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/base';
import './plugins/chartist';
import './plugins/vee-validate';
import vuetify from './plugins/vuetify';
import i18n from './i18n';

// Vue.use(VueAxios, axios);

import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

Vue.config.isCustomElement = tag => tag.startsWith('amplify-');
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app');
