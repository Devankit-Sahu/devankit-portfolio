import React, { useState } from "react";
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
import { motion, useScroll } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="main">
        <div
          id="hero"
          className="section hero-section h-screen relative z-[1] bg-[#0f183e]"
        >
          <Navbar />
          <Herosection />
        </div>
        <About />
        <Skillssection />
        <Projectssection />
      </div>
      <MagneticEffect bgColor="green">
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="fixed top-[30px] right-[30px] z-[1] border p-3 rounded-full text-white text-2xl block md:hidden"
        >
          <IoIosMenu />
        </div>
      </MagneticEffect>
      <MobileNavbar open={open} setOpen={setOpen} />
      <SocialIcons />
      <ToggleButton />
      <CursorDot />
    </>
  );
};

export default App;
