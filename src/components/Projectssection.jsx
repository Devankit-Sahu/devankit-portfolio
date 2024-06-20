import { useEffect, useRef } from "react";
import { projectList } from "../constants/constants";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";

const Projectssection = () => {
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
      className="min-h-screen w-full bg-[linear-gradient(45deg,#09092d,#1d174c)] text-white pb-10"
      id="projects"
    >
      <div className="container mx-auto px-10 2xl:px-40 overflow-hidden">
        <div
          ref={href}
          className="overflow-hidden pt-5 mb-5 flex items-center flex-col gap-3"
        >
          <h1 className="sm:text-4xl md:text-5xl text-center capitalize">
            My Recent <span className="text-[#c770f0]">works</span>
          </h1>
          <p className="sm:text-xl md:text-2xl text-center">
            Here are few projects I,ve worked on recently.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectList.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projectssection;
