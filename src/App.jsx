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

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
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
      <div
        className={`${
          open
            ? "fixed left-0 top-0 right-0 z-20 h-screen bg-[#00000087]"
            : "hidden"
        }`}
        onClick={() => {
          setOpen(false);
        }}
      >
        <MobileNavbar />
      </div>
      <SocialIcons />
      <ToggleButton />
      <CursorDot />
    </>
  );
};

export default App;
