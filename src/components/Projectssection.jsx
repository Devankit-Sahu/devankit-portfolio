import React from 'react'
import { projectList } from "../constants/constants";

const Projectssection = () => {
  return (
    <div className="h-screen bg-black text-white" id="projects">
      <div className="container mx-auto px-10 h-full 2xl:px-40 flex flex-col justify-evenly">
        <div className="flex justify-center">
          <h1 className="text-5xl capitalize heading relative">Projects</h1>
        </div>
        <div className="h-[calc(100%-180px)] cursor-pointer bg-[#4598e648] rounded-[50px]">
          {projectList.map((project) => (
            <div key={project.name} className="h-full grid grid-cols-2">
              <img
                src={project.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="flex flex-col justify-center px-10">
                <h1 className="text-5xl font-[600] mb-5">{project.name}</h1>
                <p className="text-xl font-[300] mb-5">{project.desc}</p>
                <div>
                  <h2 className="text-xl capitalize font-bold mb-5">
                    Technologies used :
                  </h2>
                  <ul className="flex gap-3">
                    {project.tech.map((t) => (
                      <li key={t.name}>
                        <div className="w-[40px] h-[40px]">
                          <img
                            src={t.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2>{t.name}</h2>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="border-[1px] border-white rounded-[50px] p-4 mt-6 cursor-pointer">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projectssection