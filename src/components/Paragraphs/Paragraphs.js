import React from 'react';
import './Paragraphs.css'

const Paragraphs = ({paragraphs}) => {
  return (
    <div className="Paragraphs">
      {paragraphs.map(p => <p>{p}</p>)}
    </div>
  );
};

export default Paragraphs;