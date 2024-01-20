import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/themeContext";

const Herosection = ({ tl }) => {
  const { mode } = useTheme();
  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let ref3 = useRef(null);
  let ref4 = useRef(null);
  let btn1 = useRef(null);
  useEffect(() => {
    tl.from([ref1, ref2, ref3, ref4], {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.4,
      skewY: 10,
    });
    tl.from(btn1, {
      opacity: 0,
      x: -50,
      duration: 1,
    });
  }, []);

  return (
    <div className="relative h-screen" id="hero">
      <div className="container px-10 2xl:px-40 mx-auto h-full">
        <div className="h-full flex flex-col items-center justify-center text-black dark:text-white">
          <h2 ref={(h2) => (ref1 = h2)} className="text-[20px] mb-4 ">
            👋, my name is{" "}
            <span className="text-[purple] font-[900]">Devankit Sahu</span>
          </h2>
          <h1
            ref={(h1) => (ref2 = h1)}
            className="text-[70px] leading-[70px] md:text-[100px] md:leading-[100px] xl:text-[150px] xl:leading-[150px] font-black capitalize"
          >
            web
          </h1>
          <h1
            ref={(h1) => (ref3 = h1)}
            className="text-[70px] leading-[70px] md:text-[100px] md:leading-[100px] xl:text-[150px] xl:leading-[150px] font-black text-transparent capitalize"
            style={{
              WebkitTextStroke: mode === "light" ? "2px black" : "2px white",
            }}
          >
            Developer
          </h1>
          <p
            ref={(p) => (ref4 = p)}
            className="mt-10 text-[10px] md:text-[15px]"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            sequi!
          </p>
          <div ref={(btn) => (btn1 = btn)}>
            <div className="cursor-pointer action-btn mt-5">
              <h4 className="capitalize text-[10px] leading-[10px] md:text-[25px] md:leading-[25px]">
                see work
              </h4>
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
