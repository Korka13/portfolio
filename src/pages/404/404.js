import React from 'react';
import Title from '../../components/Title/Title';
import Navigation from '../../components/Navigation/Navigation';

import {errorTitle} from '../../data/Titles'
import {errorNav} from '../../data/Navigations';


const Error = () => {
    return (
        <div>
            <Title data={errorTitle} />
            <Navigation linksSet={errorNav} />
        </div>
    );
};

export default Error;