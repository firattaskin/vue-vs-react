import { useState } from 'react';
import './AddDeveloper.css';

function AddDeveloper(props) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e)=>{
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
            console.log("a");
            props.refresh();
        })
        .catch((err)=>console.log(err.message));
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