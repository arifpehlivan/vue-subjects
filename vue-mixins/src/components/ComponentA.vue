<template>
  <div>
      <input v-model="text"/><br/>
      <button @click="sendMessage">Send message to screen</button>
  </div>
</template>

<script>
import MessageMixins from '../mixins/MessageMixins'
export default { 
    mixins:[MessageMixins]
}
</script>

<style>

</style>