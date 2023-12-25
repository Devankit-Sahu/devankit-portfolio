import { Button } from "@mui/material";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import heroImg from "../assets/hero2.png";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className="relative  bg-effect py-[5rem] px-[5rem] lg:px-10" id="home">
      <div className="max-w-[1200px] mx-auto h-full">
        <div className="h-full grid grid-cols-1 gap-y-10 md:grid-cols-2">
          <div className=" flex items-start flex-col gap-y-5 justify-center">
            <p className="text-5xl md:text-4xl lg:text-5xl flex flex-col gap-y-2">
              <motion.span
                initial={{ translateX: -100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="head"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                initial={{ translateX: -100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="md:text-4xl lg:text-5xl font-[700] text-green-400 head1"
              >
                Devankit Sahu
              </motion.span>
            </p>

            <motion.p
              initial={{ translateX: -100, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className=" text-[1.5rem] lg:text-3xl"
            >
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
            </motion.p>
            <p className="text-md my-3">
              <motion.span
                initial={{ opacity: 0, rotateY: 180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
                qui.
              </motion.span>
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
            <div className="bg-overlay w-[400px] h-[400px] rounded-full overflow-hidden">
              <img
                src={heroImg}
                alt=""
                className="w-full h-full object-cover blur-0"
                // className="w-[400px] h-[400px] md:w-[30vw] md:h-[60vh] object-cover rounded-full md:rounded-[25px]"
              />
            </div>
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
