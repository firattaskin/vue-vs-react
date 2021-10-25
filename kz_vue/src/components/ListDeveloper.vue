<template>
  
  <div v-if="developers.length">
    <div v-for="developer in developers" v-bind:key="developer.id">
      <SingleDeveloper v-bind:developer="developer" @delete="handleDelete"/>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import SingleDeveloper from '../components/SingleDeveloper.vue';

export default {
  props:['developers'],
  components:{
    SingleDeveloper
  },
  methods:{
    handleDelete(id){
      this.$emit('delete',id)
    }
  },
  data(){
    return {
    }
  }
}
</script>

<style>
</style>