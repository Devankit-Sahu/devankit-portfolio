import { skillsAndtoolsObj } from "../constants/constants";
import SkillsCard from "./SkillsCard";
import Wrapper from "./Wrapper";

const Skillssection = () => {
  return (
    <section id="skills" className="section min-h-screen pb-10">
      <Wrapper className="overflow-hidden">
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-center capitalize my-10">
          Technical <span className="text-[#c770f0]">Proficiency</span>
        </h1>
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
      </Wrapper>
    </section>
  );
};

export default Skillssection;
