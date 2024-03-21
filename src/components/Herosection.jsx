import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/themeContext";
import gsap from "gsap";

const Herosection = () => {
  const { mode } = useTheme();
  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let ref3 = useRef(null);
  let ref4 = useRef(null);
  let btn1 = useRef(null);
  const tl = gsap.timeline();
  useEffect(() => {
    tl.from([ref1, ref2, ref3, ref4], {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger:0.8
    });
    tl.from(btn1, {
      opacity: 0,
      scale: 0,
      duration: 1,
    });
  }, []);

  return (
    <div
      className="relative bg-[#d2d3db] dark:bg-inherit h-screen w-full"
      id="hero"
    >
      <div className="container px-10 2xl:px-40 mx-auto h-full">
        <div className="h-full flex flex-col items-center justify-center text-black dark:text-white">
          <h2
            ref={(h2) => (ref1 = h2)}
            className="text-[20px] leading-[30px] sm:text-[20px] sm:leading-[30px]"
          >
            👋, My name is{" "}
            <span className="text-[purple] font-[900]">Devankit Sahu</span>
          </h2>
          <h1
            ref={(h1) => (ref2 = h1)}
            className="text-[60px] leading-[70px] sm:text-[80px] sm:leading-[110px] xl:text-[100px] xl:leading-[130px] font-black capitalize"
          >
            Full Stack
          </h1>
          <h1
            ref={(h1) => (ref3 = h1)}
            className="text-[60px] leading-[70px] mb-10 sm:text-[80px] sm:leading-[110px] xl:text-[100px] xl:leading-[130px] font-black text-transparent capitalize"
            style={{
              WebkitTextStroke: mode === "light" ? "2px black" : "2px white",
            }}
          >
            Developer
          </h1>
          <p
            ref={(p) => (ref4 = p)}
            className="text-[15px] leading-[20px] text-center"
          >
            Passionate full stack developer with a knack for bridging the gap
            between design and functionality, delivering user-centric solutions
            across the entire software stack
          </p>
          <div ref={(btn) => (btn1 = btn)}>
            <div className="cursor-pointer action-btn mt-5">
              <a
                href="#projects"
                className="capitalize text-[15px] leading-[15px] sm:text-[25px] sm:leading-[25px]"
              >
                see work
              </a>
            </div>
          </div>
        </div>
        <div className="dark:absolute dark:top-0 dark:left-0 dark:w-[250px] dark:h-[250px] dark:bg-[#0088ff50] dark:rounded-full dark:blur-[100px]"></div>
        <div className="dark:absolute dark:bottom-0 dark:right-0 dark:w-[250px] dark:h-[250px] dark:bg-[#0088ff50] dark:rounded-full dark:blur-[100px]"></div>
        <div className="dark:absolute dark:top-1/2 dark:w-[100px] dark:h-[100px] dark:md:w-[150px] dark:md:h-[150px] dark:xl:w-[200px] dark:xl:h-[200px] dark:bg-[linear-gradient(45deg,#fff0,#ffffff1f)] dark:rounded-full"></div>
        <div className="dark:absolute dark:top-[20%] dark:right-[20%] dark:w-[100px] dark:h-[100px] dark:md:w-[150px] dark:md:h-[150px] dark:xl:w-[200px] dark:xl:h-[200px] dark:bg-[linear-gradient(180deg,#fff0,#ffffff1f)]  dark:rounded-full"></div>
      </div>
    </div>
  );
};

export default Herosection;
