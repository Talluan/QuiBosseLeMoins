<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Headbar from './components/Headbar.vue';
import Footbar from './components/Footbar.vue';
</script>

<template>
    
    <div class="app">
      <Headbar />      
      <RouterView />
      
      <Footbar />
    </div>

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
