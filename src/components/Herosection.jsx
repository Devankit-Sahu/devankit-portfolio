import React, { useRef } from "react";
import MagneticEffect from "./MagneticEffect";

const Herosection = () => {
  const ref = useRef(null);
  const MouseEnter = () => {
     ref.current.style.background = "blue";
  };

  return (
    <div className="hero-section h-screen relative z-[1] bg-[#0f183e]">
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
            <h1 className="text-[3.2vw] font-serif capitalize">
              I'm Devankit Sahu
            </h1>
            <h1 className="text-[3.2vw] font-serif capitalize">
              Web Developer
            </h1>
            <p className="text-[.9vw] font-serif">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              animi quasi vero minima harum natus.
            </p>
            {/* <MagneticEffect> */}
              <button
                ref={ref}
                onMouseEnter={MouseEnter}
                className="border-[1px] text-[2vw] border-white w-[10vw] h-[10vw] mt-10 rounded-[50%]"
              >
                Get in touch
              </button>
            {/* </MagneticEffect> */}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
