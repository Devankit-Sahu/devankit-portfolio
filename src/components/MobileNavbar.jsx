import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import MagneticEffect from "./MagneticEffect";
import { navLinks } from "../constants/constants";

const MobileNavbar = ({ open, setOpen }) => {
  useEffect(() => {
    const handleNavLinkClick = (event) => {
      event.preventDefault();
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      event.target.classList.add("active");
      const targetSectionId = event.target.getAttribute("href").substring(1);
      document.getElementById(targetSectionId).scrollIntoView({
        behavior: "smooth",
      });
    };
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);
  return (
    <div
      className={`${
        open
          ? "fixed left-0 top-0 right-0 z-20 h-screen bg-[black] text-white"
          : "hidden"
      }`}
      onClick={() => setOpen(false)}
    >
      <MagneticEffect>
        <div className="w-[40px] h-[40px] border border-white flex items-center justify-center cursor-pointer ml-auto mt-5 mr-5 rounded-full">
          <RxCross2 />
        </div>
      </MagneticEffect>
      <ul className="h-full flex flex-col gap-5 items-center justify-center">
        {navLinks.map((link) => (
          <li
            key={link.linkName}
            className="cursor-pointer w-[60%] text-center py-3 rounded-[50px] "
          >
            <a
              href={link.href}
              className={`no-underline nav-link text-[20px] md:text-[30px] ${
                link.active ? "active" : ""
              }`}
            >
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
