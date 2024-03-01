
<template>
  <nav v-if="!getGame._id">
    <!-- <router-link :to="{name: 'dashboard'}"> <i class="fa-solid fa-gauge"></i>Dashboard</router-link> | -->
    <router-link :to="{name: 'games'}"><i class="fa-solid fa-baseball"></i>Resultados</router-link>
  </nav>
  <hr>
  <router-view/>
</template>

<script setup lang="ts">
import { useCaptureLineUp } from './modules/games/composable/useStartGame';

const { getGame } = useCaptureLineUp();

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-active {
  color: #14b8a6;
}

button {
  background-color: #14b8a6;
}
</style>
