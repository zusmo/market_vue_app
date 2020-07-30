<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">My App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/inventory">Inventory<span class="sr-only">(current)</span></router-link>
            </li>
            <button type="button" v-on:click="logOut" class="btn btn-danger ml-5">LOG OUT</button>
          </ul>
        </div>
      </nav>
</template>

<script>
import firebase from  "../common/firebase_setup";
export default {
    name:'Navigation',
    data() {
      return {
        isLoggedIn: false,
        currentUser: false
      }
    },
    methods: {
      logOut() {
        firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/home');
        });
      }
    }
}
</script>
