import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        displayName: '',
        defaultSpoons: 0,
        spoons: 0,
        spoonsUsed: 3,
        user: null,
        userID: null,
        dayFlag: false
    },
    getters: {
        getUser: state => {
            return state.user;
        },
        getSpoons: state => {
            return state.spoons;
        },
        getDisplayName: state => {
            return state.displayName;
        },
        getUserID: state => {
            return state.userID;
        },
        getDayFlag: state => {
            return state.dayFlag;
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
        },
        SET_USER_ID() {
            //state.userId = Firebase.auth().currentUser.uid; 
        },
        SET_DISPLAY_NAME(state, displayName) {
            state.displayName = displayName;
        },
        SET_DAY_FLAG(state, dayFlag) {
            state.dayFlag = dayFlag;
        },
        LOG_OUT () {
            Firebase.auth().signOut();
        },
        LOG_IN() {
            // Firebase.auth().signInWithEmailAndPassword
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
        },
        SET_USER_ID (context) {
            context.commit('SET_USER_ID');
        },
        SET_DISPLAY_NAME (context) {
            context.commit('SET_DISPLAY_NAME');
        },
        LOG_OUT (context) {
            context.commit('LOG_OUT');
        }
    }
})

export default store;