import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute left-0 right-0">
      <div className="container mx-auto 2xl:px-40 py-10 flex justify-between">
        <h2 className="text-5xl leading-[48px] text-[#4ca7f2]">Devankit</h2>
        <ul className="flex items-center justify-center gap-5">
          <li className="text-[1.4vw] leading-[1.4vw] text-white cursor-pointer font-serif tracking-[1.2px]">
            Home
          </li>
          <li className="text-[1.4vw] leading-[1.4vw] text-white cursor-pointer font-serif tracking-[1.2px]">
            About
          </li>
          <li className="text-[1.4vw] leading-[1.4vw] text-white cursor-pointer font-serif tracking-[1.2px]">
            Skils
          </li>
          <li className="text-[1.4vw] leading-[1.4vw] text-white cursor-pointer font-serif tracking-[1.2px]">
            Projects
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
