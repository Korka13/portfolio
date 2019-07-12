import React from 'react';

import './Job.css'

const Job = ({jobDetails}) => {
  return (
    <div className="Job">
      <h3>{jobDetails.position}</h3>
      <div className="Job-company">
        <img src={jobDetails.logo} alt={jobDetails.company}/>
        <a href={jobDetails.link} target="_blank" rel="noopener noreferrer"><h4>{jobDetails.company}</h4></a>
      </div>
      <p className="Job-description">{jobDetails.description}</p>
      <p className="Job-period">{jobDetails.period}</p>
    </div>
  );
};

export default Job;