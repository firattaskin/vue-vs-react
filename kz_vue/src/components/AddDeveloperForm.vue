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

export default {
    inject:['storeDevelopers'],
    name: 'AddDeveloperForm',
    data(){
        return {
            name:'',
            address:''
        }
    },
    methods:{
        handleSubmit(){
            let developer = {
                name:this.name,address:this.address
            }
            this.storeDevelopers.methods.addDeveloper(developer);
            this.name = '';
            this.address = '';
        }
    }
}
</script>
