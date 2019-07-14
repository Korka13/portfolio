import React from 'react';
import Slide from 'react-reveal/Slide';

import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';
import Paragraphs from '../../components/Paragraphs/Paragraphs';

import {errorTitle} from '../../data/Titles'
import {errorNav} from '../../data/Navigations';
import {text} from '../../data/404';

import './404.css';


const Error = () => {
    return (
        <div className="Error">
            <Title data={errorTitle} />
            <Slide left delay={3000}>
              <Paragraphs paragraphs={text} />
            </Slide>
            <Navigation linksSet={errorNav} />
        </div>
    );
};

export default Error;