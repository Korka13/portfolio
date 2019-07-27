import { homeLink, aboutLink, projectsLink } from '../NavLinks/NavLinks';
import { animateLeft, animateBottom, animateTop } from '../Animations/Animations';

import gull from './gull13.svg';
import githubIcon from './github.svg'
import linkedinIcon from './linkedin.svg'

const contactPageCssClass = {
  pageCssClass: "NavigationPage-home"
}

const data = {
  title: {
    text: "Get in touch",
    cssClass: "Title-contact",
    animateOptions: animateLeft
  },
  navigation: [
    {
      animateOptions: animateTop,
      ...contactPageCssClass,
      ...homeLink
    },
    {
      animateOptions: animateBottom,
      ...contactPageCssClass,
      ...aboutLink
    },
    {
      animateOptions: animateTop,
      ...contactPageCssClass,
      ...projectsLink
    }
  ],
  me: {
    image: gull,
    name: "Andrea Cau",
    email: "ym.kooltuo@uac",
    phone: "8458 161 896 0300",
    linkedin: {
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/andrewgull/"
    },
    github: {
      icon: githubIcon,
      link: "https://github.com/Korka13"
    }
  }
}

export default data;