import "./SingleDeveloper.css";
import {useState} from 'react';

function SingleDeveloper(props) {
    const [showAddress, setShowAddress] = useState(false);
    
    var deleteDeveloper = () => {
        fetch('http://localhost:3002/developers/'+props.developer.id,{method:'DELETE'}).
        then(()=>{ 
            props.setDevelopers( props.developers.filter(function(x){return x.id != props.developer.id;}) ) 
        })
        .catch((err)=>{console.log(err.message)});
    };

    return (
        <div className="developer">
            <div className="actions">
                <h3 onClick={()=>setShowAddress(!showAddress)}>{props.developer.name}</h3>
                <div className="icons">
                    <span className="material-icons" onClick={deleteDeveloper}>delete</span>
                </div>
            </div>
            {showAddress ? <div className="details"> <p>{props.developer.address}</p> </div>:''}
        </div>
    );
}

export default SingleDeveloper;

