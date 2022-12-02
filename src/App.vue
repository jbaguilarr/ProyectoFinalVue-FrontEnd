<template>
  <AppMenu />
  <router-view />
</template>

<script>
import AppMenu from './components/AppMenu.vue'

export default {
  name: 'App',
  components: {
    AppMenu
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
