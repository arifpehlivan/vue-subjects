<template>
  <div id="app">
    <div>
      <p ref="p1" id="p1">Hello World</p>
      <p ref="p2" id="p2">Hello World 2</p>
    </div>
    <div>
      <button @click="test">Click</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods:{
    test(){
      console.log(this.$refs)
      console.log('idp1',document.getElementById('p1').innerHTML)
      console.log('idp2',document.getElementById('p2').innerHTML)
      console.log(this.$refs.p1.innerHTML)
      console.log(this.$refs.p2.innerHTML)
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
