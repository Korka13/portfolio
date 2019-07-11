import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './Title.css'


const Title = ({data}) => {
    return (
        <div className={`Title ${data.cssClass}`}>
            <Bounce {...data.animateOptions}>
                <h1>{data.text}</h1>
            </Bounce>
        </div>
    );
};

export default Title;