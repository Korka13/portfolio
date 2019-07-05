import React from 'react';

import './Job.css'

const Job = ({jobDetails}) => {
  return (
    <div className="Job">
      <h3>{jobDetails.position}</h3>
      <div className="Job-company">
        <img src={jobDetails.logo} alt={jobDetails.company}/>
        <h4>{jobDetails.company}</h4>        
      </div>
      <p>{jobDetails.description}</p>
      <p>{jobDetails.period}</p>
    </div>
  );
};

export default Job;