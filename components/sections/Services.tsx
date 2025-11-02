import Link from "next/link";
import React from "react";
import { LuBlocks } from "react-icons/lu";

const Services = () => {
  const clients = [{}];
  const services = [
    {
      heading: "Space Planning",
      description:
        "We create smart and functional layouts that optimize every inch of your space, ensuring comfort, beauty, and effortless movement.",
      icon: <LuBlocks size={25} color="#B9BED0" />,
    },
    {
      heading: "Custom Furniture",
      description:
        "Designed to perfectly fit your lifestyle and aesthetic, our bespoke furniture pieces bring a unique and luxurious touch to your interiors.",
      icon: <LuBlocks size={25} color="#B9BED0" />,
    },
    {
      heading: "Furniture Layout",
      description:
        "We strategically place furnishings to enhance balance, visual flow, and usability, achieving a well-coordinated and inviting environment.",
      icon: <LuBlocks size={25} color="#B9BED0" />,
    },
  ];

  return (
    <section className="px-[5%] lg:px-[8%]">
      <div className="border-r border-black/5">
        <div className="bg-[#F3F6FC] p-10 w-8/12">
          <div className="flex gap-2 items-center">
            <h2 className="text-nowrap text-[0.65rem] font-mono tracking-[0.2rem]">
              Corporate Client
            </h2>
            <div className="h-px border-b border-black/20 w-full" />
          </div>
        </div>
      </div>

      <div className="pb-10 2xl:container mx-auto border-x border-black/5">
        <div className="grid grid-cols-3 divide-x divide-black/5">
          <div className="pt-30 py-20">
            <h5 className="text-xs font-mono tracking-[0.2rem]">Services</h5>
            <h1 className="text-5xl font-semibold mt-1">We do it best.</h1>
          </div>
          <div className="pt-30 py-20"></div>
          <div className="flex justify-end items-center pt-30 py-20">
            <Link
              href="#services"
              className="bg-black rounded-full px-6 py-4 text-white text-[0.65rem] font-mono"
            >
              View all services
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-black/5">
          {services.map((service, index) => (
            <div className="border-y border-black/10 p-8">
              <div className="p-3 rounded-full h-[50px] w-[50px] bg-[#F3F6FC]">
                {service.icon}
              </div>

              <h2 className="font-bold mt-10 text-lg">{service.heading}</h2>
              <p className="text-justify">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
