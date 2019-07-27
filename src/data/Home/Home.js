import { aboutLink, projectsLink, contactLink } from '../NavLinks/NavLinks';
import { animateLeft, animateTopCascade, animateBottom, animateTop } from '../Animations/Animations';

const homePageCssClass = {
  pageCssClass: "NavigationPage-home"
}

const data = {
  title: {
    text: "Hi, I'm Andrea Cau",
    cssClass: "Title-home",
    animateOptions: animateLeft
  },
  subtitle: {
    text: "JavaScript Full Stack Developer",
    animateOptions: animateTopCascade
  },
  navigation: [
    {
      animateOptions: animateTop,
      ...homePageCssClass,
      ...aboutLink
    },
    {
      animateOptions: animateBottom,
      ...homePageCssClass,
      ...projectsLink
    },
    {
      animateOptions: animateTop,
      ...homePageCssClass,
      ...contactLink
    }
  ]
}

export default data;