import React from 'react';
import Slide from 'react-reveal/Slide';
import Helmet from 'react-helmet';

import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import Paragraphs from '../../components/Paragraphs/Paragraphs';
import Project from '../../components/Project/Project';

import data from '../../data/Projects/Projects';

import './Projects.css';

const Projects = () => {
  return (
    <div className="Projects">
      <Helmet>
        <meta name="description" content={data.head.description} />
        <title>{data.head.title}</title>
      </Helmet>
      <Title data={data.title} />
      <Navigation linksSet={data.navigation} />
      <Slide left delay={3000}>
      <div>
      <Paragraphs paragraphs={data.intro} />
        <div className="Projects-container">
        {data.projects.map(project => <Project projectDetails={project} />)}
        </div>
      </div>
      </Slide>
    </div>
  );
};

export default Projects;