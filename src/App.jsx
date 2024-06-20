import { useState } from "react";
import {
  Navbar,
  SocialIcons,
  MagneticEffect,
  Herosection,
  About,
  Skillssection,
  Projectssection,
  Contact,
} from "./components";
import { IoIosMenu } from "react-icons/io";
import MobileNavbar from "./components/MobileNavbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Particle from "./components/Particle";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-[#070a29] text-white" id="main">
        <Particle />
        <Navbar />
        <Herosection />
        <About />
        <Skillssection />
        <Projectssection />
        {/* <Contact /> */}
      </main>
      <MagneticEffect bgColor="green">
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="fixed top-[12px] right-[10px] z-[10] border p-2 md:p-3 rounded-full text-white text-2xl block md:hidden"
        >
          <IoIosMenu />
        </div>
      </MagneticEffect>
      <MobileNavbar open={open} setOpen={setOpen} />
      <SocialIcons />
    </>
  );
};

export default App;
