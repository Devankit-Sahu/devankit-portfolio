import React from 'react'

const About = () => {
  return (
    <div
      className="section h-screen bg-[linear-gradient(45deg,#09092d,#1d174c)]"
      id="about"
    >
      <div className="container mx-auto px-10 h-full 2xl:px-40">
        <div className="h-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start justify-center text-white">
            <h1 className="text-5xl mb-10 md:mb-20 heading relative">
              About{" "}
              <span className="capitalize text-[blue] font-[900]">me</span>
            </h1>
            <p className="text-[28px] md:text-[1vw] mb-3">
              Hi, I'm{" "}
              <span className="capitalize text-[24px] sm:text-[30px] sm:font-[600] md:text-[1.2vw] text-[red] font-[800] tracking-[.6px]">
                Devankit Sahu
              </span>{" "}
              a{" "}
              <span className="capitalize text-[24px] sm:text-[30px] sm:font-[600] md:text-[1.2vw] text-[yellow] font-[800] tracking-[.6px]">
                full stack developer.
              </span>
            </p>
            <p className="text-[8px] sm:text-[10px] md:text-[1vw] mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              mollitia nostrum perferendis consequuntur perspiciatis eum eos
              odit cum ad molestias obcaecati, asperiores reprehenderit id
              libero numquam atque fugit, facere cupiditate.
            </p>
            <p className="text-[8px] sm:text-[10px] md:text-[1vw] mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              mollitia nostrum perferendis consequuntur perspiciatis eum eos
              odit cum ad molestias obcaecati, asperiores reprehenderit id
              libero numquam atque fugit, facere cupiditate.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px]  border-[10px] border-white">
              <img
                src="/hero.jpg"
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About