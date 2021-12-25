<template>
  <div>
    First Number: {{number_1}}
    <div>
      Second Number: {{number_2}}
    </div>
    <button @click="sendToTop">Collect the numbers and send them to the upper component</button>
  </div>
</template>

<script>
export default {
  props: ['number_1', 'number_2'],
  methods:{
    sendToTop(){
      this.$emit("total", this.number_1 + this.number_2)
    }
  }
}
</script>

<style>

</style>