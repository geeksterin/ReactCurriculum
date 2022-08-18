import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Academic_Details from './Components/Academic_Details';


function App() {
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
    </div>
     <Header/>
     <Experience/>
     <Skills/>
     <Academic_Details/>
     </>
  );
}

export default App;
