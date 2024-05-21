import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
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
  {
    linkName: "Contact Me",
    href: "#contact",
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
        name: "ReactJs",
        icon: "/icons8-react.svg",
      },
      {
        name: "NextJs",
        icon: "/icons8-nextjs.svg",
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
      {
        name: "MongoDb",
        icon: "/icons8-mongodb.svg",
      },
      {
        name: "MySql",
        icon: "/icons8-mysql.svg",
      },
      {
        name: "GraphQl",
        icon: "/icons8-graphql.svg",
      },
      {
        name: "Redis",
        icon: "/icons8-redis.svg",
      },
      {
        name: "Firebase",
        icon: "/icons8-firebase.svg",
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
        name: "Docker",
        icon: "/icons8-docker.svg",
      },
    ],
  },
];

export const projectList = [
  {
    name: "Wonder Mart",
    image: "/ecommerce.png",
    github_link: "https://github.com/Devankit-Sahu/ecommerce-frontend",
    deployed_link: "https://wondermart-chi.vercel.app/",
    tech_stack: [
      {
        name: "ReactJs",
        icon: "/icons8-react.svg",
      },
      {
        name: "NodeJs",
        icon: "/icons8-nodejs.svg",
      },
      {
        name: "ExpressJs",
        icon: "/icons8-expressjs.svg",
        name: "MongoDb",
      },
      {
        icon: "/icons8-mongodb.svg",
        name: "JavaScript",
        icon: "/icons8-javascript.svg",
      },
    ],
  },

  {
    name: "ChatBuddy",
    image: "/chat.png",
    github_link: "https://github.com/Devankit-Sahu/chat-frontend",
    deployed_link: "https://chat-app-alpha-seven-93.vercel.app",
    tech_stack: [
      {
        name: "ReactJs",
        icon: "/icons8-react.svg",
      },
      {
        name: "NodeJs",
        icon: "/icons8-nodejs.svg",
      },
      {
        name: "ExpressJs",
        icon: "/icons8-expressjs.svg",
        name: "MongoDb",
      },
      {
        icon: "/icons8-mongodb.svg",
        name: "JavaScript",
        icon: "/icons8-javascript.svg",
      },
    ],
  },
  {
    name: "Foodies Frontend",
    image: "/foodies.png",
    github_link: "https://github.com/Devankit-Sahu/chat-frontend",
    deployed_link: "https://react-food-app-kappa.vercel.app/",
    tech_stack: [
      {
        name: "ReactJs",
        icon: "/icons8-react.svg",
      },
      { name: "JavaScript", icon: "/icons8-javascript.svg" },
    ],
  },
  {
    name: "SageSoul-Ayurvedic Assistant for Medicines",
    image: "/ayurveda.jpeg",
    github_link: "https://github.com/Devankit-Sahu/SageSoul",
    tech_stack: [
      {
        name: "ReactJs",
        icon: "/icons8-react.svg",
      },
      { name: "JavaScript", icon: "/icons8-javascript.svg" },
    ],
  },
];
