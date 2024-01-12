import React from 'react'
import { RxCross2 } from "react-icons/rx";
import MagneticEffect from "./MagneticEffect";

const MobileNavbar = () => {
  return (
    <div className="ml-auto pt-5 w-[40vw] h-full bg-[black] text-white">
      <MagneticEffect>
        <div className="w-[40px] h-[40px] border border-white flex items-center justify-center cursor-pointer ml-auto mr-5 rounded-full">
          <RxCross2 />
        </div>
      </MagneticEffect>
      <ul className="h-full flex flex-col gap-5 items-center justify-center">
        <li className="text-[2vw] leading-[2vw] cursor-pointer hover:bg-[#fff] hover:text-black w-[60%] text-center py-3 rounded-[50px]">
          <a href="#hero" className="no-underline">
            Home
          </a>
        </li>
        <li className="text-[2vw] leading-[2vw] cursor-pointer hover:bg-[#fff] hover:text-black w-[60%] text-center py-3 rounded-[50px]">
          <a href="#about" className="no-underline">
            About
          </a>
        </li>
        <li className="text-[2vw] leading-[2vw] cursor-pointer hover:bg-[#fff] hover:text-black w-[60%] text-center py-3 rounded-[50px]">
          <a href="#skills" className="no-underline">
            Skills
          </a>
        </li>
        <li className="text-[2vw] leading-[2vw] cursor-pointer hover:bg-[#fff] hover:text-black w-[60%] text-center py-3 rounded-[50px]">
          <a href="#projects" className="no-underline">
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar