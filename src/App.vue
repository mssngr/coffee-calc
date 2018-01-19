<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
html {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* padding: 16px; */
  background: white;
  font-size: 14px;
  box-sizing: border-box;
}
</style>
