import React, { useEffect, useRef } from "react";

const About = ({ tl }) => {
  let h1ref = useRef(null);
  let p1ref = useRef(null);
  let p2ref = useRef(null);
  let p3ref = useRef(null);
  let divref = useRef(null);
  useEffect(() => {
    tl.from(h1ref, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        scoller: "#main",
        start: "top 40%",
        end: "top 10%",
        scrub: 1,
      },
    });
    tl.from([p1ref, p2ref, p3ref], {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      scrollTrigger: {
        trigger: "#about",
        scoller: "#main",
        start: "top 40%",
        end: "top 10%",
        scrub: 1,
      },
    });
    tl.from(divref, {
      x: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        scoller: "#main",
        start: "top 40%",
        end: "top 10%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="h-screen" id="about">
      <div className="container mx-auto px-10 h-full 2xl:px-40 relative  dark:bg-[linear-gradient(45deg,#09092d,#1d174c)] rounded-tl-[10%] rounded-tr-[10%]">
        <div className="h-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start justify-center text-white">
            <h1
              ref={(h1) => (h1ref = h1)}
              className="text-5xl mb-10 md:mb-20 heading relative"
            >
              About{" "}
              <span className="capitalize text-[blue] font-[900]">me</span>
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
              <span className="capitalize text-[24px] sm:text-[30px] sm:font-[600] md:text-[1.2vw] text-[yellow] font-[800] tracking-[.6px]">
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
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#5500ff50] rounded-full blur-[100px] "></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#5500ff50] rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] bg-[linear-gradient(45deg,#ffffff08,#ffffff38)] rounded-full "></div>
      </div>
    </div>
  );
};

export default About;
