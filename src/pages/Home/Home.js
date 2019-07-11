import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import {homeTitle} from '../../data/Titles'
import {homeNav} from '../../data/Navigations';

import './Home.css';

const Home = () => {
  return (
    
    <div className="Home">
      <div className="Home-title-wrap">
        <Title data={homeTitle} />
        <Subtitle data={homeTitle.subtitle} />
      </div>
      <Navigation linksSet={homeNav} />
    </div>
    
  );
};

export default Home;