"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoPlayOutline } from "react-icons/io5";
import bgImage from "@/assets/about-background.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const testimonials = [
    "Your vision, our expertise, creating beautiful interiors together",
    "Professional painters dedicated to perfection in every brushstroke",
    "From concept to completion, we bring color to your world",
    "Trusted by homeowners and businesses for flawless finishes",
    "Where quality craftsmanship meets exceptional customer service",
    "Making your walls tell a story with our premium painting services",
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="px-[5%] lg:px-[8%] relative">
      <div className="absolute top-0 left-0 w-full h-full inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.7)" }}
        >
          <source
            src="/videos/VIDEO-2025-11-11-05-41-52.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="relative z-20">
        <div className="text-white 2xl:container mx-auto py-20 lg:py-32 lg:pb-40 border-x border-black/5">
          <h5
            className="text-xs font-mono tracking-[0.2rem] pl-2"
            data-aos="fade-up"
          >
            ABOUT MIDEXART
          </h5>

          <AnimatePresence mode="wait">
            <motion.h1
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl lg:text-5xl font-semibold mt-14 lg:w-1/2 pl-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {testimonials[currentTestimonial]}
            </motion.h1>
          </AnimatePresence>

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
