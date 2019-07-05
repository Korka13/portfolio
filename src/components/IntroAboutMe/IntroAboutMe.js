import React from 'react';

const IntroAboutMe = ({paragraphs}) => {
  return (
    <div className="IntroAboutMe">
      {paragraphs.map(p => <p>{p}</p>)}
    </div>
  );
};

export default IntroAboutMe;