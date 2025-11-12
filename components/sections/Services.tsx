"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { LuBlocks } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const clients = [{}];
  const services = [
    {
      heading: "POP Ceiling Installation",
      description:
        "Professional installation of plaster of Paris ceilings with custom designs to enhance your interior spaces.",
      icon: <LuBlocks size={25} color="#270F42" />,
    },
    {
      heading: "Wall Skimming",
      description:
        "Professional wall skimming that creates flawlessly smooth surfaces, ensuring the perfect foundation for paint or wallpaper application.",
      icon: <LuBlocks size={25} color="#270F42" />,
    },
    {
      heading: "Home & Office Painting",
      description:
        "Complete interior painting solutions for both residential and commercial spaces using premium quality paints.",
      icon: <LuBlocks size={25} color="#270F42" />,
    },
  ];

  return (
    <section id="services" className="px-[5%] lg:px-[8%]" data-aos="fade-up">
      <div className="border-r border-black/5 2xl:container mx-auto">
        <div className="bg-[#F3F6FC] p-10 w-8/12" data-aos="fade-right">
          <div className="flex gap-2 items-center">
            <h2 className="text-nowrap text-[0.65rem] font-mono tracking-[0.2rem]">
              Corporate Client
            </h2>
            <div className="h-px border-b border-black/20 w-full" />
          </div>
        </div>
      </div>

      <div className="pb-24 2xl:container mx-auto border-x border-black/5">
        <div className="grid grid-cols-3 lg:divide-x divide-black/5">
          <div
            className="pt-20 lg:pt-30 py-20 col-span-3 lg:col-span-1"
            data-aos="fade-right"
          >
            <h5 className="text-xs font-mono tracking-[0.2rem]">Services</h5>
            <h1 className="text-5xl font-semibold mt-1 text-[#270F42]">
              We do it best.
            </h1>
            <div className="mt-10" data-aos="fade-left">
              <Link
                href="#services"
                className="bg-[#270F42] flex lg:hidden w-fit rounded-full px-6 py-4 text-white text-[0.65rem] font-mono"
              >
                View all services
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex pt-30 py-20"></div>
          <div
            className="lg:flex hidden justify-end items-center pt-30 py-20"
            data-aos="fade-left"
          >
            <Link
              href="#services"
              className="bg-black rounded-full px-6 py-4 text-white text-[0.65rem] font-mono"
            >
              View all services
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-x divide-black/5">
          {services.map((service, index) => (
            <div
              className="border-y border-black/10 p-8"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              key={index}
            >
              <div className="p-3 rounded-full h-[50px] w-[50px] bg-[#F3F6FC]">
                {service.icon}
              </div>

              <h2 className="font-bold mt-10 text-lg text-[#270F42]">
                {service.heading}
              </h2>
              <p className="text-justify">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
