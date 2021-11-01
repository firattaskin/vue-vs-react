<template>
    <div v-for="developer in storeDevelopers.state.developers" :key="developer.id" >
        <Developer :developer="developer" />
    </div>
</template>

<script>
import Developer from './Developer.vue';

export default {
    inject:['storeDevelopers'],
    components: { Developer },
    name: 'ListDevelopers',
    mounted(){
        this.storeDevelopers.methods.getDevelopers();
    }
}
</script>
