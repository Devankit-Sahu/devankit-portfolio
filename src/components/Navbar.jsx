import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };
  return (
    <div className="px-[5rem] lg:px-10 bg-[rgba(0,0,0,0.1)] backdrop-filter backdrop-blur-[50px] sticky top-0 z-30">
      <div className="flex justify-between max-w-[1300px] mx-auto py-6">
        <div>
          <h2 className="text-5xl text-[#d00d32] font-[700] tracking-[1.4px]">
            Devankit<span className="text-[#761dd0]">.</span>
          </h2>
        </div>
        <ul className="flex items-center gap-x-10">
          <li className="text-xl tracking-[.6px] cursor-pointer text-white hidden lg:block">
            Home
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-white hidden lg:block">
            Work
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-white hidden lg:block">
            Skills
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-white hidden lg:block">
            About
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-white hidden lg:block">
            Contact
          </li>

          <li
            className="cursor-pointer menu-btn lg:hidden "
            onClick={toggleMenu}
          >
            {menu ? <CloseIcon /> : <MenuIcon />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
