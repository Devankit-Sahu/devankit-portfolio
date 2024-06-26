import { useEffect, useRef } from "react";
import { skillsAndtoolsObj } from "../constants/constants";
import SkillsCard from "./SkillsCard";
import gsap from "gsap";

const Skillssection = () => {
  const href = useRef();

  useEffect(() => {
    gsap.from(href.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: href.current,
        scroller: "body",
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      id="skills"
      className="section min-h-screen bg-inherit text-white pb-10"
    >
      <div className="container mx-auto px-10 2xl:px-40 overflow-hidden">
        <div
          ref={href}
          className="overflow-hidden pt-5 mb-5 flex items-center flex-col gap-3"
        >
          <h1 className=" sm:text-4xl md:text-5xl text-center capitalize">
            Technical <span className="text-[#c770f0]">Proficiency</span>
          </h1>
          {/* <p>Here are few projects I,ve worked on recently.</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsAndtoolsObj.map((i, index) => (
            <SkillsCard
              key={index}
              skillname={i.name}
              skills={i.skills}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillssection;
