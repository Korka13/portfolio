import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Subtitle.css'


const Subtitle = ({data}) => {
    return (
        <div className="Subtitle">
          <Bounce {...data.animateOptions}>
            <h2>{data.text}</h2>
          </Bounce>
        </div>
    );
};

export default Subtitle;