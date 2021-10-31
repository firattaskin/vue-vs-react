<template>
    <form @submit.prevent="handleSubmit">
        <label>Name:  </label>
        <input type="text" required v-model="name">
        <label>Address:</label>
        <textarea required v-model="address"></textarea>
        <button>Add Developer</button>
    </form>
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
    name:'AddDeveloper',
    data(){
        return {
            name:'',
            address:''
        }
    },
    methods:{
        handleSubmit(){
            let new_developer = {
                name:this.name,
                address:this.address
            }
            this.store.addDeveloper(new_developer);
        }
    }
}
</script>

<style src='./AddDeveloper.css'></style>