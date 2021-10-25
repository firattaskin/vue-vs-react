import './App.css';
import AddDeveloper from './components/AddDeveloper.js';
import ListDeveloper from './components/ListDeveloper.js';
import {useState,useEffect} from 'react';


function App() {
  const [developers,setDevelopers] = useState([]);

  var getDevelopers = () => {
    setTimeout(()=>{
        fetch('http://localhost:3002/developers')
        .then(res => res.json())
        .then(data => setDevelopers(data))
        .catch(err => console.log(err.message));
    },1000);
  }

  useEffect(() => {
    getDevelopers();
  },[]);

  return (
    <div id="app">
      <h1>React App</h1>
      <AddDeveloper refresh={getDevelopers}/>
      <ListDeveloper developers={developers} setDevelopers={setDevelopers} />
    </div>
  );
}

export default App;
