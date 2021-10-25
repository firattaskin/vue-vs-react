
import SingleDeveloper from "./SingleDeveloper";

function ListDeveloper(props) {

    return (
    <div>
        { props.developers.length ? props.developers.map((developer)=><SingleDeveloper key={developer.id} developer={developer} />) : 'Loading..' }
    </div>
    );
}

export default ListDeveloper;