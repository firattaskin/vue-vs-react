<template>
  
  <div v-if="developers.length">
    <div v-for="developer in developers" v-bind:key="developer.id">
      <SingleDeveloper v-bind:developer="developer" />
    </div>
  </div>
  <div v-else>
    Loading...
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
      developers:[],
    }
  },
  mounted(){
    setTimeout(()=>{
      fetch('http://localhost:3002/developers')
      .then(res => res.json())
      .then(data => this.developers = data)
      .catch(err => console.log(err.message));
    },1000);
  }
}
</script>

<style>
</style>