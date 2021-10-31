<template>
  <div v-if="store.state.developers">
    <div v-for="developer in store.state.developers" v-bind:key="developer.id">
      <SingleDeveloper v-bind:developer="developer" />
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import SingleDeveloper from '../components/SingleDeveloper.vue';
import {inject} from 'vue';

export default {
  setup(){
    const store = inject('store');
    return {
      store
    }
  },
  components:{
    SingleDeveloper
  },
  methods:{
  },
  data(){
    return {
    }
  },
  mounted(){
    this.store.getDevelopers();
  }
}
</script>

<style>
</style>