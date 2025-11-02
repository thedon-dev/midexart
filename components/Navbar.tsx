import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
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
    <nav className="absolute top-0 left-0 w-full px-[5%] lg:px-[8%] z-50 flex justify-between">
      <div className="w-4/10 bg-white p-5 flex justify-between">
        <h2 className="text-xl">MidexArt</h2>
        <button className="cursor-pointer">
          <HiBars3 size={25} className="" />
        </button>
      </div>

      <div className="flex ms-auto items-center">
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
    </nav>
  );
};

export default Navbar;
