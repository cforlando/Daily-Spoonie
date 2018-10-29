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
        </div>
    </div>
    <div v-if="!userIsLoggedIn" class="footer">
        <router-link to="/login"><button class="nextbtn btn btn-secondary">Login</button></router-link>
    </div>
    <div v-if="userIsLoggedIn" class="footer">
        <button @click="logOut" class="nextbtn btn btn-secondary">Logout</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { Firebase } from "../config/fbconfig.js";

export default {
  name: 'Init',
  data: function() {
     return {
        userLogin: Firebase.auth().onAuthStateChanged(
            (user) => {
                if(user) {
                    this.userLogin = Firebase.auth().currentUser;
                } else {
                    this.userLogin = false;
                }
            } 
        )
    }
  },
  computed: {
    spoons() {
        return this.$store.state.spoons;
    },
    userIsLoggedIn() {
        return this.$store.state.userLogin;
    }
  },    
  methods: {
      incrementSpoons() {
          this.$store.commit('incrementSpoons');
      },
      decrementSpoons() {
          this.$store.commit('decrementSpoons');
      },
      pushToMain() {
          this.$router.push('/user/dashboard');
      },
      logOut() {
            Firebase.auth().signOut().then(
                () => {
                    Firebase.auth().onAuthStateChanged(
                        (user) => {
                            if(!user) {
                                this.user=false;
                                alert("You have successfully logged out.");
                            }
                        } 
                    )
                })
            .catch(
                (error) => {
                    alert(error);
                });
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