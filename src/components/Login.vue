<template>
    <div>
        <div class="form-group" :class="{ 
            'form-group--error': $v.email.$error, 
            'form-group--valid': !$v.email.$error && $v.email.$dirty
            }">
            <label class="form__label">Email</label>
            <input class="form-control" id="login" type="email" v-model.trim="$v.email.$model" placeholder="Email" v-on:keyup.enter="login">
        </div>
        <div class="error" v-if="!$v.email.email">Must look like an email address</div>
        <div class="valid" v-if="!$v.email.$error && $v.email.$dirty">Email address is valid</div>
        <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
            <label class="form__label">Password</label>
            <input class="form-control" type="password" v-model="password" placeholder="Password" v-on:keyup.enter="login">
        </div>
        <div>
            <button class="btn btn-secondary" v-on:click="login">Log In</button>
            <p>Don't have an account?</p>
            <router-link to="/signup"><button class="btn btn-secondary">Click Here to Sign Up</button></router-link>
        </div>
    </div>
</template>

<script>
    import { Firebase } from '../config/fbconfig.js'
    import { required, email } from 'vuelidate/lib/validators'

    export default {
        name: "Login",
        data: function() {
            return {
                email: '',
                password: ''
            }        
        },
        methods: {
            login: function() {
                if(this.$v.email.$error) {
                    alert("The email input is invalid");
                } else if(this.email.length <= 0) {
                    alert("No email address present");
                } else if(this.password.length <= 0) {
                    alert("No password present");
                } else {
                    Firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                        () => {
                            this.$store.dispatch('SET_USER');
                            alert("Excellent! You're logged in!");
                            this.$router.push('/');
                        },
                        (err) => {
                            alert("Uh oh! " + err.message);
                        }
                    );
                }
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required
            }
        }
    }
</script>

<style scoped>

input {
    box-shadow: none;
}

.form-group {
    color: black;
}

.form-group input {
    padding: 2px 5px 2px 5px;
    border-radius: 10px;
    border-color: gray;
    border-width: 2px;
}

.form-group--error {
    color: red;
}

.form-group--error input {
    border-color:red;
}

.form-group--valid input {
    border-color: green;
}

.error {
    color: red;
}

.valid {
    color: green;
}

</style>