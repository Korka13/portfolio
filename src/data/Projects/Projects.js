import { homeLink, aboutLink, contactLink } from '../NavLinks/NavLinks';
import { animateLeft, animateBottom, animateTop } from '../Animations/Animations';

import instagenImage from './instagen.png';
import qoqtailsImage from './qoqtails.gif';
import andreaCauImage from './andreacau.gif';
import extraordinaryImage from './extraordinary-test.gif';
import guessImage from './guess.gif';
import backgroundImage from './background.gif';

const projectsPageCssClass = {
  pageCssClass: "NavigationPage-projects"
}

const data = {
  head: {
    title: "Projects",
    description: "Check out Andrea Cau's projects"
  },
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
    "Below are the main projects I made, check out the live version or the basecode!"
  ],
  projects: [
    {
      title: "Instagram Hashtags Generator",
      image: instagenImage,
      description: "Upload a picture or use a photo link to generate Hashtags relevant to the image",
      technologies: ["ReactJS", "Netlify Lambda"],
      techDescription: "Serverless SPA built using ReactJS and Netlify Lambda. It uses Clarifai's AI API for image recogniction",
      codeLink: "https://github.com/Korka13/instagram-hashtags-generator",
      webLink: "https://instagen.cau.cx/"
    },
    {
      title: "QoQtails",
      image: qoqtailsImage,
      description: "Search between hundreds of cocktail recipes and save your favorites!",
      technologies: ["ReactJS", "Node.js", "Express.Js", "PostgreSQL", "KNEX.JS"],
      techDescription: "Single Page Application built with ReactJS in the frontend and Node.js, Express.Js and PostgreSQL in the backend",
      codeLink: "https://github.com/Korka13/qoqtails",
      webLink: "https://qoqtails.cau.cx/"
    },
    {
      title: "Portfolio",
      image: andreaCauImage,
      description: "My personal portfolio. Yes, the one you are on right now",
      technologies: ["ReactJS", "React Reveal", "React Router", "spa-github-pages", "react-router-ga"],
      techDescription: "Built with React and designed with a mobile first approach. It uses React Reveal for animations. Hosted on GitHub Pages with the help of spa-github-pages and react-router-ga",
      codeLink: "https://github.com/Korka13/portfolio",
      webLink: "https://andreacau.dev/"
    },
    {
      title: "Extraordinary Facts",
      image: extraordinaryImage,
      description: "The place where you can share what extraordinary happened to you",
      technologies: ["Node.js", "Express.Js", "EJS Templating", "MongoDB", "Bootstrap 4"],
      techDescription: "Community blog built with Express and MongoDB, it supports users registration, publishing and editing of content, password reset, image upload",
      codeLink: "https://github.com/Korka13/Extraordinary",
      webLink: "http://extraordinary.cau.cx"
    },
    {
      title: "Guess The RGB",
      image: guessImage,
      description: "Given a random RGB color code, guess the correct one!",
      technologies: ["JavaScript", "CSS", "HTML"],
      techDescription: "A simple color guessing game using HTML, CSS and JavaScript",
      codeLink: "https://github.com/Korka13/guess-the-rgb",
      webLink: "https://guess.cau.cx/"
    },
    {
      title: "Background Gradient Previewer",
      image: backgroundImage,
      description: "Select 2 colors and instantly preview a css background gradient. Once you are done copy the code and paste it on your own css.",
      technologies: ["Javascript", "CSS", "JavaScript Libraries"],
      techDescription: "Built with JavaScript with the help of jscolor Color Picker and clipboardjs",
      codeLink: "https://github.com/Korka13/background-gradient-previewer",
      webLink: "https://background.cau.cx/"
    }
  ]
}

export default data;