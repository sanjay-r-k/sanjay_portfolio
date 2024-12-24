import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title text-md">Experience</h3>
            <span className="about__subtitle text-md">2 Internships</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title text-md">Completed</h3>
            <span className="about__subtitle text-md">2+ Projects</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title text-md">Support</h3>
            <span className="about__subtitle text-md">Online 24/7</span>
        </div>
    </div>
  );
}

export default Info;