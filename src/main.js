import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import Firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import { config } from './config/fbconfig.js'
import App from './App.vue'
import store from './store/store'
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Firebase.initializeApp(config);

Vue.config.productionTip = false

Firebase.auth().onAuthStateChanged(function() {
  store.dispatch('SET_USER');
  store.dispatch('SET_USER_ID');

  new Vue({
    render: h => h(App)
  }).$mount('#app')

});
