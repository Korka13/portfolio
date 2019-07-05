import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { NavLink } from 'react-router-dom';

import './Navigation.css';


const Navigation = ({linksSet}) => {
    return (
        <div className="Navigation">
        {linksSet.map((link, i) => {
            return (
            <Bounce {...link.animateOptions}>
              <div className="Navigation-linkwrapper">
                <NavLink className={`Navigation-navlink ${link.linkCssClass} ${link.pageCssClass}`} to={link.to}>{link.text}</NavLink>
              </div>
            </Bounce>
            )
        })}
        </div>
    );
};

export default Navigation;