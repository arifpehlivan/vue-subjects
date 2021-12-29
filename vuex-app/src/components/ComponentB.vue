<template>
  <div>
      Component B <!-- {{name}} -->
      <p>
         Name from store {{getName}}
      </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['getName'])
  }
}
</script>

<style>

</style>