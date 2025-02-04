import React from 'react';
import "./footer.css";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';
import { MdAddCall, MdKeyboardArrowLeft, MdEmail} from 'react-icons/md';
import {FaLocationDot} from 'react-icons/fa6';
import img from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                
                <div className='row'>
                    <div className='col-md-4'>
                        <h5> <img src={img} alt="logo" className='logo__container' />Sanjay's Portfolio</h5>
                        <p className='fs-6'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                        <p className='fs-6'>Keep Rising 🚀. Connect with me over live chat!</p></div>
                    <div className='col-md-4'>
                        <h5>Quick Links</h5>

                        <ul className="footer__list">
                            <li>
                                <a href="#home" className="footer__link fs-6"> <MdKeyboardArrowLeft  className='fs-5'/> Home</a>
                            </li>
                            <li>
                                <a href="#about" className="footer__link fs-6"> <MdKeyboardArrowLeft  className='fs-5'/> About</a>
                            </li>
                            <li>
                                <a href="#skills" className="footer__link fs-6"> <MdKeyboardArrowLeft  className='fs-5'/> Skills</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="footer__link fs-6"> <MdKeyboardArrowLeft  className='fs-5'/> Projects</a>
                            </li>
                            <li>
                                <a href="#contact" className="footer__link fs-6"> <MdKeyboardArrowLeft  className='fs-5'/> Contact</a>
                            </li>

                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <h5>Contact Info</h5>
                            <div className='fs-6'>
                                <p><MdAddCall/>91 7904992249</p>
                                <p ><MdEmail /> sanjayravikomathi@gmail.com</p>
                                <p><FaLocationDot />Tindivanam, Villupuram-604001</p></div>


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
            <p className='fs-6 foot'>Designed with  ❤️ By <b> @sanjay</b></p>
        </footer>
    );
}

export default Footer;