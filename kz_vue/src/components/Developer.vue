<template>
  <div class="developer">
    <div class="actions">
      <h3 @click="showAddress = !showAddress">{{ developer.name }}</h3>
      <div class="icons">
        <span class="material-icons" @click="handleDelete">delete</span>
      </div>
    </div>
    <div v-if="showAddress" class="details">
      <p>{{ developer.address }}</p>
    </div>
  </div>
</template>

<script>


export default {
    inject:['storeDevelopers'],
    data(){
      return {
        showAddress:false
      }
    },
    methods:{
      handleDelete(){
        this.storeDevelopers.methods.deleteDeveloper(this.developer.id);
      }
    },
    name: 'Developer',
    props:['developer']
}
</script>
