import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import MagneticEffect from "./MagneticEffect";
import { navLinks } from "../constants/constants";

const MobileNavbar = () => {
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
    <div className="ml-0 md:ml-auto pt-5 w-full md:w-[40vw] h-full bg-[black] text-white">
      <MagneticEffect>
        <div className="w-[40px] h-[40px] border border-white flex items-center justify-center cursor-pointer ml-auto mr-5 rounded-full">
          <RxCross2 />
        </div>
      </MagneticEffect>
      <ul className="h-full flex flex-col gap-5 items-center justify-center">
        {navLinks.map((link) => (
          <li
            key={link.linkName}
            className="text-[20px] md:text-[2vw] leading-[2vw] cursor-pointer w-[60%] text-center py-3 rounded-[50px] "
          >
            <a
              href={link.href}
              className={`no-underline nav-link ${link.active ? "active" : ""}`}
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
