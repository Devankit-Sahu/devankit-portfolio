import {
  FaLinkedinIn,
  FaGithub,
  FaXTwitter,
  FaStripe,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaGlobe,
  FaPaintbrush,
  FaWrench,
} from "react-icons/fa6";
import {
  BiLogoPostgresql,
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoFirebase,
} from "react-icons/bi";
import {
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiRedux,
  SiMysql,
  SiGraphql,
  SiRedis,
  SiApachekafka,
} from "react-icons/si";
import {
  FaLaptopCode,
  FaShoppingCart,
  FaTachometerAlt,
  FaTools,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiRedis } from "react-icons/di";

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
    linkName: "Services",
    href: "#services",
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
  // {
  //   linkName: "Contact Me",
  //   href: "#contact",
  //   active: false,
  // },
];

export const iconsList = [
  {
    icon: FaGithub,
    bgColor: "#cc70f0",
    href: "https://github.com/Devankit-Sahu",
  },
  {
    icon: FaLinkedinIn,
    bgColor: "#cc70f0",
    href: "https://www.linkedin.com/in/devankit-sahu/",
  },
  {
    icon: FaXTwitter,
    bgColor: "#cc70f0",
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
        icon: FaReact,
      },
      {
        name: "NextJs",
        icon: RiNextjsFill,
      },
      {
        name: "JavaScript",
        icon: BiLogoJavascript,
      },
      {
        name: "TypeScript",
        icon: BiLogoTypescript,
      },
      {
        name: "Html",
        icon: FaHtml5,
      },
      {
        name: "Css",
        icon: FaCss3Alt,
      },
      {
        name: "TailwindCss",
        icon: BiLogoTailwindCss,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
    ],
  },
  {
    name: "Backend",
    icon: FaCode,
    skills: [
      {
        name: "NodeJS",
        icon: FaNodeJs,
      },
      {
        name: "ExpressJS",
        icon: SiExpress,
      },
      {
        name: "MongoDb",
        icon: SiMongodb,
      },
      {
        name: "MySql",
        icon: SiMysql,
      },
      { name: "Postgres", icon: BiLogoPostgresql },
      {
        name: "GraphQl",
        icon: SiGraphql,
      },
      {
        name: "Redis",
        icon: SiRedis,
      },
      {
        name: "Kafka",
        icon: SiApachekafka,
      },
      {
        name: "Firebase",
        icon: BiLogoFirebase,
      },
    ],
  },
  {
    name: "Tools",
    icon: FaTools,
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "Github",
        icon: FaGithub,
      },
      {
        name: "Docker",
        icon: FaDocker,
      },
    ],
  },
];

