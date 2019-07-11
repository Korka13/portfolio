import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { NavLink } from 'react-router-dom';

import './Navigation.css';


const Navigation = ({linksSet}) => {
    return (
        <div className="Navigation">
        {linksSet.map((link, i) => {
            return (
            <Zoom {...link.animateOptions}>
              <div className="Navigation-linkwrapper">
                <NavLink className={`Navigation-navlink ${link.linkCssClass} ${link.pageCssClass}`} to={link.to}>{link.text}</NavLink>
              </div>
            </Zoom>
            )
        })}
        </div>
    );
};

export default Navigation;