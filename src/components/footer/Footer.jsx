import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title fs-1">Where To?</h1>
            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link fs-4">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link fs-4">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link fs-4">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link fs-4">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link fs-4">Contact</a>
                </li>
              
            </ul>
            <div className="footer__social">
                <a href="https://twitter.com/sanjay__sjay" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiTwitter />
                </a>
                <a href="https://github.com/sanjay-r-k" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/sanjay-r-19oct2002/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>   
                <a href="https://www.instagram.com/sanjay_sjay" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiInstagram />
                </a>   

            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;