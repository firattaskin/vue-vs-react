import "./SingleDeveloper.css";
import {useState} from 'react';

function SingleDeveloper(props) {
    const [showAddress, setShowAddress] = useState(false);
    
    return (
        <div className="developer">
            <div className="actions">
                <h3 onClick={()=>setShowAddress(!showAddress)}>{props.developer.name}</h3>
                <div className="icons">
                    <span className="material-icons">delete</span>
                </div>
            </div>
            {showAddress ? <div className="details"> <p>{props.developer.address}</p> </div>:''}
        </div>
    );
}

export default SingleDeveloper;

