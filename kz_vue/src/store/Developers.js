import {reactive} from 'vue';

const state = reactive({
    developers:[]
});

const methods = {};

methods.getDevelopers = () => {
    setTimeout(()=>{
        fetch('http://localhost:3002/developers')
        .then(res => res.json())
        .then(data => state.developers = data)
        .catch(err => console.log(err.message));
    },1000);
}

methods.deleteDeveloper = (developer_id) => {
    fetch('http://localhost:3002/developers/'+developer_id,{method:'DELETE'})
    .then(()=>{
        state.developers = state.developers.filter((x)=>{
            return x.id !== developer_id;
        });
    })
    .catch((err)=>{console.log(err.message)});
}

methods.addDeveloper = (developer) => {
    fetch('http://localhost:3002/developers',{
        method:'POST',
        headers:{ 'Content-Type':'application/json'},
        body: JSON.stringify(developer)
    })
    .then((res)=>res.json())
    .then((data)=>{
        state.developers = [...state.developers,data];
    })
    .catch((err)=>console.log(err.message));
}

export default {
    state,
    methods
}