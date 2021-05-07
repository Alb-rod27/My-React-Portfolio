import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [AboutSelected, setAboutSelected] = useState(true);
  const [PortfolioSelected, setPortfolioSelected] = useState(false);
  const [ResumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        AboutSelected={AboutSelected}
        setAboutSelected={setAboutSelected}
        PortfolioSelected={PortfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        ResumeSelected={ResumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>
        {contactSelected
          ? (<><ContactForm></ContactForm></>)
          : (<></>)}
        {AboutSelected
          ? (<><About></About> </>)
          : (<></>)}
        {PortfolioSelected
          ? (<><Portfolio></Portfolio></>)
          : (<></>)}
        {ResumeSelected
          ? (<><Resume></Resume></>)
          : (<></>)}
      </main>

    </div>
  );
}

export default App;
