import { useState,useContext} from "react";
import {DeveloperContext} from '../context/DevelopersContext';


function AddDeveloperForm() {
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');

    const {addDeveloper} = useContext(DeveloperContext);
    
    const handleSubmit = (e) => {
        let developer = {
            name,address
        }
        addDeveloper(developer);
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:  </label>
                <input type="text" required value={name} onChange={ (e) => { setName(e.target.value)} } />
                <label>Address:</label>
                <textarea required value={address} onChange={ (e) => { setAddress(e.target.value)} } ></textarea>
                <button>Add Developer</button>
            </form>
        </>
    );
}

export default AddDeveloperForm;
