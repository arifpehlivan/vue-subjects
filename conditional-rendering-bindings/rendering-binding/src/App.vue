<template>
  <div id="app">
    Vue v-html v-if v-else v-show v-on v-model v-bind
    <div style="background: red; color:white" v-if='isActive'>Active</div>
    <div style="background: blue; color:white" v-else>Pasif</div>
    <div v-show="isActive" style="background: yellow; color:white">Active</div>
    <div>
      <button :disabled="!isActive" >Button Disabled</button>
    </div>
    <div v-html="htmlContent"></div>
    <button @click="isActive=!isActive">Change Situation</button>
    <input v-model="text">
    {{text}}
  </div>
</template>

<script>


export default {
  name: 'App',
    data(){
      return {
        text:"",
        htmlContent:"<h1>Hello</h1>",
        isActive: false
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
