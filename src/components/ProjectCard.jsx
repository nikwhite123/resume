import React from 'react';
import '../styles/styles.css';

const ProjectCard = ({ name, description, link }) => {
  return (
    <div className="project-card">
      <h4>{name}</h4>
      <p>{description}</p>
      {link && <a href={link} target="_blank">Смотреть проект</a>}
    </div>
  );
};

export default ProjectCard;
