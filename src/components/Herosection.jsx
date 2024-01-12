import React from "react";
import { MagneticEffect } from "./";

const Herosection = () => {
  return (
    <>
      <div
        className="absolute w-full h-full left-0 top-0 opacity-[.2] -z-[1]"
        style={{
          backgroundImage: "url('/hero-overlay2.jpg')",
        }}
      ></div>
      <div className="container mx-auto 2xl:px-40 h-full">
        <div className="grid grid-cols-2 h-full">
          <div className="flex flex-col items-start justify-center text-white">
            <h2 className="text-[1.4vw] font-serif font-[500]">
              👋 Hello, There!
            </h2>
            <h1 className="text-[4.7vw] font-serif capitalize">
              I'm Devankit Sahu
            </h1>
            <h1 className="text-[4.6vw] font-serif capitalize">
              Web Developer
            </h1>
            <p className="text-[1.1vw] font-serif">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              animi quasi vero minima harum natus.
            </p>
            <MagneticEffect>
              <div className="border-[1px] border-white rounded-[50px] p-4 mt-6 cursor-pointer relative z-[1] overflow-hidden download-btn hover:text-black">
                <h4 className="relative z-10 uppercase font-[600] tracking-[1px]">
                  see work
                </h4>
              </div>
            </MagneticEffect>
          </div>
          <div className="flex items-end justify-center">
              <img
                src="hero-img.png"
                alt=""
                className="relative left-[15%] bottom-0"
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
