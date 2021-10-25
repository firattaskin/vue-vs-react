<template>
  <h1>Vue App</h1>
  <AddDeveloper @refresh="getDevelopers"/>
  <ListDeveloper :developers="developers" />
</template>

<script>
import AddDeveloper from './components/AddDeveloper.vue';
import ListDeveloper from './components/ListDeveloper.vue';
export default {
  name: 'App',
  components:{
    AddDeveloper,
    ListDeveloper
  },
  data(){
    return {
      developers:[]
    }
  },
  methods:{
    getDevelopers(){
      setTimeout(()=>{
        fetch('http://localhost:3002/developers')
        .then(res => res.json())
        .then(data => this.developers = data)
        .catch(err => console.log(err.message));
      },1000);
    }
  },
  mounted(){
    this.getDevelopers();
  }
}
</script>

<style src="@/App.css"></style>
