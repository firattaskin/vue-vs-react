<template>
  <h1>Vue App</h1>
  <AddDeveloperForm/>
  <ListDevelopers/>
</template>

<script>
import AddDeveloperForm from './components/AddDeveloperForm.vue';
import ListDevelopers from './components/ListDevelopers.vue';

import storeDevelopers from './store/Developers';

export default {
  provide:{
    storeDevelopers
  },
  components:{
    AddDeveloperForm,ListDevelopers
  },
  name: 'App'
}
</script>

<style src="@/App.css"></style>
