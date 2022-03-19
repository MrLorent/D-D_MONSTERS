<template>
  <MonsterCard monster_name="Patrick le Dragon"/>
</template>

<script>
import MonsterCard from './components/MonsterCard.vue'

export default {
  name: 'App',
  components: {
    MonsterCard
  }
}
</script>

<style>
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
