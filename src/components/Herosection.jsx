import React, { useEffect, useRef } from "react";
import { MagneticEffect } from "./";

const Herosection = ({ tl }) => {
  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let ref3 = useRef(null);
  let ref4 = useRef(null);
  let btn1 = useRef(null);
  let btn2 = useRef(null);
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
    tl.from(btn2, {
      opacity: 0,
      x: 50,
      duration: 1,
    });
  }, []);

  return (
    <>
      <div
        className="absolute w-full h-full left-0 top-0 bg-no-repeat bg-cover bg-center opacity-[.2] -z-[1]"
        style={{
          backgroundImage: "url('/hero-overlay.jpg')",
        }}
      ></div>
      <div className="container px-10 2xl:px-40 mx-auto h-full">
        <div className="h-full flex flex-col items-center justify-center text-white">
          <h2 ref={(h2) => (ref1 = h2)} className="text-[20px] mb-4 ">
            👋, my name is{" "}
            <span className="text-[red] font-bolder">Devankit Sahu</span>
          </h2>
          <h1
            ref={(h1) => (ref2 = h1)}
            className="text-[70px] leading-[70px] md:text-[100px] md:leading-[100px] xl:text-[150px] xl:leading-[150px] font-black capitalize"
          >
            web
          </h1>
          <h1
            ref={(h1) => (ref3 = h1)}
            className="text-[70px] leading-[70px] md:text-[100px] md:leading-[100px] xl:text-[150px] xl:leading-[150px] font-black text capitalize"
          >
            Developer
          </h1>
          <p
            ref={(p) => (ref4 = p)}
            className="mt-5 text-[10px] md:text-[15px]"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            sequi!
          </p>
          <div className="flex justify-center gap-20 mt-5 w-full">
            <div
              ref={(btn) => (btn1 = btn)}
              className="border-[1px] border-white rounded-[50px] p-4 cursor-pointer relative z-[1] overflow-hidden download-btn"
            >
              <h4 className="relative z-10 uppercase text-[10px] leading-[10px] md:text-[25px] md:leading-[25px]">
                Download resume
              </h4>
            </div>
            <div ref={(btn) => (btn2 = btn)}>
              <MagneticEffect>
                <div className="border-[1px] border-white rounded-[50px] p-4 cursor-pointer relative z-[1] overflow-hidden download-btn">
                  <h4 className="relative z-10 uppercase text-[10px] leading-[10px] md:text-[25px] md:leading-[25px]">
                    see work
                  </h4>
                </div>
              </MagneticEffect>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#0088ff50] rounded-full blur-[100px] -z-[10]"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#0088ff50] rounded-full blur-[100px] -z-[10]"></div>
        <div className="absolute top-1/2 w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] bg-[linear-gradient(45deg,#fff0,#ffffff1f)] rounded-full -z-[10]"></div>
        <div className="absolute top-[20%] right-[20%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] bg-[linear-gradient(180deg,#fff0,#ffffff1f)]  rounded-full -z-[10]"></div>
      </div>
    </>
  );
};

export default Herosection;
