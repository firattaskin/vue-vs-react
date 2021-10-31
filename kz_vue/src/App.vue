<template>
  <h1>Vue App</h1>
  <AddDeveloper/>
  <ListDeveloper/>
</template>

<script>
import {provide} from 'vue';

import AddDeveloper from './components/AddDeveloper.vue';
import ListDeveloper from './components/ListDeveloper.vue';

import store from './store/developers';

export default {
  setup(){
    provide('store', store)
    return {
      store,
    }
  },
  name: 'App',
  components:{
    AddDeveloper,
    ListDeveloper
  },
  data(){
    return {
    }
  },
  methods:{
  },
  mounted(){
  }
}
</script>

<style src="@/App.css"></style>
