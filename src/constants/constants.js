import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { FaCode, FaLaptopCode, FaTools } from "react-icons/fa";

export const navLinks = [
  {
    linkName: "Home",
    href: "#hero",
    active: true,
  },
  {
    linkName: "About",
    href: "#about",
    active: false,
  },
  {
    linkName: "Skills",
    href: "#skills",
    active: false,
  },
  {
    linkName: "Projects",
    href: "#projects",
    active: false,
  },
];

export const iconsList = [
  {
    icon: FaGithub,
    bgColor: "red",
    href: "https://github.com/Devankit-Sahu",
  },
  {
    icon: FaLinkedinIn,
    bgColor: "blue",
    href: "https://www.linkedin.com/in/devankit-sahu/",
  },
  {
    icon: FaXTwitter,
    bgColor: "green",
    href: "https://twitter.com/Devankit_sahu15",
  },
];

export const skillsAndtoolsObj = [
  {
    name: "All",
    icon: FaLaptopCode,
    skills: [
      {
        name: "Reactjs",
        icon: "/icons8-react.svg",
      },
      {
        name: "JavaScript",
        icon: "/icons8-javascript.svg",
      },
      {
        name: "Html",
        icon: "/icons8-html-logo.svg",
      },
      {
        name: "Css",
        icon: "/icons8-css-logo.svg",
      },
      {
        name: "TailwindCss",
        icon: "/icons8-tailwindcss.svg",
      },
      {
        name: "NodeJS",
        icon: "/icons8-nodejs.svg",
      },
      {
        name: "ExpressJS",
        icon: "/icons8-expressjs.svg",
      },
      {
        name: "Python",
        icon: "/icons8-python.svg",
      },
      {
        name: "Django",
        icon: "/icons8-django.svg",
      },
      {
        name: "Git",
        icon: "/icons8-git.svg",
      },
      {
        name: "Github",
        icon: "/icons8-github.svg",
      },
      {
        name: "VsCode",
        icon: "/icons8-vscode.svg",
      },
      {
        name: "Redux",
        icon: "/icons8-redux.svg",
      },
      {
        name: "MongoDb",
        icon: "/icons8-mongodb.svg",
      },
    ],
  },
  {
    name: "Frontend",
    icon: FaLaptopCode,
    skills: [
      {
        name: "Reactjs",
        icon: "/icons8-react.svg",
      },
      {
        name: "JavaScript",
        icon: "/icons8-javascript.svg",
      },
      {
        name: "Html",
        icon: "/icons8-html-logo.svg",
      },
      {
        name: "Css",
        icon: "/icons8-css-logo.svg",
      },
      {
        name: "TailwindCss",
        icon: "/icons8-tailwindcss.svg",
      },
      {
        name: "Redux",
        icon: "/icons8-redux.svg",
      },
    ],
  },
  {
    name: "Backend",
    icon: FaCode,
    skills: [
      {
        name: "NodeJS",
        icon: "/icons8-nodejs.svg",
      },
      {
        name: "ExpressJS",
        icon: "/icons8-expressjs.svg",
      },
    ],
  },
  {
    name: "Tools",
    icon: FaTools,
    skills: [
      {
        name: "Git",
        icon: "/icons8-git.svg",
      },
      {
        name: "Github",
        icon: "/icons8-github.svg",
      },
      {
        name: "VsCode",
        icon: "/icons8-vscode.svg",
      },
    ],
  },
];

export const projectList = [
  {
    name: "MERN E-Commerce Application",
    image: "/ecommerce.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Maxime, magnam?",
    tech: [
      {
        image: "/icons8-react.svg",
        name: "ReactJs",
      },
      {
        image: "/icons8-javascript.svg",
        name: "Javascript",
      },

      {
        image: "/icons8-nodejs.svg",
        name: "NodeJS",
      },
      {
        image: "/icons8-expressjs.svg",
        name: "ExpressJs",
      },
      {
        image: "/icons8-mongodb.svg",
        name: "MongoDb",
      },
    ],
    link: "https://github.com/Devankit-Sahu/ecommerce-frontend",
  },

  {
    name: "MERN Chat Application",
    image: "/chat.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Maxime, magnam?",
    tech: [
      {
        image: "/icons8-javascript.svg",
        name: "Javascript",
      },
      {
        image: "/icons8-react.svg",
        name: "ReactJs",
      },
      {
        image: "/icons8-nodejs.svg",
        name: "NodeJS",
      },
      {
        image: "/icons8-expressjs.svg",
        name: "ExpressJs",
      },
      {
        image: "/icons8-mongodb.svg",
        name: "MongoDb",
      },
    ],
    link: "https://github.com/Devankit-Sahu/chat-frontend",
  },
];
