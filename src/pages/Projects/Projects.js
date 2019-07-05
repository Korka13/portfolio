import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import {projectsTitle} from '../../data/Titles'
import {projectsNav} from '../../data/Navigations';
import {normalFooter} from '../../data/Footers';

const Projects = () => {
    return (
        <div>
            <div class="page-container">
                <div class="content-wrap">
                    <Title data={projectsTitle} />
                    <Navigation linksSet={projectsNav} />
                </div>
                <Footer data={normalFooter} pageClass="aboutFooter" />
            </div>
        </div>
    );
};

export default Projects;