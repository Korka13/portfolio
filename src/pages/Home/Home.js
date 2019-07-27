import React from 'react';
import { Helmet } from 'react-helmet';

import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';

import data from '../../data/Home/Home';

import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <Helmet>
        <meta name="description" content={data.head.description} />
      </Helmet>
      <div className="Home-title-wrap">
        <Title data={data.title} />
        <Subtitle data={data.subtitle} />
      </div>
      <Navigation linksSet={data.navigation} />
    </div>    
  );
};

export default Home;