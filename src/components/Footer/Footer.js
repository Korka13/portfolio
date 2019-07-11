import React from 'react';
import './Footer.css'

const Footer = ({footerData}) => {
  return (
      <footer className="Footer">                                     
        {footerData}
      </footer>
  );
};

export default Footer;