import React from 'react';

import './Project.css';

const codeIcon = "</>";
const webIcon= "www";

const Project = ({projectDetails}) => {
  return (
    <div className="Project">
      <h3 className="Project-title">{projectDetails.title}</h3>
      <div className="Project-image">
        <img src={projectDetails.image} alt={projectDetails.title}/>
      </div>      
      <p className="Project-description">{projectDetails.description}</p>
      <h4>Technology</h4>
      <ul className="Project-technologies">
        {projectDetails.technologies.map(t => <li>{t}</li>)}
      </ul>
      <p className="Project-description">{projectDetails.techDescription}</p>
      <div className="Project-links">
        <a className="Project-link-icon Project-link-icon-code" href={projectDetails.codeLink}>{codeIcon}</a>
        <a className="Project-link-icon Project-link-icon-web" href={projectDetails.webLink}>{webIcon}</a>
      </div>
      
    </div>
  );
};

export default Project;