import logo from './tick.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Tick
        </h1>

        <p>
          A minimal todo list app, utilising <b>React</b> and <b>Firebase</b>.<br></br>
          <a
            className="App-link"
            href="https://github.com/jmemcc"
            target="_blank"
            rel="noopener noreferrer"
          >
              jmemcc
          </a>
          &nbsp; -  2021.
        </p>
      </header>
    </div>
  );
}

export default App;
