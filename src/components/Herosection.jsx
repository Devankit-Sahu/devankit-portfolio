import { Button } from "@mui/material";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Herosection = () => {
  return (
    <div className="h-screen">
      <div className="max-w-[1200px] mx-auto h-full">
        <div class="h-full grid grid-cols-2">
          <div className=" flex flex-col gap-y-5 items-center justify-center">
            <p className="text-3xl">
              Hi, I m
              <span className="text-5xl font-[700] text-green-400">
                Devankit Sahu
                {/* <Typewriter
                  words={["Devankit Sahu"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursorBlinking={false}
                /> */}
              </span>
            </p>
            <p className="text-4xl">
              I m a{" "}
              <span className="text-5xl font-[700] text-red-400">
                <Typewriter
                  words={["Full Stack Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursorBlinking={false}
                />
              </span>
            </p>
            <p className="text-md my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              qui.
            </p>
            <Button variant="outlined" sx={{ borderRadius: "25px" }}>
              Hire me
            </Button>
          </div>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
