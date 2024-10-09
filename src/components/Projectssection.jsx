import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { projectList } from "../constants/constants";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import Wrapper from "./Wrapper";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#070a29",
    color: "#c770f0",
    boxShadow: theme.shadows[1],
    fontSize: 13,
  },
}));

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const trigger = useRef();
  const pin = useRef();
  let mm = gsap.matchMedia();

  useGSAP(() => {
    mm.add("(min-width: 768px)", () => {
      const details = gsap.utils.toArray(".details");
      const photos = gsap.utils.toArray(".photo");

      gsap.set(photos.slice(1), { yPercent: 101 });

      ScrollTrigger.create({
        trigger: trigger.current,
        start: "top top",
        end: "bottom bottom",
        pin: pin.current,
        pinSpacing: false,
        markers: false,
      });

      details.forEach((detail, index) => {
        if (index === 0) return;

        const animation = gsap.timeline().to(photos[index], { yPercent: 0 });

        ScrollTrigger.create({
          trigger: `.hd-${index}`,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: 1,
          markers: false,
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });
  }, []);

  return (
    <section id="projects">
      <Wrapper>
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-center capitalize mb-10">
          My Recent <span className="text-[#c770f0]">works</span>
        </h1>
        <div className="flex">
          <div ref={trigger} className="w-full md:w-1/2">
            {projectList.map((project, index) => {
              return (
                <div
                  key={index}
                  className="details h-screen flex flex-col justify-center"
                >
                  <div className="block md:hidden w-full h-64 rounded-lg overflow-hidden mb-5">
                    <img
                      key={index}
                      src={project.image}
                      className="h-full w-full bg-cover"
                    />
                  </div>
                  <h1
                    className={`font-bold text-3xl hd-${index} text-center md:text-start`}
                  >
                    {project.name}
                  </h1>
                  <p className="text-xs text-gray-400 my-5 text-justify">
                    {project.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-5">
                    {project.tech_stack.map((t, i) => (
                      <div key={i}>
                        <LightTooltip title={t.name} placement="top">
                          <span className="text-3xl text-gray-500 hover:text-[#c770f0]">
                            {<t.icon />}
                          </span>
                        </LightTooltip>
                      </div>
                    ))}
                  </div>
                  <div className="my-8 flex gap-5 items-center">
                    <a
                      className="neon-border w-12 h-12 rounded-full border border-gray-500/80 text-gray-500 neon flex items-center justify-center text-3xl"
                      href={project.github_link}
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                    {project.deployed_link && (
                      <a
                        className="neon-border w-12 h-12 rounded-full border border-gray-500/80 text-gray-500 neon flex items-center justify-center text-3xl"
                        href={project.deployed_link}
                        target="_blank"
                      >
                        <MdOutlineArrowOutward />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            ref={pin}
            className="hidden w-1/2 h-screen md:flex justify-center items-center"
          >
            <div className="w-[30vw] h-[30vw] relative rounded-lg overflow-hidden">
              {projectList.map((project, index) => {
                return (
                  <img
                    key={index}
                    src={project.image}
                    className={`photo absolute h-full w-full bg-cover`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
export default ProjectsSection;
