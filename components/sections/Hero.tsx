import React from "react";
import HeroBg from "../../assets/HeroBg.png";
import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${HeroBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 top-0 left-0 w-full h-full bg-black/60 z-0"></div>

      <div className="px-[5%] lg:px-[8%]">
        <div className="relative border-x border-white/20">
          <div className="absolute border-r border-white/20 top-0 left-0 w-4/10 h-full"></div>
          <div className="relative z-10 2xl:container mx-auto">
            <div className="pt-32">
              <div className=" text-white w-6/10">
                <h2 className="my-10 tracking-widest">Midexart Innovation</h2>
                <h1 className="text-7xl font-bold tracking-wide">
                  Interior design <br />
                  that matters
                </h1>
                <button className="rounded-full border border-h px-10 py-3 text-sm mt-20">
                  Schedule a call
                </button>
              </div>
              <div className="bg-white relative w-4/10 mt-26 py-9 px-8 z-10">
                <h5 className="tracking-widest text-[0.65rem] ">
                  Port-harcourt, Rivers State
                </h5>
                <h2 className="font-semibold text-xl mt-3">
                  MetLife Corporate Space
                </h2>
                <div className="absolute -left-[120px] bottom-0 w-[120px] h-full bg-[#F3F6FC] flex justify-center items-center">
                  <h1 className={`font-sans -rotate-90 text-xs tracking-[3px]`}>
                    Featured
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <button className="absolute right-10 bottom-20 border border-white/40 rounded-full p-8 flex justify-center items-center">
            <BsArrowDown size={20} className="text-white animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
