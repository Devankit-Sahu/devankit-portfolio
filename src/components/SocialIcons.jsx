import React from "react";
import MagneticEffect from "./MagneticEffect";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="fixed z-[1] left-2 md:left-4 top-1/2 -translate-y-1/2">
      <div className="line1"></div>
      <div className="flex flex-col gap-y-5">
        <MagneticEffect bgColor="red">
          <div className="w-10 h-10 leading-[41px] text-center text-[18px] bg-transparent text-white border-[1px] border-[hsla(0,0%,100%,0.18)] flex items-center justify-center rounded-full">
            <FaLinkedinIn />
          </div>
        </MagneticEffect>
        <MagneticEffect bgColor="blue">
          <div className="w-10 h-10 leading-[41px] text-center text-[18px] bg-transparent text-white border-[1px] border-[hsla(0,0%,100%,0.18)] flex items-center justify-center rounded-full">
            <FaGithub />
          </div>
        </MagneticEffect>
        <MagneticEffect bgColor="green">
          <div className="w-10 h-10 leading-[41px] text-center text-[18px] bg-transparent text-white border-[1px] border-[hsla(0,0%,100%,0.18)] flex items-center justify-center rounded-full">
            <FaTwitter />
          </div>
        </MagneticEffect>
      </div>
      <div className="line1 line2"></div>
    </div>
  );
};

export default SocialIcons;
