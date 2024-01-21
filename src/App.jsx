import React, { useEffect, useState } from "react";
import {
  About,
  CursorDot,
  Herosection,
  MagneticEffect,
  Navbar,
  Projectssection,
  Skillssection,
  SocialIcons,
  ToggleButton,
} from "./components";
import { IoIosMenu } from "react-icons/io";
import MobileNavbar from "./components/MobileNavbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ThemeProvider } from "./context/themeContext";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(mode);
  }, [mode]);

  return (
    <>
      <ThemeProvider value={{ mode, toggleMode }}>
        <div className="main dark:bg-[#070a29]">
          <Navbar />
          <Herosection />
          <About />
          <Skillssection />
          {/* <Projectssection /> */}
        </div>
        <MagneticEffect bgColor="green">
          <div
            onClick={() => {
              setOpen(true);
            }}
            className="fixed top-[12px] right-[30px] z-[10] border p-3 rounded-full text-white text-2xl block md:hidden"
          >
            <IoIosMenu />
          </div>
        </MagneticEffect>
        <MobileNavbar open={open} setOpen={setOpen} />
        <SocialIcons />
        <CursorDot />
        <ToggleButton />
      </ThemeProvider>
    </>
  );
};

export default App;
