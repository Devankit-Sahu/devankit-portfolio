import React from "react";
import {
  CursorDot,
  Herosection,
  MagneticEffect,
  Navbar,
  Skillssection,
  SocialIcons,
  ToggleButton,
} from "./components";
import { IoIosMenu } from "react-icons/io";

const App = () => {
  return (
    <>
      <div className="main hero-section h-screen relative z-[1] bg-[#0f183e]">
        <Navbar />
        <Herosection />
      </div>
      <Skillssection />
      <MagneticEffect>
        <div className="fixed top-[30px] right-[30px] z-[1] border p-3 rounded-full text-white text-2xl">
          <IoIosMenu />
        </div>
      </MagneticEffect>
      <SocialIcons />
      <ToggleButton />
      <CursorDot />
    </>
  );
};

export default App;
