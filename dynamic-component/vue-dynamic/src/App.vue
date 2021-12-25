<template>
  <div id="app">
    <button  @click="component='test'">Activate test component</button>
    <button @click="component='test2'">Activate test2 component</button>
    <keep-alive>
      <component :is="component"/>
    </keep-alive>
  </div>
</template>

<script>
import Test2 from './components/Test2.vue'

export default {
  name: 'App',
  data(){
    return{
      component: 'test'
    }
  },
  components: {
    Test: () => import('./components/Test.vue'),
    Test2
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
