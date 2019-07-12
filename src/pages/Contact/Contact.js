import React from 'react';
import Slide from 'react-reveal/Slide';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import {contactTitle} from '../../data/Titles'
import {contactNav} from '../../data/Navigations';
import me from '../../data/Contacts';

import './Contact.css';

const Contact = () => {
    return (
        <div>
          <Title data={contactTitle} />
          <Navigation linksSet={contactNav} />
          <Slide left delay={3000}>
            <div className="Contact-me">
              <div className="Contact-me-image">
                <img src={me.image} alt="Gull"/>
              </div>
              <h3 className="Contact-me-name">{me.name}</h3>
              <h4 className="Contact-me-email">{me.email}</h4>
              <p className="Contact-me-phone">{me.phone}</p>
              <div className="Contact-me-social">
                <a href={me.github.link}><img src={me.github.icon} alt="github icon"/></a>
                <a href={me.linkedin.link}><img src={me.linkedin.icon} alt="linkedin icon"/></a>
              </div>
            </div>
          </Slide>
        </div>
    );
};

export default Contact;