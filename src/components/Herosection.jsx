import Typewriter from "typewriter-effect";
import Wrapper from "./Wrapper";

const Herosection = () => {
  return (
    <section className="min-h-screen h-full relative md:py-24" id="hero">
      <Wrapper className="flex flex-col md:flex-row relative py-10">
        <div className="w-full md:w-[50%] flex flex-col justify-center p-5 md:p-10 order-last md:order-first">
          <div className="overflow-hidden my-2">
            <h1 className="text-xl xs:text-2xl sm:text-3xl text-center md:text-left">
              Hi, I'm
            </h1>
          </div>
          <div className="overflow-hidden my-2">
            <h1 className="text-xl xs:text-3xl sm:text-4xl font-bold tracking-[1px] text-center md:text-left">
              Devankit Sahu
            </h1>
          </div>
          <div className="overflow-hidden my-2">
            <h1 className="text-xl xs:text-3xl sm:text-4xl font-semibold tracking-[1px] text-center md:text-left text-[#cc70f0]">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "React Developer",
                    "Backend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          <p className="text-xs xs:text-sm sm:text-base text-zinc-400 text-center md:text-start  my-2">
            Passionate full stack developer with a knack for bridging the gap
            between design and functionality, delivering user-centric solutions
            across the entire software stack.
          </p>
          <div className="download-btn my-2 xs:w-[300px] mx-auto md:mx-0">
            <a
              href="https://drive.google.com/file/d/1cSHQTj9TSRv7kpmhFRtucBkXNa1R2CWN/view"
              target="_blank"
              className="capitalize text-[15px] sm:text-[20px] sm:leading-[20px] md:text-[25px] md:leading-[25px]"
            >
              download resume
            </a>
          </div>
        </div>
        <div className="w-full md:w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] overflow-hidden">
            <img
              src="/programmer-working-isometric-style.png"
              alt=""
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#bb00ff50] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-[#bb00ff50] rounded-full blur-[150px]"></div>
      </Wrapper>
    </section>
  );
};

export default Herosection;
