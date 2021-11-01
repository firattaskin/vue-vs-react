import React, { createContext,useState } from 'react';

export const DeveloperContext = createContext();

const DeveloperContextProvider = (props) => {

    const [developers,setDevelopers] = useState([]);
    const getDevelopers = async () => {
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

    const addDeveloper = (developer)=>{
        fetch('http://localhost:3002/developers',{
            method:'POST',
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(developer)
        })
        .then((res)=>res.json())
        .then((data)=>{
            setDevelopers([...developers,data])
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