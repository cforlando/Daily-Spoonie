<template>
  <div class="init container-fluid">
    <div class="row">
        <div class="col ml-0 mr-0 pl-0 pr-0 header">
            <div><img class="logo" src="../assets/dailyspoonielogo.svg"/></div>
        </div>
    </div>
    <div class="taglinewrapper row pt-4 pb-4">
        <h2 class="tagline text-center">Get Chronically Productive</h2>
    </div>
    <div class="countwrapper row">
        <div class="col">
            <h3 class="countmessage pt-4 pb-4 text-center">How many spoons do you have today?</h3>
            <button class="incdec col-sm" @click="incrementSpoons"><i class="fas fa-angle-up"></i></button>
            <div class="spoonCount text-center col-sm">{{ spoons }}</div>
            <button class="incdec col-sm" @click="decrementSpoons"><i class="fas fa-angle-down"></i></button>
            <div class="text-center pt-4 pb-4">
                <router-link class="text-center" to="/dashboard"><button class="nextbtn btn btn-primary">Next</button></router-link>
            </div>
            <button @click="test"><i class="fas fa-stars"></i></button>
        </div>
    </div>
    <div v-if="!user" class="footer">
        <router-link to="/login"><button class="nextbtn btn btn-secondary">Login</button></router-link>
    </div>
    <div v-if="user" class="footer">
        <button @click="logOut" class="nextbtn btn btn-secondary">Logout</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Firebase } from "../config/fbconfig.js";

export default {
  name: 'Init',
  computed: {
    spoons() {
        return this.$store.getters.getSpoons;
    },
    user() {
        return this.$store.getters.getUser;
    }
  },    
  methods: {
      incrementSpoons() {
          this.$store.dispatch('INCREMENT_SPOONS');
      },
      decrementSpoons() {
          this.$store.dispatch('DECREMENT_SPOONS');
      },
      test() {
          this.$store.dispatch('SET_DISPLAY_NAME');
      },
      pushToMain() {
          this.$router.push('/user/dashboard');
      },
      logOut() {
        this.$store.dispatch('LOG_OUT');
      }
  }
}
</script>

<style scoped>
.init {
    background: #31C4F5;
}

.header {
    position: relative;
    height: 10rem;
    width: 100%;
    background: #169BD5;
}
.logo {
    position: absolute;
    width: 100%;
    height: 100%;
}

.tagline {
    font-size: 1.3rem;
    color: white;
    font-weight: bold;
    width: 100%;
}

.taglinewrapper {
    background: #169BD5;
}

.countmessage {
    color: white;
}

.spoonCount {
    color: white;
    font-size: 2rem;
}

.nextbtn {
    font-size: 1.4rem;
    font-weight: bold;
}

.footer {
    height: 12vh;
}

.incdec {
    border: 0;
    background-color: #31C4F5;
    color: white;
    font-size: 3rem;
}
</style>