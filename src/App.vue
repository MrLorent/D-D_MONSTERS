<template>
  <MonstersList/>
</template>

<script>
import MonstersList from './components/MonstersList.vue'

export default {
  name: 'App',
  components: {
    MonstersList
  }
}
</script>

<style>
  :root {
    /* COLORS */
    --black: #000000;
    --dark-grey: #121212;
    --white: #ffffff;

    /* HEADER */
    --header-height: 8vh;

    /* FOOTER */
    --footer-height: 6vh;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
</style>
