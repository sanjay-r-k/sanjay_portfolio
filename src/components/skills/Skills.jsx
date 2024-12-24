import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title fs-1">Skills</h2>
        <span className="section__subtitle text-md">Technical Lvl</span>
        <div className="skills__container container grid">
            <div className='frontend'><Frontend /></div>
            <div className='backend'> <Backend /> </div>
            
        </div>
    </section>
  );
}

export default Skills;