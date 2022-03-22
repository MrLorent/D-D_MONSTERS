<template>
  <main>
    <MonstersList/>
  </main>
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
  /*------------ GLOBALS -------------*/
  :root {
    /* COLORS */
    --black: #121212;
    --deep-dark-grey: #181818;
    --dark-grey: #202020;
    --light-grey: #323232;

    --green: #00c587;

    --discret-font-color: #838383;
    --white: #ffffff;

    /* HEADER */
    --header-height: 110px;

    /* FOOTER */
    --footer-height: 0vh;
  }

  /*------------ GENERAL -------------*/
  html,
  body,
  main {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  h1
  {
    font-size: 1.25em;
    margin: 5px 0 0 0;
  }

  ul {
      list-style: none;
      padding: 0;
      margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--deep-dark-grey);
    color: var(--white);
    width: 100%;
    height: 100%;
  }
</style>
