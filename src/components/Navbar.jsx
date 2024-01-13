import React, { useEffect } from "react";
import { navLinks } from "../constants/constants";

const Navbar = () => {
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
    <nav className="absolute left-0 right-0">
      <div className="container mx-auto pl-5 2xl:px-40 py-5 md:py-10 md:flex md:justify-between">
        <h2 className="text-2xl md:text-5xl text-[yellow] font-[700]">
          Devankit
        </h2>
        <ul className="hidden md:flex md:items-center md:justify-center md:gap-5">
          {navLinks.map((link) => (
            <li
              key={link.linkName}
              className="text-[1.4vw] leading-[1.4vw] text-white cursor-pointer font-serif tracking-[1.2px]"
            >
              <a
                className={`no-underline nav-link ${
                  link.active ? "active" : ""
                }`}
                href={link.href}
              >
                {link.linkName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
