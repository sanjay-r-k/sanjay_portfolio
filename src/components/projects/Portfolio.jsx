import React from 'react';
import Projects from './Projects';
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section__title fs-1">Projects</h2>
        <span className="section__subtitle  text-md">Recent Projects</span>

        <Projects />
    </section>
  );
}

export default Portfolio;