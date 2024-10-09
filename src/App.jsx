import { useEffect, useState } from "react";
import {
  Navbar,
  SocialIcons,
  MagneticEffect,
  Herosection,
  About,
  Skillssection,
  Projectssection,
  Services,
  Particle,
  MobileNavbar,
} from "./components";
import { IoIosMenu } from "react-icons/io";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FidgetSpinner } from "react-loader-spinner";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="fidget-spinner-loading"
          backgroundColor="rgb(199 112 240)"
          ballColors={["#00ffff", "#ff00ff", "#70f0c7"]}
        />
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen relative" id="main">
        <Particle />
        <Navbar />
        <Herosection />
        <About />
        <Services />
        <Skillssection />
        <Projectssection />
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
