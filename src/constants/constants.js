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
    name: "Frontend",
    icon: FaLaptopCode,
    skills: [
      {
        name: "Reactjs",
        percentage: "90%",
      },
      {
        name: "Html",
        percentage: "90%",
      },
      {
        name: "Css",
        percentage: "90%",
      },
      {
        name: "JavaScript",
        percentage: "90%",
      },
    ],
  },
  {
    name: "Backend",
    icon: FaCode,
    skills: [
      {
        name: "NodeJs",
        percentage: "85%",
      },
      {
        name: "ExpressJs",
        percentage: "84%",
      },
    ],
  },
  {
    name: "Tools",
    icon: FaTools,
    skills: [
      {
        name: "Vs Code",
        percentage: "90%",
      },
      {
        name: "Git & Github",
        percentage: "90%",
      },
    ],
  },
  {
    name: "Languages",
    icon: FaTools,
    skills: [
      {
        name: "Javascript",
        percentage: "95%",
      },
      {
        name: "Python",
        percentage: "91%",
      },
      {
        name: "C/C++",
        percentage: "90%",
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
        image: "/icons8-react.svg",
        name: "ExpressJs",
      },
      {
        image: "/icons8-mongodb.svg",
        name: "MongoDb",
      },
    ],
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
        image: "/icons8-react.svg",
        name: "ExpressJs",
      },
      {
        image: "/icons8-mongodb.svg",
        name: "MongoDb",
      },
    ],
  },
];
