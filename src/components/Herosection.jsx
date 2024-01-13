import React from "react";
import { MagneticEffect } from "./";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <>
      <div
        className="absolute w-full h-full left-0 top-0 bg-no-repeat bg-cover bg-center opacity-[.2] -z-[1]"
        style={{
          backgroundImage: "url('/hero-overlay.jpg')",
        }}
      ></div>
      <div className="container px-10 2xl:px-40 mx-auto h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col items-center xl:items-start justify-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-[20px] md:text-[1.4vw] font-serif font-[500]"
            >
              👋 Hello, There!
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
              className="text-[28px] md:text-[4.7vw] font-serif capitalize"
            >
              I'm <span className="text-[red]">Devankit Sahu</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.7 }}
              className="text-[28px] md:text-[4.6vw] font-serif capitalize"
            >
              Web Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.9 }}
              className="text-[12px] ml-10 mr-10 md:ml-0 md:mr-0 text-center xl:text-start md:text-[1.1vw] font-serif"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              animi quasi vero minima harum natus.
            </motion.p>
            <MagneticEffect>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 1 }}
                className="border-[1px] border-white rounded-[50px] p-4 mt-6 cursor-pointer relative z-[1] overflow-hidden download-btn hover:text-black"
              >
                <h4 className="relative z-10 uppercase font-[600] tracking-[1px]">
                  see work
                </h4>
              </motion.div>
            </MagneticEffect>
          </div>
          <div className="flex items-end md:items-center justify-center order-first md:order-none md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeIn", delay: 0.3 }}
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] xl:w-[450px] xl:h-[450px] bg-[#edecec] rounded-[10px]"
            >
              <img
                src="hero-img.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
