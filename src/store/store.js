import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        spoons: 0,
        spoonsUsed: 3,
        user: null
    },
    getters: {
        getUser: state => {
            return state.user;
        },
        getSpoons: state => {
            return state.spoons;
        }
    },
    mutations: {
        INCREMENT_SPOONS (state) {
            state.spoons++;
        },
        DECREMENT_SPOONS (state) {
            state.spoons--;
        },
        SET_USER (state) {
            state.user = Firebase.auth().currentUser;
        }
    },
    actions: {
        INCREMENT_SPOONS (context) {
            context.commit('INCREMENT_SPOONS');
        },
        DECREMENT_SPOONS (context) {
            context.commit('DECREMENT_SPOONS');
        },
        SET_USER (context) {
            context.commit('SET_USER');
        }
    }
})

export default store;