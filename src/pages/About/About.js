import React from 'react';
import Slide from 'react-reveal/Slide';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Paragraphs from '../../components/Paragraphs/Paragraphs';
import Job from '../../components/Job/Job'
import {aboutTitle} from '../../data/Titles'
import {aboutNav} from '../../data/Navigations';
import {aboutMeText, workExperiences} from '../../data/About';

import './About.css';

const About = () => {
    return (
        <div>
          <Title data={aboutTitle} />
          <Navigation linksSet={aboutNav} />
          <Slide left delay={3000}>
            <div>
              <Paragraphs paragraphs={aboutMeText} />
              <div className="About-workExperience">
                <h2>Work Experience</h2>
                {workExperiences.map(job => <Job jobDetails={job} />)}
              </div>
            </div>
          </Slide>
        </div>
    );
};

export default About;