"use client";

import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const navigation = [
    {
      name: "Services",
      route: "",
    },
    {
      name: "Team",
      route: "",
    },
    {
      name: "Contact",
      route: "",
    },
  ];

  const socials = [
    {
      name: "@midexart",
      icon: <FaFacebook size={20} />,
      route: "",
    },
    {
      name: "@midexart",
      icon: <BsInstagram size={20} />,
      route: "",
    },
    {
      name: "@midexart",
      icon: <BsTwitterX size={20} />,
      route: "",
    },
  ];

  return (
    <footer className="px-[5%] lg:px-[8%] bg-[#090B19] text-white">
      <div
        className="border-x border-white/5 lg:grid grid-cols-3"
        data-aos="fade-up"
      >
        <div className="py-20 lg:py-32" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl font-bold">Midexart</h2>
          <h4 className="font-semibold text-sm my-5">About Us</h4>
          <p className="text-xs w-[95%] mt-3">
            Midex Art is a premier interior design company specializing in
            creating luxurious and functional spaces.
          </p>
        </div>

        <div
          className="lg:py-32 border-x border-white/5"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xs font-mono">navigation</h3>
          <div className="border-y border-white/5 flex flex-col mt-5">
            {navigation.map((nav, index) => (
              <motion.div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
                className={`relative ${
                  index === 1 ? "border-y border-white/5" : ""
                }`}
                initial={{ backgroundColor: "transparent", color: "#fff" }}
                whileHover={{ backgroundColor: "#fff", color: "#000" }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={nav.route}
                  className="relative z-10 px-4 py-5 block"
                >
                  {nav.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="pb-20 lg:py-32 border-x border-white/5 relative"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-xs font-mono mt-[130px]">Follow us on socials</h3>
          <div className="border-y border-white/5 flex flex-col mt-5">
            {socials.map((sol, index) => (
              <motion.div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
                className={`relative ${
                  index === 1 ? "border-y border-white/5" : ""
                }`}
                initial={{ backgroundColor: "transparent", color: "#fff" }}
                whileHover={{ backgroundColor: "#fff", color: "#000" }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={sol.route}
                  className="relative z-10 px-4 py-5 flex items-center gap-3"
                >
                  {sol.icon}
                  <p>{sol.name}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-xs font-serif mt-auto absolute bottom-8">
            © 2025 MIDEXART. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
