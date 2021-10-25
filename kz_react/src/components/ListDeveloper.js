
import SingleDeveloper from "./SingleDeveloper";

function ListDeveloper(props) {

    return (
    <div>
        { props.developers.length ? props.developers.map(
            (developer)=> <SingleDeveloper key={developer.id} developer={developer} developers={props.developers} setDevelopers={props.setDevelopers}/>
        ) : 'Loading..' }
    </div>
    );
}

export default ListDeveloper;