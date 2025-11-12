"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
// import bgImg from "../../assets/";

const Explore = () => {
  const works = ["Paintings", "Pop Finishing", "Wall Designs"];

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="explore" className="lg:px-[8%] lg:py-32">
      <div className="2xl:container mx-auto">
        <div
          className="bg-black/40 py-10 lg:py-16 rounded-b text-white"
          style={{
            backgroundImage: "url(/IMG_6296.JPG)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-xs mx-auto uppercase text-center">
            Explore Our Works
          </h3>
          <motion.h1
            className="font-semibold text-center text-4xl my-5 lg:my-8 px-5 lg:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            See What We Can Do Together
          </motion.h1>

          <div className="flex justify-center">
            <Link
              href="#explore"
              className="border rounded-full px-6 py-4 text-white text-[0.65rem] uppercase"
            >
              View all projects
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:w-[80%] mx-auto bg-[#F3F6FC]">
          {works.map((work, index) => (
            <div
              key={index}
              className="text-center flex justify-center items-center py-10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h2 className="text-xs lg:text-sm font-mono tracking-[0.2]">
                {work}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
