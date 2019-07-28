import { homeLink, projectsLink, contactLink } from '../NavLinks/NavLinks';
import { animateLeft, animateBottom, animateTop } from '../Animations/Animations';

import evalueLogo from './cosmote.jpg';
import teleperformanceLogo from './teleperformance.jpg';
import asdaLogo from './ASDA_logo.jpg';

const aboutPageCssClass = {
  pageCssClass: "NavigationPage-about"
}

const data = {
  head: {
    title: "About",
    description: "Andrea Cau is a self-taught web developer..."
  },
  title: {
    text: "About me",
    cssClass: "Title-about",
    animateOptions: animateLeft
  },
  navigation: [
    {
      animateOptions: animateTop,
      ...aboutPageCssClass,
      ...homeLink
    },
    {
      animateOptions: animateBottom,
      ...aboutPageCssClass,
      ...projectsLink
    },
    {
      animateOptions: animateTop,
      ...aboutPageCssClass,
      ...contactLink
    }
  ],
  aboutMe: [
    "I'm a self-taught web developer, my language of specialization is JavaScript.",
    "I have a good knowledge of HTML, CSS, JavaScript, React and NodeJS.",
    "I'm from Italy, and I'm currently living in Athens, Greece.",
    "I'm looking for a position in the web development industry, to imporove my previously aquired skills while building cool stuff.",
    "Have a look at my projects on GitHub, if you want to build something together, or just want to have a chat, drop me an email or give me a call!"
  ],
  workExperiences: [
    {
      company: "Cosmote e-value",
      link: "https://www.cosmote-evalue.gr/",
      position: "Service Desk Agent",
      description: "Cosmote e-value is a business process and customer experience outsourcing comapny in Athens, Greece. I'm working here as a Service Desk Agent for CCHBC Italy, being responsible to handle issues and request related to hardware and software systems, including Apple and Windows devices, SAP, Active Directory, Microsoft Office 365, Citrix.",
      logo: evalueLogo,
      period: "12/2017 - Present"
    },
    {
      company: "Teleperformance",
      link: "https://www.teleperformance.com/en-us/",
      position: "Technical support Agent",
      description: "Teleperformance is an outsourcing customer care company, I've worked for the Athens' branch. Here I've been part of the Microsft project, as a Tier 1 agent first and as Tier 2 later, giving technical support to the consumers of any Microsft product, including Windows, Office and OWA.",
      logo: teleperformanceLogo,
      period: "06/2014 - 11/2017"
    },
    {
      company: "ASDA",
      link: "https://www.facebook.com/asdadesign/",
      position: "Design Supervisor",
      description: "Associated Designers and Architects is based in Singapore, and I've been managing their interior design projects. Reporting directly to the Executive Director I was resposnible for every contract and coordination with contractors and suppliers, ensuring also the proper delivery of work from my team to make the job done as expected and within deadlines",
      logo: asdaLogo,
      period: "06/2012 - 06/2014"
    }
  ]
}

export default data;