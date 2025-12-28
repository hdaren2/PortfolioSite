import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'MongoDB']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          A collection of technologies and tools I work with
        </p>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

