import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import IntroAboutMe from '../../components/IntroAboutMe/IntroAboutMe';
import Job from '../../components/Job/Job'
import Footer from '../../components/Footer/Footer';
import {aboutTitle} from '../../data/Titles'
import {aboutNav} from '../../data/Navigations';
import {normalFooter} from '../../data/Footers';
import {aboutMeText, workExperiences} from '../../data/About';

import './About.css';

const About = () => {
    return (
        <div>
            <div class="page-container">
                <div class="content-wrap">
                    <Title data={aboutTitle} />
                    <Navigation linksSet={aboutNav} />
                    <IntroAboutMe paragraphs={aboutMeText} />
                    <div className="About-workExperience">
                      <h2>Work Experience</h2>
                      {workExperiences.map(job => <Job jobDetails={job} />)}
                    </div>
                </div>
                <Footer data={normalFooter} pageClass="aboutFooter" />
            </div>
        </div>
    );
};

export default About;