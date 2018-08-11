<template>
  <div>
    <h1 class="text-center">spoonie day</h1>
    <h2 class="text-center">How many spoons do you have today?</h2>
    <button class="col-sm" @click="incrementSpoons"><i class="fas fa-angle-up"></i></button>
    <div class="col-sm">{{ spoons }}</div>
    <button class="col-sm" @click="decrementSpoons"><i class="fas fa-angle-down"></i></button>
    <button class="col-sm">Next</button>
  </div>
</template>

<script>
export default {
  name: 'Init',
  computed: {
    spoons() {
        return this.$store.state.spoons
    }  
  },
  methods: {
      incrementSpoons() {
          this.$store.commit('incrementSpoons');
      },
      decrementSpoons() {
          this.$store.commit('decrementSpoons');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    body {
        background: #F2F2F2;
    }
</style>