import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import {homeTitle} from '../../data/Titles'
import {homeNav} from '../../data/Navigations';
import {homeFooter} from '../../data/Footers';

import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div class="page-container Home-page-container">
        <div class="content-wrap">
          <Title data={homeTitle} />
          <Navigation linksSet={homeNav} />
        </div>
        <Footer data={homeFooter} pageClass="homeFooter" />
      </div>
    </div>
  );
};

export default Home;