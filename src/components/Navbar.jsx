import React, { useEffect, useRef } from "react";
import { navLinks } from "../constants/constants";

const Navbar = () => {
  const ref = useRef(null);

  const scrollHandler = () => {
    if (window.scrollY >= 10) {
      ref.current.classList.add("fixed-nav");
    } else {
      ref.current.classList.remove("fixed-nav");
    }
  };

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

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav ref={ref}>
      <div className="container mx-auto px-10 2xl:px-40 py-4 flex justify-between items-end">
        <a
          href="/"
          className="text-[#c770f0] text-2xl md:text-4xl xl:text-5xl tracking-wide"
        >
          Devankit.
        </a>
        <ul className="hidden md:flex md:items-center md:gap-5">
          {navLinks.map((link) => (
            <li key={link.linkName} className="cursor-pointer">
              <a
                className={`no-underline nav-link text-[20px] text-white font-medium tracking-[.5px] relative ${
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
