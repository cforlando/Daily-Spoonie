import Vue from 'vue';
import Vuex from 'vuex';
import { Firebase } from "../config/fbconfig.js";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        spoons: 0,
        spoonsUsed: 3,
        userLogin: Firebase.auth().onAuthStateChanged(
            (user) => {
                if(user) {
                    this.userLogin = Firebase.auth().currentUser;
                } else {
                    this.userLogin = false;
                }
            } 
        ),
    },
    mutations: {
        incrementSpoons (state) {
            state.spoons++;
        },
        decrementSpoons (state) {
            state.spoons--;
        }
    }
})

export default store;