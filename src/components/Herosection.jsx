import { Button } from "@mui/material";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import heroImg from "../assets/hero.jpeg";
const Herosection = () => {
  return (
    <div className="relative  bg-effect py-[5rem] px-[5rem] lg:px-10" id="home">
      <div className="max-w-[1200px] mx-auto h-full">
        <div className="h-full grid grid-cols-1 gap-y-10 md:grid-cols-2">
          <div className=" flex items-start flex-col gap-y-5 justify-center">
            <p className="text-5xl md:text-4xl lg:text-5xl flex flex-col gap-y-2">
              <span className="head">Hi, I m</span>
              <span className="md:text-4xl lg:text-5xl font-[700] text-green-400 head1">
                Devankit Sahu
              </span>
            </p>

            <p className=" text-[1.5rem] lg:text-3xl">
              I m a{" "}
              <span className="text-[1.6rem] lg:text-4xl font-[700] text-red-400">
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
            <Button
              sx={{
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                background:
                  "linear-gradient(90deg, #a993fe -0.13%, #7e61e7 99.87%)",
                padding: "10px 20px",
              }}
            >
              About me
            </Button>
          </div>

          <div className="flex justify-center order-first md:order-last">
            <img
              src={heroImg}
              alt=""
              className="w-[400px] h-[400px] md:w-[30vw] md:h-[60vh] object-cover rounded-full md:rounded-[25px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] translate-x-[-50%]">
        <ul className="flex gap-x-3">
          <li className="cursor-pointer border p-2 rounded-full border-[#7e61e7]">
            <FacebookIcon />
          </li>
          <li className="cursor-pointer border p-2 rounded-full border-[#7e61e7]">
            <GitHubIcon />
          </li>
          <li className="cursor-pointer border p-2 rounded-full border-[#7e61e7]">
            <LinkedInIcon />
          </li>
          <li className="cursor-pointer border p-2 rounded-full border-[#7e61e7]">
            <TwitterIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Herosection;
