import { useEffect, useRef } from "react";
import gsap from "gsap";

const ProjectCard = ({ project, direction }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const animation = gsap.from(cardRef.current, {
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: cardRef.current,
        scroller: "body",
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
    };
  }, [direction]);

  return (
    <div
      ref={cardRef}
      className="bg-[#4c4c4c38] rounded-md border border-solid border-[#4e4e4e73] flex flex-col items-center sm:m-10 md:m-5"
    >
      <img src={project.image} className="w-full h-[200px] bg-cover" alt="" />
      <div className="px-10 pb-10 py-5 flex flex-col items-center gap-3">
        <h3 className="text-center text-xs sm:text-xl font-semibold uppercase">
          {project.name}
        </h3>
        <div className="flex gap-5">
          <a
            className="border border-solid border-gray-700 px-10 py-2 rounded-3xl cursor-pointer uppercase text-xs sm:text-sm"
            href={project.github_link}
          >
            github
          </a>
          {project.deployed_link && (
            <a
              className="border border-solid border-gray-700 px-10 py-2 rounded-3xl cursor-pointer uppercase text-xs sm:text-sm"
              href={project.deployed_link}
            >
              live
            </a>
          )}
        </div>
        <div className="flex flex-wrap justify-evenly gap-5">
          {project.tech_stack.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-2 border border-gray-700 rounded-md w-fit px-2 py-1 cursor-pointer"
            >
              <img src={s.icon} className="w-5" />
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
