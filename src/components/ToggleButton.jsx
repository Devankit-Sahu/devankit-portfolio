import React from "react";
import MagneticEffect from "./MagneticEffect";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../context/themeContext";

const ToggleButton = () => {
  const { mode, toggleMode } = useTheme();
  const handleThemeToggle = () => {
    toggleMode();
  };
  return (
    <div className="fixed z-[1] right-2 md:right-10 bottom-20">
      <MagneticEffect>
        <div
          onClick={handleThemeToggle}
          className="w-[60px] h-[32px] border-[1px] border-purple-800 dark:border-white/40 rounded-2xl relative cursor-pointer dark:bg-purple-100 mr-10 md:mr-0"
        >
          <span
            className={`absolute flex items-center justify-center text-white bg-[#5c27fe] right-0 dark:left-0 w-[30px] h-[30px] rounded-full`}
          >
            {mode === "dark" ? (
              <IoSunnyOutline className="text-[15px]" />
            ) : (
              <FaMoon className="text-[15px]" />
            )}
          </span>
        </div>
      </MagneticEffect>
    </div>
  );
};

export default ToggleButton;
