<template>
  <h1>Vue App</h1>
  <AddDeveloper />
  <ListDeveloper />
</template>

<script>
import AddDeveloper from './components/AddDeveloper.vue';
import ListDeveloper from './components/ListDeveloper.vue';
export default {
  name: 'App',
  components:{
    AddDeveloper,
    ListDeveloper
  }
}
</script>

<style src="@/App.css"></style>
