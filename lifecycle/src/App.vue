<template>
  <div id="app">
    Vue Lifecycle
    <input v-model="text">
    {{text}}
    <button @click="$destroy()">Destroy</button>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      text: ""
    }
  },
  beforeCreate(){
    console.log("Vue oluşturulmadan önce")
  },
  created(){
    console.log("Vue oluşturuldu")
  },
  mounted(){
    console.log("Vue oluşturuldu ve doma bağlandı")
  },
  beforeUpdate(){
    console.log("Dom güncellenmeden önce")
  },
  updated(){
    console.log("Doma render edildi")
  },
  beforeDestroy(){
    console.log("Yok edilmeden önce")
  },
  destroyed(){
    console.log("Yok edildi")
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
