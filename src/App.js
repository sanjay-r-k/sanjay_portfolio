import './App.css';
import React, { useState } from "react"; 
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';

import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  }
  return (
    <div className='body'>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
