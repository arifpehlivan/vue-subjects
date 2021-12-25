<template>
  <div id="app">
    <div>
      Vue Component Communication
    </div>
    <Total :number_1="num_1" :number_2="num_2"/>
  </div>
  
</template>

<script>
import Total from './components/Total.vue'

export default {
  name: 'App',
  data(){
    return{
      num_1:100,
      num_2:200
    }
  },
  components: {
    Total
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
