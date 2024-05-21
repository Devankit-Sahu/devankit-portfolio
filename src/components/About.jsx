import { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const h1ref = useRef();
  const p1ref = useRef();
  const p2ref = useRef();
  const p3ref = useRef();
  const divref = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scroller: "body",
        start: "top 90%",
        end: "top top",
        scrub: 1,
      },
    });
    tl.from(h1ref.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    });
    tl.from(
      [p1ref.current, p2ref.current, p3ref.current],
      {
        x: -50,
        opacity: 0,
        duration: 0.5,
        stagger: 1,
      },
      "a"
    );
    tl.from(
      divref.current,
      {
        x: 50,
        opacity: 0,
        duration: 1,
      },
      "a"
    );
  }, []);

  return (
    <section
      className="h-screen w-full bg-[linear-gradient(45deg,#09092d,#1d174c)] text-white pb-2"
      id="about"
    >
      <div className="h-full container mx-auto px-10 2xl:px-40 relative">
        <div className="overflow-hidden pt-5">
          <h1
            ref={h1ref}
            className="text-2xl sm:text-4xl md:text-5xl text-center uppercase"
          >
            About Me
          </h1>
        </div>
        <div className="h-[calc(100%-100px)] grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="h-full flex flex-col items-center md:items-start justify-center">
            <p
              ref={p1ref}
              className="text-xs sm:text-[15px] sm:leading-[18px] md:text-[18px] md:leading-[23px] mb-3 text-center md:text-justify"
            >
              Hello, I'm Devankit Sahu a Full Stack Web Developer with expertise
              in both frontend and backend technologies.My tech stack includes
              HTML, CSS, JavaScript, React for the frontend, and Node.js,
              Express.js, MongoDB for the backend.
            </p>
            <p
              ref={p2ref}
              className="text-xs sm:text-[15px] sm:leading-[18px] md:text-[18px] md:leading-[23px] mb-3 text-center md:text-justify"
            >
              I've successfully created two distinct websites—a dynamic
              e-commerce platform and an interactive chat application. These
              projects showcase my skills in frontend design, backend
              development, and seamless integration of technologies.
            </p>
            <p
              ref={p3ref}
              className="text-xs sm:text-[15px] sm:leading-[18px] leading-[18px] md:text-[18px] md:leading-[23px] mb-3 text-center md:text-justify"
            >
              With a commitment to continuous learning, staying updated on new
              technologies and best practices in the ever-evolving field of web
              development.
            </p>
          </div>
          <div className="h-full flex items-center justify-center order-first md:order-none">
            <div
              ref={divref}
              className="w-[200px] h-[200px] rounded-full overflow-hidden border-[10px] border-white md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px]"
            >
              <img
                src="/hero.jpg"
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#5500ff50] rounded-full blur-[100px] "></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#5500ff50] rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 w-[100px] h-[100px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] bg-[linear-gradient(45deg,#ffffff08,#ffffff38)] rounded-full "></div>
      </div>
    </section>
  );
};

export default About;
