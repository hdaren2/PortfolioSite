import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'C', 'Python', 'C#', 'SQL', 'C++','JavaScript', 'Rust', 'Dart', 'Ruby', 'OCaml', 'Assembly', 'Tiger']
    },
    {
      title: 'Frameworks & Tools',
      skills: ['Git', 'GitHub', 'Docker', 'Flutter', 'Unity', '.NET', 'Supabase', 'Linux', 'Android Studio', 'Xcode', 'Visual Studio', 'Eclipse', 'NumPy', 'SciPy', 'Jira']
    },
    {
      title: 'Core Competencies',
      skills: ['Object-Oriented Design', 'Data Structures & Algorithms', 'Systems Programming', 'Operating Systems', 'Networking Fundamentals', 'Agile/Scrum', 'Software Testing', 'Version Control']
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

