import Wrapper from "./Wrapper";

const About = () => {
  return (
    <section className="min-h-screen" id="about">
      <Wrapper className="relative">
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-center capitalize mb-10">
          who i <span className="text-[#c770f0]">m</span>
        </h1>
        <div className="min-h-[calc(100vh-90px)] grid grid-cols-1 md:grid-cols-2">
          <div className="h-full flex items-center justify-center">
            <div className="neon-border w-[30vw] h-[30vw] md:w-[25vw] md:h-[25vw] overflow-hidden rounded-full">
              <img
                src="/hero.jpg"
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="h-full flex flex-col items-center md:items-start justify-center px-10">
            <p className="text-xs sm:text-[15px] sm:leading-[18px] md:text-[18px] md:leading-[23px] mb-3 text-center md:text-justify">
              Hello, I'm Devankit Sahu a
              <span className="text-[#c770f0]"> Full Stack Developer</span> with
              expertise in both frontend and backend technologies.
            </p>
            <p className="text-xs sm:text-[15px] sm:leading-[18px] md:text-[18px] md:leading-[23px] mb-3 text-center md:text-justify">
              I am a versatile full stack developer specializing in creating
              dynamic, responsive websites tailored for small and medium-sized
              businesses. With a strong command of both frontend and backend
              technologies, I deliver seamless and robust web solutions that
              enhance user experience and drive business growth. Let's
              collaborate to bring your vision to life with precision and
              creativity.
            </p>
            <p className="text-xs sm:text-[15px] sm:leading-[18px] leading-[18px] md:text-[18px] md:leading-[23px] mb-3 text-center md:text-justify">
              With a commitment to continuous learning, staying updated on new
              technologies and best practices in the ever-evolving field of web
              development.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
