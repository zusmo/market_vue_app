<template>
  <div id="app">
    <div id="nav">
      <Navigation />      
      <router-link to="/home"></router-link> 
      <router-link to="/login"></router-link>     
    </div>
    <router-view />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: {
    Navigation
  }
}
</script>