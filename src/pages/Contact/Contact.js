import React from 'react';
import Slide from 'react-reveal/Slide';
import Helmet from 'react-helmet';

import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';

import data from '../../data/Contacts/Contacts';

import './Contact.css';

const Contact = () => {
  return (
    <div className="Contacts">
      <Helmet>
        <meta name="description" content={data.head.description} />
        <title>{data.head.title}</title>
      </Helmet>
      <Title data={data.title} />
      <Navigation linksSet={data.navigation} />
      <Slide left delay={3000}>
        <div className="Contact-me">
          <div className="Contact-me-image">
            <img src={data.me.image} alt="Gull"/>
          </div>
          <h3 className="Contact-me-name">{data.me.name}</h3>
          <h4 className="Contact-me-email">{data.me.email}</h4>
          <p className="Contact-me-phone">{data.me.phone}</p>
          <div className="Contact-me-social">
            <a href={data.me.github.link}><img src={data.me.github.icon} alt="github icon"/></a>
            <a href={data.me.linkedin.link}><img src={data.me.linkedin.icon} alt="linkedin icon"/></a>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Contact;