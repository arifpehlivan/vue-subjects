<template>
  <div id="app">
    <img :src="logos"/>
    {{person}}
    <p>{{name.toUpperCase()}}</p>
    <p>{{name | upperCaseName}}</p>
  </div>
</template>

<script>
import logo from './assets/logo.png'

export default {
  name: 'App',
  data(){
    return{
      name: "Vue",
      logos: logo,
      person: require('../src/test.json')
    }
  },
  filters:{
    upperCaseName:function(value){
      return value.toUpperCase()
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
