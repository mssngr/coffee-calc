<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
:root {
  --primary-color: blue;
}

#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0.5em;
  width: 100vw;
  height: 100vh;
  background: white;
  font-size: calc(1.75vw + 1.75vh);
}
</style>
