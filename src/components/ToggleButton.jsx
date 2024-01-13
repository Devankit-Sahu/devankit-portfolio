import React, { useState } from "react";
import MagneticEffect from "./MagneticEffect";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";

const ToggleButton = () => {
    const [mode, setMode] = useState(false);

    const handleThemeToggle = (event) => {
      event.preventDefault();
      setMode(!mode);
    };
  return (
    <div className="fixed z-[1] right-2 md:right-10 bottom-20">
      <MagneticEffect bgColor="">
        <div
          onClick={handleThemeToggle}
          className={`flex items-center justify-center bg-transparent border-[1.5px] ${
            mode ? "border-black" : "border-[hsla(0,0%,100%,0.3)]"
          } rounded-[100px]  gap-x-3`}
        >
          <span
            className={`flex items-center justify-center ${
              mode ? "text-white bg-black" : "text-[#b8b8bd]"
            } w-[30px] h-[30px] rounded-full`}
          >
            <IoSunnyOutline className="text-[15px]" />
          </span>
          <span
            className={`flex items-center justify-center ${
              mode ? "text-[#b8b8bd]" : "text-black bg-white"
            }  w-[30px] h-[30px] rounded-full`}
          >
            <FaMoon className="text-[15px]" />
          </span>
        </div>
      </MagneticEffect>
    </div>
  );
};

export default ToggleButton;
