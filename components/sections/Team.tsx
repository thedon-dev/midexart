"use client";

import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const teamMembers = [
    {
      name: "Victor",
      position: "ceo",
      image: "/PHOTO-2025-11-04-10-15-40.jpg",
      socials: [
        {
          icon: <FaFacebookF size={16} className="" color="black" />,
          link: "",
        },
        {
          icon: <BsInstagram size={16} className="" color="black" />,
          link: "",
        },
        {
          icon: <BsTwitterX size={16} className="" color="black" />,
          link: "",
        },
      ],
    },
    // {
    //   name: "Victor",
    //   position: "ceo",
    //   image: memmberImg.src,
    //   socials: [
    //     {
    //       icon: <FaFacebookF size={16} className="" color="black" />,
    //       link: "",
    //     },
    //     {
    //       icon: <BsInstagram size={16} className="" color="black" />,
    //       link: "",
    //     },
    //     {
    //       icon: <BsTwitterX size={16} className="" color="black" />,
    //       link: "",
    //     },
    //   ],
    // },
    // {
    //   name: "Victor",
    //   position: "ceo",
    //   image: memmberImg.src,
    //   socials: [
    //     {
    //       icon: <FaFacebookF size={16} className="" color="black" />,
    //       link: "",
    //     },
    //     {
    //       icon: <BsInstagram size={16} className="" color="black" />,
    //       link: "",
    //     },
    //     {
    //       icon: <BsTwitterX size={16} className="" color="black" />,
    //       link: "",
    //     },
    //   ],
    // },
  ];
  return (
    <section id="team" className="px-[5%] lg:px-8%] py-20 lg:py-32">
      <div className="2xl:container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="uppercase text-xs">Our Team</h4>
            <h1 className="text-4xl font-semibold mt-3 text-[#270F42]">
              Behind The Design
            </h1>
          </div>
          <div className="hidden lg:flex font-mono items-center justify-center bg-black px-6 py-4 rounded-full text-white">
            <p className="text-[0.6rem] uppercase my-auto tracking-widest">
              Learn About Midexart
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-lg">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${member.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className={`${
                index === 1 ? "lg:mt-16" : index === 2 ? "lg:mt-32" : ""
              } h-[400px] lg:h-[500px] p-5 flex flex-col justify-between`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between text-white items-center">
                <h4 className="font-semibold text-lg">{member.name}</h4>
                <h4 className="font-serif tracking-widest text-xs">
                  {member.position}
                </h4>
              </div>
              <div className="mt-auto flex gap-4 justify-center">
                {member.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="text-white text-[0.5rem] uppercase bg-white h-8 w-8 lg:h-10 lg:w-10 rounded-full flex justify-center items-center"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
