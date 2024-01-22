import React, { useState } from "react";
import { skillsAndtoolsObj } from "../constants/constants";

const Skillssection = () => {
  const [selectedSkill, setSelectedSkill] = useState(skillsAndtoolsObj[0]);
  const handleClick = (data) => {
    setSelectedSkill(data);
  };
  return (
    <div
      id="skills"
      className="section min-h-screen bg-[#AAD7D9] dark:bg-inherit text-black dark:text-white"
    >
      <div className="container mx-auto px-10 2xl:px-40 pt-10 pb-5">
        <h1 className="text-[1.5rem] font-semibold text-center">
          Technical Proficiency
        </h1>
      </div>
      <div className="container mx-auto px-10 2xl:px-40 relative">
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap gap-10 mt-5 mb-10">
          {skillsAndtoolsObj.map((skill) => (
            <div
              key={skill.name}
              onClick={() => handleClick(skill)}
              className="flex justify-center flex-1 border-[1.5px] border-solid border-[#6751b9] rounded-[0.65rem] p-[1rem] md:p-[1.5rem] lg:py-[2rem] lg:px-[4rem] cursor-pointer relative"
              style={{
                background:
                  selectedSkill === skill &&
                  "linear-gradient(180deg,#ac96ff 0%,#7c5fe6 100%)",
              }}
            >
              <span className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] flex items-center justify-center bg-[#92C7CF] dark:bg-[#2a2252] border-[1.5px] border-solid border-[#6852ba] rounded-[0.65rem] absolute top-[-1rem] left-[-1rem]">
                <skill.icon />
              </span>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-10 p-10 flex-wrap dark:bg-[rgba(22,17,47,0.398)] dark:backdrop-blur-[1rem]">
          {selectedSkill?.skills?.map((s) => (
            <div
              key={s.name}
              className="border-[1.5px] border-solid border-[#6751b9] rounded-[0.65rem] p-3 cursor-pointer"
            >
              <div className="w-[6rem] lg:w-[10rem]">
                <img
                  src={s.icon}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h6 className="text-center">{s?.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillssection;
