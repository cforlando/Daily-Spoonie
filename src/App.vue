<template>
  <div id="app">
    <router-view></router-view>
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

// start router
import VueRouter from 'vue-router';
import router from './router/router';

Vue.use(VueRouter);
// end router

// vuex store
import store from './store/store';
// end store

export default {
  name: 'app',
  router,
  store,
}

</script>