import React from "react";
import MagneticEffect from "./MagneticEffect";
import { iconsList } from "../constants/constants";

const SocialIcons = () => {
  return (
    <div className="fixed z-[1] left-2 md:left-4 top-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-y-5">
        {iconsList.map((icon) => (
          <MagneticEffect key={icon.bgColor} bgColor={icon.bgColor}>
            <a
              target="_blank"
              href={icon.href}
              className="w-10 h-10 leading-[41px] text-center text-[18px] bg-transparent text-white border-[1px] border-[hsla(0,0%,100%,0.18)] flex items-center justify-center rounded-full cursor-pointer"
            >
              {<icon.icon />}
            </a>
          </MagneticEffect>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
