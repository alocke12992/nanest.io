<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Layout from '@/layout/index.vue'

@Component({
  components: {
  Layout
  }
  })

export default class App extends Vue {}
</script>

<style>

body {
  margin: 0;
}

/* Global Styles */
.input-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
}

.input-wrapper > label {
  width: 100%;
  text-align: left;
}

.input-wrapper > input {
  width: 100%;
  min-height: 2.5rem;
  outline: 0;
  border: 1px solid #c3c3c3;
  border-radius: 0.2rem;
  font-size: 1rem;
  padding: 0 0.5rem;
  margin-top: 0.5rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
