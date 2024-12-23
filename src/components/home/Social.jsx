import React from "react";
import { FiTwitter, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <div className="line">
            
                <span className="qualification__rounder"></span>
                <span className="qualification__line" ></span>

            </div>
            <a href="https://twitter.com/sanjay__sjay" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <FiTwitter />
            </a>
            <a href="https://github.com/sanjay-r-k" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/sanjay-r-19oct2002/" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <FiLinkedin />
            </a>
            <a href="https://www.instagram.com/sanjay_sjay" className="home__social-icon" target="_blank" rel="noreferrer noopener">
                <FiInstagram />
            </a>
            <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line" ></span>
            </div>
        </div>
    );
}

export default Social;