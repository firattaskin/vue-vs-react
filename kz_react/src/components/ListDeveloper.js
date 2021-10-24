
import SingleDeveloper from "./SingleDeveloper";
import {useState,useEffect} from 'react';

function ListDeveloper() {
    const [developers,setDevelopers] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            fetch('http://localhost:3002/developers')
            .then(res => res.json())
            .then(data => setDevelopers(data))
            .catch(err => console.log(err.message));
        },1000);
    },[]);

    return (
    <div>
        { developers.length ? developers.map((developer)=><SingleDeveloper key={developer.id} developer={developer} />) : 'Loading..' }
    </div>
    );
}

export default ListDeveloper;