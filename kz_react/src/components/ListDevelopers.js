import Developer from './Developer';
import {useContext,useEffect} from 'react';

import {DeveloperContext} from '../context/DevelopersContext';

function ListDevelopers() {
    const {developers,getDevelopers} = useContext(DeveloperContext);

    useEffect(()=>{
        getDevelopers();
        // eslint-disable-next-line
    },[]);

    return (
        <>
            {
                developers.length
                ? developers.map(developer => <Developer developer={developer} key={developer.id} /> )
                : <label>Loading...</label>
            } 
        </>
    );
}

export default ListDevelopers;