import React from 'react';
import './About.css';

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
            I'm a passionate developer with a love for creating innovative solutions
            and bringing ideas to life through code. With expertise in modern web technologies,
            I specialize in building scalable, user-friendly applications that deliver
            exceptional experiences.
          </p>
          <p className="about-description">
            When I'm not coding, I enjoy staying up-to-date with the latest industry trends,
            contributing to open-source projects, and continuously learning new technologies
            to expand my skill set.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">3+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <div className="image-placeholder">
            <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="400" height="400" fill="url(#aboutGradient)"/>
              <defs>
                <linearGradient id="aboutGradient" x1="0" y1="0" x2="400" y2="400">
                  <stop offset="0%" stopColor="#667eea"/>
                  <stop offset="100%" stopColor="#764ba2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

