<template>
  <div id="app">
    <div v-for="item in colorList"  :key="item.color" :style='{backgroundColor:item.color,fontSize:item.font}'>Color</div>
    <div :class="text">Dynamic Class Bind</div>
    <input v-model="text"/>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      text: "",
      colorList:[
        {
          color: "red",
          font: "20px"
        },
        {
          color: "purple",
          font: "40px"
        },
        {
          color: "blue",
          font: "60px"
        }
      ]
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

.red{
  background: red
}

.blue{
  background: blue
}

.purple{
  background: purple
}
</style>
