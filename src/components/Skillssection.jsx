import React, { useState, useEffect, useRef } from "react";
import { skillsAndtoolsObj } from "../constants/constants";
import { useTheme } from "../context/themeContext";
import gsap from "gsap";

const Skillssection = () => {
  const { mode } = useTheme();
  const [selectedSkill, setSelectedSkill] = useState(skillsAndtoolsObj[0]);
  const handleClick = (data) => {
    setSelectedSkill(data);
  };
  let div1ref = useRef(null);
  let div2ref = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        scoller: "#main",
        start: "top 40%",
        end: "top 10%",
        scrub: 2,
      },
    });
    tl.from(
      div1ref,
      {
        x: -50,
        opacity: 0,
        duration: 1,
      },
      "a"
    );
    tl.from(
      div2ref,
      {
        x: 50,
        opacity: 0,
        duration: 1,
      },
      "a"
    );
  }, []);
  return (
    <div
      id="skills"
      className="section h-screen bg-[#AAD7D9] dark:bg-inherit text-black dark:text-white"
    >
      <div className="container mx-auto px-10 2xl:px-40 pt-10 pb-5">
        <h1 className="text-[1.5rem] font-semibold">Technical Proficiency</h1>
      </div>
      <div className="container mx-auto px-10 2xl:px-40 h-[80%] relative blur-effect">
        <div className="flex md:items-center flex-col md:flex-row md:justify-center gap-[5%] md:gap-[10%] h-full ">
          <div
            ref={(div) => (div1ref = div)}
            className="w-full md:w-[40%] flex justify-center flex-wrap gap-4 md:gap-10"
          >
            {skillsAndtoolsObj.map((skill) => (
              <div
                key={skill.name}
                onClick={() => handleClick(skill)}
                className="flex justify-center flex-1 border-[1.5px] border-solid border-[#6751b9] rounded-[0.65rem] p-[.8rem] md:p-[1.5rem] lg:py-[2rem] lg:px-[4rem] cursor-pointer relative"
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
          <div
            ref={(div) => (div2ref = div)}
            className="w-full md:w-[50%] border-[1.5px] border-solid border-[#6751b9] rounded-[0.65rem] min-h-[20rem] md:min-h-[23rem] dark:bg-[rgba(22,17,47,0.398)] dark:backdrop-blur-[1rem]"
          >
            <h6 className="text-[1.2rem] font-semibold py-[0.5rem] md:py-[0.8rem] px-[2rem] border-b-[1.5px] border-b-solid border-b-[#6751b9]">
              {selectedSkill?.name}
            </h6>
            <div className="p-[1rem] md:p-[2rem]">
              {selectedSkill?.skills?.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between items-center">
                    <p>{s.name}</p>
                    <p className="text-[crimson] dark:text-[#dd8cfa]">{s.percentage}</p>
                  </div>
                  <div className="w-full h-[0.5rem] rounded-[0.5rem] overflow-hidden bg-[#ed143d9c] dark:bg-[#382e68] my-3 md:my-[1rem]">
                    <div
                      className="w-0 h-[0.5rem]"
                      style={{
                        width: s.percentage,
                        background:
                          mode === "light"
                            ? "crimson"
                            : "linear-gradient(90deg,#aa94fe -50%,#7d60e6 50%)",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillssection;
