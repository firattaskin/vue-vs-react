import './App.css';
import AddDeveloper from './components/AddDeveloper.js';
import ListDeveloper from './components/ListDeveloper.js';
import DeveloperContextProvider from './contexts/DevelopersContext';


function App() {

  return (
    <div id="app">
      <h1>React App</h1>
      <DeveloperContextProvider>
        <AddDeveloper/>
        <ListDeveloper/>
      </DeveloperContextProvider>
    </div>
  );
}

export default App;
