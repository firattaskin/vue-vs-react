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
import {inject} from 'vue';

export default {
    setup(){
      const store = inject('store');
      return {
        store
      }
    },
    props: ["developer"],
    methods:{
      deleteDeveloper(){
        this.store.deleteDeveloper(this.developer.id);
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