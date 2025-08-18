import React from 'react';
import '../styles/styles.css';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill-bar">
      <span>{skill}</span>
      <div className="skill-progress">
        <div
          className="skill-fill"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
