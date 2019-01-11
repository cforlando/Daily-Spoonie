import Vue from 'vue';
import Vuex from 'vuex';
import Firebase from 'firebase';
import router from '../router/router';

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
            Firebase.auth().signOut().then(
                () => {
                    Firebase.auth().onAuthStateChanged(
                        (user) => {
                            if(!user) {
                                this.dispatch('SET_USER');
                                alert("You have successfully logged out.");
                                router.push('/');
                            }
                        } 
                    )
                })
            .catch(
                (error) => {
                    alert(error);
                });
        },
        LOG_IN(state, {email, password}) {
            Firebase.auth().signInWithEmailAndPassword(email, password).then(
                () => {
                    this.dispatch('SET_USER');
                    alert("Excellent! You're logged in!");
                    router.push('/');
                },
                (err) => {
                    alert("Uh oh! " + err.message);
                }
            );
        },
        SIGN_UP(state, {email, password}) {
            Firebase.auth().createUserWithEmailAndPassword(email, password).then(
                () => {
                    alert("account created ");
                    router.push('/');
                },
                (err) => {
                    alert("there was an error " + err.message);
                }
            );
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
            /* eslint-disable */
            // let ref = Admin.database().ref().child("users");
            // ref.on("value", (snapshot) => {
            //     console.log(snapshot.val());
            // }, (error) => {
            //     console.log(error.code);
            // });
            // console.log(ref);
            context.commit('SET_DISPLAY_NAME');
        },
        LOG_OUT (context) {
            context.commit('LOG_OUT');
        },
        LOG_IN(context, {email, password}) {
            context.commit('LOG_IN', {email, password});
        },
        SIGN_UP(context, {email, password}) {
            context.commit('SIGN_UP', {email, password});
        }
    }
})

export default store;