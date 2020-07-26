<template>
    <div class="container">
        <div class="row justify-content-center pt-5 mt-5 m-1">
            <div class="col-md-4 formulario">
                <form @submit.prevent="authenticate">
                    <div class="form-group text-center pt-3">
                        <h1 class="">Log In</h1>
                    </div>
                    <div class="form-group mx-sm-4 pt-3">
                        <input type="text" class="form-control" placeholder="Email" name="" id="email" v-model="email">
                    </div>
                    <div class="form-group mx-sm-4 pb-4">
                        <input type="password" class="form-control" placeholder="Password" name="" id="password"  v-model="password">
                    </div>
                    <div class="col text-center">
                        <input type="button" class="btn btn-primary" value="Submit" @click.prevent="authenticate">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import firebase from  "../common/firebase_setup";
import "firebase/auth";
    export default {
    name:'Login',
    data() {
      return {
          email:"",
          password:""
      };
    },

    methods: {
        async authenticate() {
            try{
                await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                
                this.$store.commit("setUser", { email: this.email});
                this.$router.push({name: "inventory"});
            } catch(error){ 
                alert('Usuario Invalido');
            }
            
        }
    }
    
};
</script>

