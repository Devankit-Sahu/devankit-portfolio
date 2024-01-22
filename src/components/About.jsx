import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const About = () => {
  let h1ref = useRef(null);
  let p1ref = useRef(null);
  let p2ref = useRef(null);
  let p3ref = useRef(null);
  let divref = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scoller: "#main",
        start: "top 40%",
        end: "top 10%",
        scrub: 2,
      },
    });
    tl.from(h1ref, {
      y: 50,
      opacity: 0,
      duration: 1,
    });
    tl.from(
      [p1ref, p2ref, p3ref],
      {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.8,
      },
      "a"
    );
    tl.from(
      divref,
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
      className="h-screen w-full bg-[#e4e5f1] dark:bg-[linear-gradient(45deg,#09092d,#1d174c)] text-black dark:text-white"
      id="about"
    >
      <div className="container mx-auto px-10 2xl:px-40 pt-10">
        <h1
          ref={(h1) => (h1ref = h1)}
          className="text-2xl sm:text-4xl md:text-5xl mb-10 text-center"
        >
          About{" "}
          <span className="capitalize text-black dark:text-[blue] font-[900]">
            me
          </span>
        </h1>
      </div>
      <div className="container mx-auto px-10 2xl:px-40 h-[70%] relative">
        <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col items-center md:items-start justify-center">
            <p
              ref={(p) => (p1ref = p)}
              className="text-[15px] leading-[18px] md:text-[18px] md:leading-[23px] mb-3 text-center md:text-start"
            >
              Hello, I'm Devankit Sahu a Full Stack Web Developer with expertise
              in both frontend and backend technologies.My tech stack includes
              HTML, CSS, JavaScript, React for the frontend, and Node.js,
              Express.js, MongoDB for the backend.
            </p>
            <p
              ref={(p) => (p2ref = p)}
              className="text-[15px] leading-[18px] md:text-[18px] md:leading-[23px] mb-3 text-center md:text-start"
            >
              I've successfully created two distinct websites—a dynamic
              e-commerce platform and an interactive chat application. These
              projects showcase my skills in frontend design, backend
              development, and seamless integration of technologies.
            </p>
            <p
              ref={(p) => (p3ref = p)}
              className="text-[15px] leading-[18px] md:text-[18px] md:leading-[23px] mb-3 text-center md:text-start"
            >
              With a commitment to continuous learning, staying updated on new
              technologies and best practices in the ever-evolving field of web
              development.
            </p>
          </div>
          <div className="flex items-center justify-center order-first md:order-none">
            <div
              ref={(div) => (divref = div)}
              className="w-[200px] h-[200px] rounded-full overflow-hidden md:rounded-none md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px]  border-[10px] border-white"
            >
              <img
                src="/hero.jpg"
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
        <div className="dark:absolute dark:top-0 dark:left-0 dark:w-[250px] dark:h-[250px] dark:bg-[#5500ff50] dark:rounded-full dark:blur-[100px] "></div>
        <div className="dark:absolute dark:bottom-0 dark:right-0 dark:w-[250px] dark:h-[250px] dark:bg-[#5500ff50] dark:rounded-full dark:blur-[100px]"></div>
        <div className="absolute top-1/2 dark:w-[100px] dark:h-[100px] dark:md:w-[150px] dark:md:h-[150px] dark:xl:w-[200px] dark:xl:h-[200px] dark:bg-[linear-gradient(45deg,#ffffff08,#ffffff38)] dark:rounded-full "></div>
      </div>
    </div>
  );
};

export default About;
