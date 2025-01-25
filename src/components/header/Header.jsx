import React, { useState, useEffect } from "react";
import './header.css';
import img from '../../assets/logo.png'
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="nav container">
        <div><img src={img} alt="logo"className="logo" width={50} height={50} /><a href="index.html" className="nav__logo">Sanjay</a></div>
        
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActiveNav("#home")}
                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <HiOutlineHome className="nav__icon" />Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <HiOutlineUser className="nav__icon" />About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav("#skills")}
                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <HiOutlineBadgeCheck className="nav__icon" />Skills
              </a>
            </li>
           
            <li className="nav__item">
              <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                <HiOutlinePhotograph className="nav__icon" />Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                <HiOutlineMail className="nav__icon" />Contact
              </a>
            </li>
            <li className="nav__item">
              <label className="switch">
                <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                <span className="slider round">
                  {isDarkMode ? "🌞" : "🌙"}
                </span>
              </label>
            </li>
          </ul>
          <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <HiOutlineMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;