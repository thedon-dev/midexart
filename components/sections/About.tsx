"use client";

import React, { useEffect } from "react";
import { IoPlayOutline } from "react-icons/io5";
import bgImage from "@/assets/about-background.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="px-[5%] lg:px-[8%] relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 inset-0 z-10"></div>
      <div className="relative z-20">
        <div className="text-white 2xl:container mx-auto py-20 lg:py-32 lg:pb-40 border-x border-black/5">
          <h5
            className="text-xs font-mono tracking-[0.2rem] pl-2"
            data-aos="fade-up"
          >
            ABOUT MIDEXART
          </h5>

          <h1
            className="text-3xl lg:text-5xl font-semibold mt-14 lg:w-1/2 pl-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We're transforming spaces with premium interior painting solutions
            that bring your vision to life.
          </h1>

          <p
            className="mt-10 text-xs font-mono pl-5 border-l border-gray-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            VICTOR, CEO
          </p>

          <div className="mt-20" data-aos="fade-up" data-aos-delay="300">
            <div className="ml-5 border border-white/50 rounded-full h-18 w-18 flex items-center justify-center">
              <IoPlayOutline size={25} className="text-white m-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
