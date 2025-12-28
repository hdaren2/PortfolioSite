import React from 'react';
import './About.css';
import ComputerImage from '../images/Computer.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            I'm a Computer Science graduate from Louisiana State University with a strong foundation in software engineering,
            data structures, and systems design. I build scalable, reliable applications using modern technologies,
            with an emphasis on performance, maintainability, and user experience. I enjoy solving complex problems,
            writing clean and testable code, and collaborating on high-impact products that operate at scale.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">20+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">3+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">4.2</h3>
              <p className="stat-label">GPA - Summa Cum Laude</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={ComputerImage} alt="Computer setup" className="about-photo" />
        </div>
      </div>
    </section>
  );
};

export default About;

