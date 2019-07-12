const animateLeft = {
  duration: 1000,
  delay: 0,
  left: true,
  right: false,
  top: false,
  bottom: false
}

const animateTopCascade = {
  duration: 1000,
  delay: 3000,
  left: false,
  right: false,
  top: true,
  bottom: false,
  cascade: true
}


const homeTitle = {
    text: "Hi, I'm Andrea Cau",
    subtitle: {
      text: "JavaScript Full Stack Developer",
      animateOptions: animateTopCascade
    },
    cssClass: "Title-home",
    animateOptions: animateLeft
};

const aboutTitle = {
    text: "About me",
    cssClass: "Title-about",
    animateOptions: animateLeft
};

const projectsTitle = {
    text: "Projects",
    cssClass: "Title-projects",
    animateOptions: animateLeft
};

const contactTitle = {
    text: "Get in touch",
    cssClass: "Title-contact",
    animateOptions: animateLeft
};

const errorTitle = {
    text: "404...",
    cssClass: "Error-contact",
    animateOptions: animateLeft
}

export {homeTitle, aboutTitle, projectsTitle, contactTitle, errorTitle};