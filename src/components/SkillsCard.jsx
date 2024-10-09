import { useEffect, useRef } from "react";
import gsap from "gsap";

const SkillsCard = ({ skills, skillname, direction }) => {
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
      className="neon-border card sm:m-10 rounded-md border border-solid border-[#4e4e4e73] cursor-pointer hover:transform hover:-translate-y-1"
    >
      <h1 className="text-center uppercase py-2 font-bold">{skillname}</h1>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {skills.map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-2 border border-gray-700 rounded-md w-fit px-2 py-1"
          >
            <span className="text-purple-400 text-xl">
              <s.icon />
            </span>
            <span>{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
