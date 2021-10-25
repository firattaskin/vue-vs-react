import './App.css';
import AddDeveloper from './components/AddDeveloper.js';
import ListDeveloper from './components/ListDeveloper.js';
import {useState,useEffect} from 'react';


function App() {
  const [developers,setDevelopers] = useState([]);

  useEffect(() => {
      setTimeout(()=>{
          fetch('http://localhost:3002/developers')
          .then(res => res.json())
          .then(data => setDevelopers(data))
          .catch(err => console.log(err.message));
      },1000);
  },[]);

  return (
    <div id="app">
      <h1>React App</h1>
      <AddDeveloper />
      <ListDeveloper developers={developers} setDevelopers={setDevelopers} />
    </div>
  );
}

export default App;
