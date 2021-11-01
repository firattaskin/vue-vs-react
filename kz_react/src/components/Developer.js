import {useState} from 'react';
import {useContext} from 'react';
import {DeveloperContext} from '../context/DevelopersContext';

function Developer(props) {
    const [showAddress,setShowAddress] = useState(false);

    const {deleteDeveloper} = useContext(DeveloperContext);

    return (
        <div className="developer">
            <div className="actions">
                <h3 onClick={()=>setShowAddress(!showAddress)}>{props.developer.name}</h3>
                <div className="icons">
                    <span className="material-icons" onClick={()=>{deleteDeveloper(props.developer)}}>delete</span>
                </div>
            </div>
            {showAddress ? <div className="details"> <p>{props.developer.address}</p> </div>:''}
        </div>
    );
}

export default Developer;
