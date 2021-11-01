import './App.css';
import AddDeveloperForm from './components/AddDeveloperForm';
import ListDevelopers from './components/ListDevelopers';
import DeveloperContextProvider from './context/DevelopersContext';

function App() {
    
    return (
    <>
      <h1>React App</h1>
      <DeveloperContextProvider>
        <AddDeveloperForm/>
        <ListDevelopers/>
      </DeveloperContextProvider>
    </>
  );
}

export default App;
