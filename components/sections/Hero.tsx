"use client";

import React from "react";
import HeroBg from "../../assets/HeroBg.png";
import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative lg:min-h-fit"
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 top-0 left-0 w-full h-full bg-black/60 z-0"></div>

      <div className="px-[5%] lg:px-[8%]">
        <div className="relative lg:border-x border-white/20 2xl:container mx-auto">
          <div className="absolute lg:border-r border-white/20 top-0 left-0 w-4/10 h-full"></div>
          <div className="relative z-10 2xl:container mx-auto">
            <div className="pt-20 lg:pt-32">
              <motion.div
                className="text-white lg:w-6/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-xs lg:text-base my-10 tracking-widest">
                  Midexart Interiors
                </h2>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-wide">
                  Interior design <br />
                  that matters
                </h1>
                <div className="mt-10 lg:mt-20">
                  <motion.a
                    href="https://wa.me/+2348159154713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-h px-10 py-3 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule a call
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                className="bg-[#270F42] relative lg:w-4/10 mt-26 py-9 px-8 z-10 text-white"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h5 className="tracking-widest text-[0.65rem] ">
                  Port-harcourt, Rivers State
                </h5>
                <h2 className="font-semibold text-xl mt-3">
                  MetLife Corporate Space
                </h2>
                <div className="absolute left-0 -top-14 lg:top-0 lg:-left-[120px] bottom-0 w-[120px] py-5 h-fit lg:h-full bg-[#F3F6FC] flex justify-center items-center">
                  <h1
                    className={`font-sans lg:-rotate-90 text-xs tracking-[3px] text-[#270F42]`}
                  >
                    Featured
                  </h1>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.a
            href="#about"
            className="absolute right-8 lg:right-10 bottom-40 lg:bottom-20 border border-white/40 rounded-full p-6 lg:p-8 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <BsArrowDown size={20} className="text-white animate-bounce" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
