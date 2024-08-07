import { useEffect, useRef } from "react";
import gsap from "gsap";

const Herosection = () => {
  const tl = gsap.timeline();
  const h1ref1 = useRef();
  const h1ref2 = useRef();
  const h1ref3 = useRef();
  const pref = useRef();
  const btnref = useRef();
  const imgref = useRef();

  useEffect(() => {
    tl.from(
      h1ref1.current,
      {
        y: 60,
        duration: 1,
        opacity: 0,
      },
      "a"
    );
    tl.from(
      h1ref2.current,
      {
        y: 60,
        duration: 1,
        opacity: 0,
      },
      "a"
    );
    tl.from(
      h1ref3.current,
      {
        y: 60,
        duration: 1,
        opacity: 0,
      },
      "a"
    );
    tl.from(
      pref.current,
      {
        duration: 1,
        opacity: 0,
      },
      "a"
    );
    tl.from(
      btnref.current,
      {
        scale: 0,
        duration: 1,
        opacity: 0,
      },
      "a"
    );
    tl.from(
      imgref.current,
      {
        scale: 0,
        duration: 1,
        opacity: 0,
      },
      "a"
    );
  }, []);

  return (
    <section className="h-screen relative text-white " id="hero">
      <div className="h-full container mx-auto px-10 2xl:px-40 flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] h-[50%] md:h-full block md:flex md:flex-col md:justify-center p-5 md:p-10 order-last md:order-first">
          <div className="overflow-hidden my-2">
            <h1
              ref={h1ref1}
              className="text-xl xs:text-2xl sm:text-3xl text-center md:text-left"
            >
              Hi There, I'm
            </h1>
          </div>
          <div className="overflow-hidden my-2">
            <h1
              ref={h1ref2}
              className="text-2xl xs:text-4xl sm:text-5xl font-bold tracking-[1px] text-center md:text-left"
            >
              Devankit Sahu
            </h1>
          </div>
          <div className="overflow-hidden my-2">
            <h1
              ref={h1ref3}
              className="text-xl xs:text-3xl sm:text-4xl font-semibold tracking-[1px] text-center md:text-left text-[#cc70f0]"
            >
              Full Stack Developer
            </h1>
          </div>
          <p
            className="text-xs xs:text-sm sm:text-base text-gray-300 text-center md:text-start  my-2"
            ref={pref}
          >
            Passionate full stack developer with a knack for bridging the gap
            between design and functionality, delivering user-centric solutions
            across the entire software stack.
          </p>
          <div
            ref={btnref}
            className="download-btn my-2  xs:w-[250px] mx-auto md:mx-0"
          >
            <a
              href="https://drive.google.com/file/d/1cSHQTj9TSRv7kpmhFRtucBkXNa1R2CWN/view"
              target="_blank"
              className="capitalize text-[15px] sm:text-[20px] sm:leading-[20px] md:text-[25px] md:leading-[25px]"
            >
              download cv
            </a>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-[50%] md:h-full flex items-center justify-center">
          <div
            ref={imgref}
            className="w-[200px] h-[200px] md:w-[350px] md:h-[350px] overflow-hidden"
          >
            <img
              src="/hero1.png"
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
