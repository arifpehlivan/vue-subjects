<template>
  <div id="app">
    <div>Main Layout
      <button @click="routesPage('/')">Main Page</button>
      <button @click="routesPage('/users')">Users Page</button>
      <router-link to="/" tag="a">Main Page</router-link>
      <router-link to="/users" tag="a">Users Page</router-link>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    routesPage(route){
      this.$router.push(route)
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


