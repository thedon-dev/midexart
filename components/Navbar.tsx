"use client";

import Link from "next/link";
import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Services",
      route: "",
    },
    {
      name: "Projects",
      route: "",
    },
    {
      name: "Contacts",
      route: "",
    },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full px-[5%] lg:px-[8%] z-50">
      <div className="2xl:container mx-auto flex justify-between">
        <div className="w-full fixed left-0 top-0 lg:relative lg:w-4/10 bg-white p-5 flex justify-between">
          <h2 className="text-xl">MidexArt</h2>
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <HiBars3 size={25} />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex ms-auto items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.route}
              className="text-white px-7 text-xs font-sans py-7 tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed top-18 left-0 w-full bg-white shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.route}
                  className="block px-7 py-4 text-black text-sm font-sans tracking-widest border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
