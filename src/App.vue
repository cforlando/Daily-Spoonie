<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import store from './store/store';
import router from './router/router';

export default {
  name: 'app',
  router,
  store,
}

</script>