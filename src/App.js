import React from 'react';
import About from './components/About';
import './App.css';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [AboutSelected, setAboutSelected] = useState(true);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [ResumeSelected, setResumeSelected] = useState(false);
  
  return (
    <div>
      <Nav>
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        AboutSelected={AboutSelected}
        setAboutSelected={setAboutSelected}
        PortfolioSelected={PortfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        ResumeSelected={ResumeSelected}
        setResumeSelected={setResumeSelected}
      </Nav>
      <header className="App-header">

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
      </header>
    </div>
  );
}

export default App;
