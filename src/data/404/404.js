import { homeLink, aboutLink, projectsLink, contactLink } from '../NavLinks/NavLinks';
import { animateLeft, animateBottom, animateTop } from '../Animations/Animations';

const errorPageCssClass = {
  pageCssClass: "NavigationPage-error"
}

const data = {
  head: {
    title: "404 Not Found",
  },
  title: {
    text: "Ops...",
    cssClass: "Title-error",
    animateOptions: animateLeft
  },
  navigation: [
    {
      animateOptions: animateTop,
      ...errorPageCssClass,
      ...homeLink
    },
    {
      animateOptions: animateBottom,
      ...errorPageCssClass,
      ...aboutLink
    },
    {
      animateOptions: animateBottom,
      ...errorPageCssClass,
      ...projectsLink
    },
    {
      animateOptions: animateTop,
      ...errorPageCssClass,
      ...contactLink
    }
  ],
  text: [
    "What a shame, I forgot to put content here...",
    "While I solve the problem, please check out the links below!"
  ]
}

export default data;