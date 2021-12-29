<template>
  <div>
      Component A
      <ul>
        <!-- <li v-for="item in $store.getters.getList" :key="item">{{item}}</li> -->
        <li v-for="item in getList" :key="item">{{item}}</li>

      </ul>
      <!-- <component-b :name="name"/> -->
      <component-b/>
  </div>
</template>

<script>
import ComponentB from './ComponentB.vue'
import {mapGetters} from 'vuex'
export default {
    // props:["name"],
  components: { ComponentB },
  computed:{
    ...mapGetters(['getList'])
  }
}
</script>

<style>

</style>