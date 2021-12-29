<template>
  <div id="app">
    <input v-model="text">
    {{getFullName()}}
    {{getFullName2}}
    
    <div>
      {{number}}
      <button @click="number++">İncraese</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      number: 0,
      text: "",
      name: 'Arif',
      lastname: 'Pehlivan'
    }
  },
  methods:{
    getFullName(){
      console.log("getFullName")
      return this.name + " " + this.lastname
    }
  },
  watch:{
    number(prevValue, value){
      console.log(prevValue)
      console.log(value)
    }

  },
  computed:{
    getFullName2(){
      console.log("getFullName2")
      return this.name + " " + this.lastname
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
