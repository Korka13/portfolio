import React from 'react';
import Slide from 'react-reveal/Slide';

import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';
import Paragraphs from '../../components/Paragraphs/Paragraphs';

import data from '../../data/404/404';

import './404.css';


const Error = () => {
    return (
        <div className="Error">
            <Title data={data.title} />
            <Slide left delay={3000}>
              <Paragraphs paragraphs={data.text} />
            </Slide>
            <Navigation linksSet={data.navigation} />
        </div>
    );
};

export default Error;