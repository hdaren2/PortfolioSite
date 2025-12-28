import React from 'react';
import './Hero.css';
import ProfilePic from '../images/ProfilePic.jpeg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-greeting">Hi, I'm</h1>
          <h1 className="hero-name">Hunter D'Arensbourg</h1>
          <h2 className="hero-title">Software Engineer</h2>
          <p className="hero-description">
            I am an early-career software engineer with a passion for problem-solving, building efficient systems, and intuitive user experiences.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img src={ProfilePic} alt="Profile" className="profile-photo" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

