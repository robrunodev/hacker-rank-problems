import logo from './logo.svg';
import './App.css';
import { useApp } from './hooks/useApp';

function App() {

  const { counter, handleAddCounter } = useApp()

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {counter}
        </a>
        <button
          onClick={handleAddCounter}>Add Counter</button>
      </header>
    </div>
  );
}

export default App;
