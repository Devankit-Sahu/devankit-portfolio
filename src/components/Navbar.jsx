import React, { useEffect, useRef } from "react";
import { navLinks } from "../constants/constants";
import { useTheme } from "../context/themeContext";

const Navbar = () => {
  const { mode } = useTheme();
  const ref = useRef(null);
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
  }, [mode]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-10" ref={ref}>
      <div className="container mx-auto px-10 2xl:px-40 py-5 flex justify-between items-end">
        <h2
          className="text-2xl md:text-4xl xl:text-5xl tracking-wide text-transparent font-black"
          style={{
            WebkitTextStroke: mode === "light" ? "1px black" : "1px white",
          }}
        >
          Devankit
        </h2>
        <ul className="hidden md:flex md:items-center md:gap-5">
          {navLinks.map((link) => (
            <li key={link.linkName} className="cursor-pointer">
              <a
                className={`no-underline nav-link text-[20px] text-black dark:text-white tracking-[.5px] ${
                  link.active && "active"
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
