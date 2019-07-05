import React from 'react';
import Slide from 'react-reveal/Slide';
import './Footer.css'


const Footer = ({data, pageClass}) => {
  return (
    <Slide {...data.animateOptions}>
      <footer className={`Footer ${pageClass}`}>                                     
        {data.text}
      </footer>
    </Slide>
  );
};

export default Footer;