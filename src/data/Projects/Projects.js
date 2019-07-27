import { homeLink, aboutLink, contactLink } from '../NavLinks/NavLinks';
import { animateLeft, animateBottom, animateTop } from '../Animations/Animations';

import extraordinaryImage from './extraordinary-test.gif';
import instagenImage from './instagen.png';
import guessImage from './guess.gif';
import backgroundImage from './background.gif';

const projectsPageCssClass = {
  pageCssClass: "NavigationPage-projects"
}

const data = {
  title: {
    text: "Projects",
    cssClass: "Title-projects",
    animateOptions: animateLeft
  },
  navigation: [
    {
      animateOptions: animateTop,
      ...projectsPageCssClass,
      ...homeLink
    },
    {
      animateOptions: animateBottom,
      ...projectsPageCssClass,
      ...aboutLink
    },
    {
      animateOptions: animateTop,
      ...projectsPageCssClass,
      ...contactLink
    }
  ],
  intro: [
    "Below are the main projects I am working on, check out the live version or the basecode!"
  ],
  projects: [
    {
      title: "Extraordinary Facts",
      image: extraordinaryImage,
      description: "The place where you can share what extraordinary happened to you",
      technologies: ["NodeJS", "ExpressJS", "MongoBD"],
      codeLink: "https://github.com/Korka13/Extraordinary",
      webLink: "http://extraordinary.gq"
    },
    {
      title: "Instagram Hashtags Generator",
      image: instagenImage,
      description: "Upload a picture and generate relevant hashtags",
      technologies: ["ReactJS", "Netlify Lambda"],
      codeLink: "https://github.com/Korka13/instagram-hashtags-generator",
      webLink: "https://instagen.ga/"
    },
    {
      title: "Guess The RGB",
      image: guessImage,
      description: "A simple color guessing game using HTML, CSS and JavaScript",
      technologies: ["JavaScript", "CSS", "HTML"],
      codeLink: "https://github.com/Korka13/guess-the-rgb",
      webLink: "https://guess.ga/"
    },
    {
      title: "Background Gradient Previewer",
      image: backgroundImage,
      description: "Select 2 colors and instantly preview a css background gradient. Once you are done copy the code and paste it on your own css.",
      technologies: ["Javascript", "CSS", "JavaScript Libraries"],
      codeLink: "https://github.com/Korka13/background-gradient-previewer",
      webLink: "https://background.gq/"
    }
  ]
}

export default data;