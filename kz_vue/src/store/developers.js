import {reactive} from 'vue';

const state = reactive({
    developers:[]
});

const getDevelopers = () => {
    setTimeout(()=>{
        fetch('http://localhost:3002/developers')
        .then(res => res.json())
        .then(data => state.developers = data)
        .catch(err => console.log(err.message));
    },1000);
}

const deleteDeveloper = (developer_id) => {
    fetch('http://localhost:3002/developers/'+developer_id,{method:'DELETE'})
    .then(()=>{
        state.developers = state.developers.filter((x)=>{
            return x.id !== developer_id;
        });
    })
    .catch((err)=>{console.log(err.message)});
}

const addDeveloper = (new_developer) => {
    fetch('http://localhost:3002/developers',{
        method:'POST',
        headers:{ 'Content-Type':'application/json'},
        body: JSON.stringify(new_developer)
    })
    .then(()=>{
        getDevelopers();
    })
    .catch((err)=>console.log(err.message));
}

export default {
    state,
    getDevelopers,
    deleteDeveloper,
    addDeveloper
}