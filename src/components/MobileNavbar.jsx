import React from 'react'

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <div
      onClick={toggleMenu}
      className={`fixed lg:hidden w-screen h-screen bg-(rgba(0,0,0,0.3)) left-0 top-0 opacity-0 transition-all z-[999] ${
        isOpen ? " opacity-[1] -translate-x-0" : " -translate-x-[100vw]"
      }`}
    >
      <div className={`w-[60vw] sidebar h-screen bg-[#342864] p-[2rem]`}>
        <h2 className="text-5xl font-[700] mb-10">Devankit.</h2>
        <ul className="flex flex-col gap-[2rem]">
          <li className="text-xl tracking-[.6px] cursor-pointer text-white">
            <a href="#home">Home</a>
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-white">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-white">
            <a href="#skills">Work</a>{" "}
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-white">
            About
          </li>
          <li className="text-xl tracking-[.6px] cursor-pointer text-white">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar