import evalueLogo from './img/cosmote.jpg';
import teleperformanceLogo from './img/teleperformance.jpg';
import asdaLogo from './img/ASDA_logo.jpg';


const aboutMeText = [
  "I'm a self-taught web developer, I love JavaScript and everything around it.",
  "I have a good knowledge of HTML, CSS, JavaScript, React and NodeJS.",
  "I'm from Italy, and I'm currently living in Athens, Greece.",
  "I like to challange myself and learn new things, while implementing them in new cool projects.",
  "I'm looking for a position in the web development industry, as I want to do what I love as my full time job, and also improve my skills.",
  "Have a look at my projects on GitHub, if you are interested in a collaboration or just want to have a chat, drop me an email or give me a call!"
];

const workExperiences = [
  {
    company: "Cosmote e-value",
    link: "https://www.cosmote-evalue.gr/",
    position: "Service Desk Agent",
    description: "Cosmote e-value is one of the biggest business process and customer experience outsourcing companies in Athens, Greece (but they have branches in other countries as well). I'm working here as a Service Desk Agent for CCHBC Italy, being responsible to handle issues and request related to hardware and software systems, including Apple and Windows devices, SAP, Active Directory, Microsoft Office 365, Citrix.",
    logo: evalueLogo,
    period: "12/2017 - Present"
  },
  {
    company: "Teleperformance",
    link: "https://www.teleperformance.com/en-us/",
    position: "Technical support Agent",
    description: "Teleperformance is one of the most important outsourcing customer care companies in the world, I've worked for the Greek branch. Here I've been part of the Microsft project, as a Tier 1 agent first and as Tier 2 later, giving technical support to the consumers of any Microsft product, including Windows, Office and OWA.",
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
];

export {aboutMeText, workExperiences};