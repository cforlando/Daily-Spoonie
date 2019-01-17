import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'
import Firebase from 'firebase'
import Admin from 'firebase-admin';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store/store';
import serviceAccount from './config/serviceAccount.json';
import { Firestore } from '@google-cloud/firestore';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuelidate);

Admin.initializeApp({
  credential: Admin.credential.cert(serviceAccount)
})

const firestore = new Firestore();
firestore.settings({ timestampsInSnapshots: true });

Vue.config.productionTip = false

Firebase.auth().onAuthStateChanged(function() {
  store.dispatch('SET_USER');
  store.dispatch('SET_USER_ID');

  new Vue({
    render: h => h(App)
  }).$mount('#app')

});
