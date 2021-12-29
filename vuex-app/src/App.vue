<template>
  <div id="app">
    <div>
      <component-a :name="name"/>
    </div>
    <div>
      <component-c/>
    </div>
    <button @click="addNumber">Add number</button>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue'
import ComponentC from './components/ComponentC.vue'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  methods:{
    ...mapActions(["addNewNumber"]),
    addNumber(){
      // this.$store.dispatch("addNewNumber", 10)
      this.addNewNumber(10)
    }
  },
  data(){
    return{
      name: 'Vue'
    }
  },
  components: {
    ComponentA,
    ComponentC
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
