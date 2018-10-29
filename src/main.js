import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import Firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import { config } from './config/fbconfig.js'
import App from './App.vue'
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
