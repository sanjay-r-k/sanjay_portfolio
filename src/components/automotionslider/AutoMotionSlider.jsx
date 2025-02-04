import React, { useState, useEffect } from 'react';
import './AutoMotionSlider.css';
import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaPython, FaGithub, FaLaptopCode } from "react-icons/fa6";
import { BiLogoJquery, BiLogoFlask } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const slideData = [
  { id: 1, content: "HTML5", icon: <FaHtml5 /> },
  { id: 2, content: "CSS3", icon: <FaCss3 /> },
  { id: 3, content: "Bootstrap5", icon: <FaBootstrap /> },
  { id: 4, content: "JavaScript", icon: <FaJs /> },
  { id: 5, content: "jQuery", icon: <BiLogoJquery /> },
  { id: 6, content: "ReactJs", icon: <FaReact /> },
  { id: 7, content: "Python", icon: <FaPython /> },
  { id: 8, content: "Flask", icon: <BiLogoFlask /> },
  { id: 9, content: "MySql", icon: <GrMysql /> },
  { id: 10, content: "GitHub", icon: <FaGithub /> }
];

function InfinityLoopSlider({ toggleVisibility }) {
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicating the slideData array for seamless looping
  const extendedSlideData = [...slideData, ...slideData];

  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  // Detect if it's a mobile device for touch interaction
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobile) {
      // Only add touch event listeners for mobile
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);

      // Clean up event listeners when the component is unmounted
      return () => {
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isMobile]);

  return (
    <div className='section'>
      <h2 className="section__title fs-1"><FaLaptopCode /> Skills</h2>
      <span className="section__subtitle text-md">Technical Lvl</span>
      <div className='center-container'>
        <button onClick={toggleVisibility} className='skillToggleButton'>
          Show All
        </button>
      </div>
      <div
        className="slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`slider-content ${isHovered ? 'paused' : ''}`}>
          {extendedSlideData.map((slide, index) => (
            <div
              key={slide.id + (index >= slideData.length ? `-dup` : '')} // Ensure unique keys
              className={`slide ${hoveredSlide === slide.id ? 'highlight' : ''}`}
              onMouseEnter={() => setHoveredSlide(slide.id)} // Mouse hover
              onMouseLeave={() => setHoveredSlide(null)}      // Mouse leave
              onTouchStart={() => setHoveredSlide(slide.id)}  // Touch start
              onTouchEnd={() => setHoveredSlide(null)}        // Touch end
            >
              <div className="icon">{slide.icon}</div>
              <p className='content'>{slide.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InfinityLoopSlider;
