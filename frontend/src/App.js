import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const makeApiRequest = () => {
  axios("/api/testwithcurrentuser").then( response => {
    console.log('API response: ', response)
  })
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Change from docker !
          Hello DEVELOPMENT !!!
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
      <button onClick={makeApiRequest}>Make request</button>
    </div>
  );
}

export default App;
