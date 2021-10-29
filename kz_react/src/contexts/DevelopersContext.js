import React, { createContext,useState } from 'react';

export const DeveloperContext = createContext();

const DeveloperContextProvider = (props) => {

    const [developers,setDevelopers] = useState([]);
    const getDevelopers = () => {
        setTimeout(()=>{
            fetch('http://localhost:3002/developers')
            .then(res => res.json())
            .then(data => {
                setDevelopers(data)
            })
            .catch(err => console.log(err.message));
        },1000);
    }

    const deleteDeveloper = (developer) => {
        fetch('http://localhost:3002/developers/'+developer.id,{method:'DELETE'})
        .then(()=>{ 
            setDevelopers( developers.filter(function(x){return x.id !== developer.id;}) ) 
        })
        .catch((err)=>{console.log(err.message)});
    };

    const addDeveloper = (name,address)=>{
        let developer = {
            name:name,
            address:address
        }
        fetch('http://localhost:3002/developers',{
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(developer)
        })
        .then(()=>{
            getDevelopers();
        })
        .catch((err)=>console.log(err.message));
    }

    return (
        <DeveloperContext.Provider value={{developers,getDevelopers,deleteDeveloper,addDeveloper}}>
            {props.children}
        </DeveloperContext.Provider>
    )

}

export default DeveloperContextProvider;