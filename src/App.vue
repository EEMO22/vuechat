<template lang="pug" src="./app.pug" />

<script>
export default {
  name: 'App'
}
</script>

<style>
  :root {
    --sample-weight: 900;
 }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .sample {
    font-weight: var(--sample-weight);
  }
</style>
