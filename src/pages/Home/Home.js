import React from 'react';

import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';

import data from '../../data/Home/Home';

import './Home.css';

const Home = () => {
  return (
    
    <div className="Home">
      <div className="Home-title-wrap">
        <Title data={data.title} />
        <Subtitle data={data.subtitle} />
      </div>
      <Navigation linksSet={data.navigation} />
    </div>
    
  );
};

export default Home;