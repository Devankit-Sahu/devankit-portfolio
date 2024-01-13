import React from "react";

const skillsAndtoolsObj = [
  {
    name: "ReactJs",
    image: "/icons8-react.svg",
  },
  {
    name: "Javscript",
    image: "/icons8-javascript.svg",
  },
  {
    name: "NodeJs",
    image: "/icons8-nodejs.svg",
  },
  {
    name: "Html",
    image: "/icons8-html-logo.svg",
  },
  {
    name: "Css",
    image: "/icons8-css-logo.svg",
  },
  {
    name: "TailwindCss",
    image: "/icons8-tailwindcss.svg",
  },
  {
    name: "Redux",
    image: "/icons8-redux.svg",
  },
  {
    name: "MongoDb",
    image: "/icons8-mongodb.svg",
  },
  {
    name: "Python",
    image: "/icons8-python.svg",
  },
  {
    name: "Django",
    image: "/icons8-django.svg",
  },
  {
    name: "Vs Code",
    image: "/icons8-vscode.svg",
  },
  {
    name: "Git",
    image: "/icons8-git.svg",
  },
  {
    name: "Github",
    image: "/icons8-github.svg",
  },
];

const Skillssection = () => {
  return (
    <div id="skills" className="section h-screen bg-[#09092d] text-white">
      <div className="container mx-auto px-10 h-full 2xl:px-40">
        <div className="flex justify-center">
          <h1 className="text-5xl pt-5 heading relative">
            Skills <span className="text-6xl text-[blue] font-[800]">&</span>{" "}
            tools
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-5 md:gap-10 mt-10">
          {skillsAndtoolsObj.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center bg-[#ffffff14] py-3 px-5 xl:py-5 xl:px-8 rounded-[10px] cursor-pointer"
            >
              <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] xl:w-[80px] xl:h-[80px]">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-[300] md:font-[500]">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillssection;
