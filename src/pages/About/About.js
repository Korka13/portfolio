import React from 'react';
import Slide from 'react-reveal/Slide';
import Helmet from 'react-helmet';

import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Paragraphs from '../../components/Paragraphs/Paragraphs';
import Job from '../../components/Job/Job';

import data from '../../data/About/About';

import './About.css';

const About = () => {
  return (
      <div className="About">
        <Helmet>
          <meta name="description" content={data.head.description} />
          <title>{data.head.title}</title>
        </Helmet>
        <Title data={data.title} />
        <Navigation linksSet={data.navigation} />
        <Slide left delay={3000}>
          <div>
            <Paragraphs paragraphs={data.aboutMe} />
            <div className="About-workExperience">
              <h2>Work Experience</h2>
              {data.workExperiences.map(job => <Job jobDetails={job} />)}
            </div>
          </div>
        </Slide>
      </div>
  );
};

export default About;