import React from 'react';
import Slide from 'react-reveal/Slide';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Paragraphs from '../../components/Paragraphs/Paragraphs';
import Project from '../../components/Project/Project';
import {projectsTitle} from '../../data/Titles'
import {projectsNav} from '../../data/Navigations';
import {projectsText, projects} from '../../data/Projects';

import './Projects.css';

const Projects = () => {
  return (
    <div>
      <Title data={projectsTitle} />
      <Navigation linksSet={projectsNav} />
      <Slide left delay={3000}>
      <div>
      <Paragraphs paragraphs={projectsText} />
        <div className="Projects-container">
        {projects.map(project => <Project projectDetails={project} />)}
        </div>
      </div>
      </Slide>
    </div>
  );
};

export default Projects;