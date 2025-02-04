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
import Scratch from './components/scratch/ScratchCard';
import AutoMotionSlider from './components/automotionslider/AutoMotionSlider';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAutoMotion, setShowAutoMotion] = useState(true); // Default to showing AutoMotionSlider
  const [showSkills, setShowSkills] = useState(false); // Default to hiding Skills

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleAutoMotionVisibility = () => {
    setShowAutoMotion((prev) => !prev);
    setShowSkills((prev) => !prev); // When AutoMotionSlider is toggled, toggle Skills visibility
  };

  const toggleSkillsVisibility = () => {
    setShowSkills((prev) => !prev);
    setShowAutoMotion((prev) => !prev); // When Skills is toggled, toggle AutoMotionSlider visibility
  };

  return (
    <div className="body">
      <div className="particles">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="particle"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 7}s`, // Random animation duration between 3s to 6s
            }}
          ></div>
        ))}
      </div>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className='main'>
        <Home />
        <About />
        
        {/* Render AutoMotionSlider with the toggle function passed as prop */}
        {showAutoMotion && (
          <AutoMotionSlider toggleVisibility={toggleAutoMotionVisibility} />
        )}
        
        {/* Render Skills with the toggle function passed as prop */}
        {showSkills && (
          <Skills toggleVisibility={toggleSkillsVisibility} />
        )}

        <Qualification />
        <Portfolio />
        <Contact />
        <Scratch />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
