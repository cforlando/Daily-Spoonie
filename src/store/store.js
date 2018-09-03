import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        spoons: 0,
        spoonsUsed: 3,
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