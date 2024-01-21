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
    tl.from([p1ref, p2ref, p3ref], {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
    });
    tl.from(divref, {
      x: 50,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="h-screen" id="about">
      <div className="container mx-auto px-10 h-full 2xl:px-40 relative bg-[#e4e5f1] dark:bg-[linear-gradient(45deg,#09092d,#1d174c)] rounded-tl-[10%] rounded-tr-[10%]">
        <div className="h-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start justify-center text-black dark:text-white">
            <h1
              ref={(h1) => (h1ref = h1)}
              className="text-5xl mb-10 md:mb-20"
            >
              About{" "}
              <span className="capitalize text-black dark:text-[blue] font-[900]">me</span>
            </h1>
            <p
              ref={(p) => (p1ref = p)}
              className="text-[28px] md:text-[1vw] mb-3"
            >
              Hi, I'm{" "}
              <span className="capitalize text-[24px] sm:text-[30px] sm:font-[600] md:text-[1.2vw] text-[red] font-[800] tracking-[.6px]">
                Devankit Sahu
              </span>{" "}
              a{" "}
              <span className="capitalize text-[24px] sm:text-[30px] sm:font-[600] md:text-[1.2vw] text-purple-600 dark:text-[yellow] font-[800] tracking-[.6px]">
                full stack developer.
              </span>
            </p>
            <p
              ref={(p) => (p2ref = p)}
              className="text-[8px] sm:text-[10px] md:text-[1vw] mb-3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              mollitia nostrum perferendis consequuntur perspiciatis eum eos
              odit cum ad molestias obcaecati, asperiores reprehenderit id
              libero numquam atque fugit, facere cupiditate.
            </p>
            <p
              ref={(p) => (p3ref = p)}
              className="text-[8px] sm:text-[10px] md:text-[1vw] mb-3"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              mollitia nostrum perferendis consequuntur perspiciatis eum eos
              odit cum ad molestias obcaecati, asperiores reprehenderit id
              libero numquam atque fugit, facere cupiditate.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div
              ref={(div) => (divref = div)}
              className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px]  border-[10px] border-white"
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
