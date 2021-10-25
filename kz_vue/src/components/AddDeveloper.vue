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
    name:'AddDeveloper',
    data(){
        return {
            name:'',
            address:''
        }
    },
    methods:{
        handleSubmit(){
            let developer = {
                name:this.name,
                address:this.address
            }
            fetch('http://localhost:3002/developers',{
                method:'POST',
                headers:{ 'Content-Type':'application/json'},
                body: JSON.stringify(developer)
            })
            .then(()=>{
                console.log("geldi1");
                this.$emit('refresh');
            })
            .catch((err)=>console.log(err.message));
        }
    }
}
</script>

<style src='./AddDeveloper.css'></style>