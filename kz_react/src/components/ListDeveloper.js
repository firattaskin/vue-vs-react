
import SingleDeveloper from "./SingleDeveloper";
import {useState} from 'react';

function ListDeveloper() {
    const [developers] = useState([
        {
            id:1,
            name:'Fırat Taşkın',
            address:'Şişli Merkez'
        }
    ]);

    return (
    <div>
        { developers.length ? developers.map((developer)=><SingleDeveloper key={developer.id} developer={developer} />) : '' }
    </div>
    );
}

export default ListDeveloper;