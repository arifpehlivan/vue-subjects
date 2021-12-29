<template>
  <div>
      Component A
      <component-b :name="name"/>
  </div>
</template>

<script>
import ComponentB from './ComponentB.vue'
export default {
    props:["name"],
  components: { ComponentB },
    
}
</script>

<style>

</style>