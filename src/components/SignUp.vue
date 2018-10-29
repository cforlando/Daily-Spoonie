<template>
    <div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Name</span>
            </div>
            <input type="text" v-model="name" placeholder="First and Last Name">
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Email</span>
            </div>
            <input type="text" v-model="email" placeholder="example@example.com">
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Password</span>
            </div>
            <input type="password" v-model="password" placeholder="Enter Password">
        </div>
        <button v-on:click="signUp">Sign Up</button>
    </div>
    <!-- At some point in the future, include capability to sign up via 
                social media -->
</template>

<script>
    import Firebase from 'firebase';

    export default {
        name: "SignUp",
        data: function() {
            return {
                email: '',
                password: '',
                name: ''
            }
        },
        methods: {
            signUp: function() {
                Firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    () => {
                        alert("account created ");
                        this.$router.push('/');
                    },
                    (err) => {
                        alert("there was an error " + err.message);
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>