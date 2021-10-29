
import { useContext,useEffect } from "react";
import { DeveloperContext } from "../contexts/DevelopersContext";
import SingleDeveloper from "./SingleDeveloper";

function ListDeveloper(props) {

    const {developers,getDevelopers} = useContext(DeveloperContext);

    useEffect(()=>{
       getDevelopers();
    },[]);

    return (
    <div>
        { developers.length ? developers.map(
            (developer)=> <SingleDeveloper key={developer.id} developer={developer} developers={developers} setDevelopers={props.setDevelopers}/>
        ) : 'Loading..' }
    </div>
    );
}

export default ListDeveloper;