export const projectList = [
  {
    name: "Askify - AI powered Q&A with pdf Saas",
    image: "/askify-preview.png",
    bgColor: "bg-red-500",
    github_link: "https://github.com/Devankit-Sahu/askify",
    deployed_link: "https://askify-one.vercel.app/",
    description:
      "Askify is a cutting-edge AI SaaS application designed to allow users to upload PDF documents and query them using advanced AI models. The platform streamlines the process of extracting meaningful insights and answers from large PDF documents, making it ideal for researchers, professionals, and anyone handling a large amount of textual data.",
    tech_stack: [
      { name: "NextJs", icon: RiNextjsFill },
      { name: "Typescript", icon: BiLogoTypescript },
      { name: "Stripe", icon: FaStripe },
      { name: "Postgres", icon: BiLogoPostgresql },
      { name: "TailwindCss", icon: BiLogoTailwindCss },
    ],
  },
  {
    name: "SageSoul-Ayurvedic Assistant for Medicines",
    image: "/ayurveda.jpeg",
    bgColor: "bg-green-500",
    github_link: "https://github.com/Devankit-Sahu/SageSoul",
    description:
      "SageSoul is a groundbreaking project designed to support Ayurvedic practitioners in their journey, providing an extensive repository of knowledge, formulations, and guidance at their fingertips.",
    tech_stack: [
      {
        name: "ReactJs",
        icon: FaReact,
      },
      { name: "JavaScript", icon: BiLogoJavascript },
      { name: "TailwindCss", icon: BiLogoTailwindCss },
    ],
  },
  {
    name: "Wonder Mart",
    image: "/ecommerce.png",
    bgColor: "bg-yellow-500",
    github_link: "https://github.com/Devankit-Sahu/ecommerce-frontend",
    deployed_link: "https://wondermart-chi.vercel.app/",
    description:
      "Wondermart is an eCommerce platform designed for a streamlined online shopping experience. It offers a user-friendly interface for browsing products, managing orders, and secure transactions. With real-time inventory updates, personalized recommendations, and seamless checkout processes, Wondermart ensures a hassle-free shopping experience for customers, while providing robust admin tools for product management and sales analytics.",
    tech_stack: [
      {
        name: "ReactJs",
        icon: FaReact,
      },
      {
        name: "NodeJs",
        icon: FaNodeJs,
      },
      {
        name: "ExpressJs",
        icon: SiExpress,
      },
      {
        name: "MongoDb",
        icon: SiMongodb,
      },
      {
        name: "JavaScript",
        icon: BiLogoJavascript,
      },
      {
        name: "Stripe",
        icon: FaStripe,
      },
      {
        name: "Redis",
        icon: DiRedis,
      },
      { name: "TailwindCss", icon: BiLogoTailwindCss },
    ],
  },

  {
    name: "ChatEase",
    image: "/chat.png",
    bgColor: "bg-purple-500",
    github_link: "https://github.com/Devankit-Sahu/chat-frontend",
    deployed_link: "https://chatease-seven.vercel.app",
    description:
      "Chatease is a modern chat application designed for seamless communication, offering real-time messaging with instant delivery of texts, images, and files. It features notifications to keep users updated on new messages, typing indicators, read receipts, and user status presence for an interactive experience. With a focus on smooth and responsive interactions, Chatease enhances user connectivity, whether in one-on-one or group chats.",
    tech_stack: [
      {
        name: "ReactJs",
        icon: FaReact,
      },
      {
        name: "NodeJs",
        icon: FaNodeJs,
      },
      {
        name: "ExpressJs",
        icon: SiExpress,
      },
      {
        name: "MongoDb",
        icon: SiMongodb,
      },
      {
        name: "JavaScript",
        icon: BiLogoJavascript,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      { name: "TailwindCss", icon: BiLogoTailwindCss },
    ],
  },
  {
    name: "Foodies Frontend",
    image: "/foodies.png",
    bgColor: "bg-pink-500",
    github_link: "https://github.com/Devankit-Sahu/chat-frontend",
    deployed_link: "https://react-food-app-kappa.vercel.app/",
    description: "This is a frontend for foodies like websites.",
    tech_stack: [
      {
        name: "ReactJs",
        icon: FaReact,
      },
      { name: "JavaScript", icon: BiLogoJavascript },
      { name: "TailwindCss", icon: BiLogoTailwindCss },
    ],
  },
];

export const services = [
  {
    icon: FaGlobe,
    title: "Web Development",
    description:
      "Crafting responsive and user-friendly websites tailored to your business needs.",
  },
  {
    icon: FaCode,
    title: "API Development",
    description:
      "Building robust and scalable APIs that facilitate smooth communication between different software applications.",
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Creating custom e-commerce platforms that enhance online shopping experiences.",
  },
  {
    icon: FaPaintbrush,
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and experiences that captivate and engage users.",
  },
  {
    icon: FaTachometerAlt,
    title: "Performance Optimization",
    description:
      "Enhancing the speed and efficiency of web applications through code optimization and caching strategies.",
  },
  {
    icon: FaWrench,
    title: "Website Maintenance",
    description:
      "Offering ongoing support and maintenance for your website to ensure it runs smoothly.",
  },
];
