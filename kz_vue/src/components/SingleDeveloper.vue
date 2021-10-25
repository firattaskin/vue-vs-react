<template>
  <div class="developer">
    <div class="actions">
      <h3 @click="showAddress = !showAddress">{{ developer.name }}</h3>
      <div class="icons">
        <span class="material-icons" @click="deleteDeveloper">delete</span>
      </div>
    </div>
    <div v-if="showAddress" class="details">
      <p>{{ developer.address }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["developer"],
    methods:{
      deleteDeveloper(){
        fetch('http://localhost:3002/developers/'+this.developer.id,{method:'DELETE'}).
        then(()=>{this.$emit('delete',this.developer.id)})
        .catch((err)=>{console.log(err.message)});
      }
    },
    data() {
        return {
            showAddress: false
        };
    },
}
</script>

<style src="./SingleDeveloper.css">
</style>