<template>
  <div id="app">
    <div id="nav">
      <Navigation />         
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