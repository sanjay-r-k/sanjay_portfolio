import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram, FiHeart} from 'react-icons/fi';
import {MdAlternateEmail, MdAddCall, MdOutlineLocationCity} from 'react-icons/md';
import {FaArrowCircleRight} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                
                <div className='row'>
                    <div className='col-md-4'>
                        <h5>Sanjay's Portfolio</h5>
                        <p className='fs-6'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                        <p className='fs-6'>Keep Rising 🚀. Connect with me over live chat!</p></div>
                    <div className='col-md-4'>
                        <h5>Quick Links</h5>

                        <ul className="footer__list">
                            <li>
                                <a href="#home" className="footer__link fs-5"> <FaArrowCircleRight className='fs-6'/> Home</a>
                            </li>
                            <li>
                                <a href="#about" className="footer__link fs-5"><FaArrowCircleRight className='fs-6'/> About</a>
                            </li>
                            <li>
                                <a href="#skills" className="footer__link fs-5"><FaArrowCircleRight className='fs-6'/> Skills</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="footer__link fs-5"><FaArrowCircleRight className='fs-6'/> Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer__link fs-5"><FaArrowCircleRight className='fs-6'/> Contact</a>
                            </li>

                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <h5>Contact Info</h5>
                            <div className='fs-6'>
                                <p><MdAddCall/>91 7904992249</p>
                                <p ><MdAlternateEmail/> sanjayravikomathi@gmail.com</p>
                                <p><MdOutlineLocationCity/>Tindivanam, Villupuram-604001</p></div>


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
                        </div>
                    </div>
                </div>



                <span className="footer__copy"></span>
            </div>
            <hr />
            <p className='fs-6 foot'>Designed with <FiHeart/> By Sanjay</p>
        </footer>
    );
}

export default Footer;