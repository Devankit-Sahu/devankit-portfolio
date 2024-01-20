import React from "react";
import MagneticEffect from "./MagneticEffect";
import { iconsList } from "../constants/constants";

const SocialIcons = () => {
  return (
    <div className="fixed z-[1] left-2 md:left-4 top-1/2 -translate-y-1/2">
      <div
        className="line1 bg-black"
        style={{
          backgroundImage:
            "linear-gradient(180deg,hsla(0, 0%, 100%, 0),hsla(0, 0%, 100%, 0.5))",
        }}
      ></div>
      <div className="flex flex-col gap-y-5">
        {iconsList.map((icon) => (
          <MagneticEffect key={icon.bgColor} bgColor={icon.bgColor}>
            <div className="w-10 h-10 leading-[41px] text-center text-[18px] bg-transparent text-black dark:text-white border-[1px] border-[hsla(0,0%,100%,0.18)] flex items-center justify-center rounded-full">
              {<icon.icon />}
            </div>
          </MagneticEffect>
        ))}
      </div>
      <div
        className="line1 bg-black line2"
        style={{
          backgroundImage:
            "linear-gradient(180deg,hsla(0, 0%, 100%, 0),hsla(0, 0%, 100%, 0.5))",
        }}
      ></div>
    </div>
  );
};

export default SocialIcons;
