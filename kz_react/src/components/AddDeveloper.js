import { useState,useContext } from 'react';
import { DeveloperContext } from '../contexts/DevelopersContext';
import './AddDeveloper.css';

function AddDeveloper(props) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const {addDeveloper} = useContext(DeveloperContext);

    const handleSubmit = (e)=>{
        addDeveloper(name,address);
        e.preventDefault();
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name:  </label>
            <input type="text" required value={name} onChange={ (e) => { setName(e.target.value)} } />
            <label>Address:</label>
            <textarea required value={address} onChange={ (e) => { setAddress(e.target.value)} } ></textarea>
            <button>Add Developer</button>
        </form>
    </div>
    );
}

export default AddDeveloper;