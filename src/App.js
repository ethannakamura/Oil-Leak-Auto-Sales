import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';

function App() {
  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Foxes! Welcome to React. This is a functional component/function-based component.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
