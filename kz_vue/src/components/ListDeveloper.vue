<template>
  <div v-if="developers.length">
    <div v-for="developer in developers" v-bind:key="developer.id">
      <SingleDeveloper v-bind:developer="developer" />
    </div>
  </div>
</template>

<script>
import SingleDeveloper from '../components/SingleDeveloper.vue';

export default {
  components:{
    SingleDeveloper
  },
  data(){
    return {
      developers:[
        {
          id:1,
          name:'Fırat Taşkın',
          address:'Şişli Merkez'
        }
      ],
    }
  }
}
</script>

<style>
</style>