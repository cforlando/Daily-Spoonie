<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
// import Vue
import Vue from 'vue';

// start bootstrap
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// end bootstrap

// start Firebase
import Firebase from 'firebase'
import { config } from './config/fbconfig.js'

Firebase.initializeApp(config);
// end Firebase

// vuex store
import store from './store/store';
// end store

// start router
import VueRouter from 'vue-router';
import router from './router/router';

Vue.use(VueRouter);
// end router

// Vue Sanitize
import VueSanitize from 'vue-sanitize';

Vue.use(VueSanitize);
// end Vue Sanitize

//Vuelidate
import Vuelidate from 'vuelidate';

Vue.use(Vuelidate);
// end Vuelidate

export default {
  name: 'app',
  router,
  store,
}

</script>