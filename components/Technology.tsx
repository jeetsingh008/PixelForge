import React from "react";
import { TbMarquee } from "react-icons/tb";
import Marquee from "./Marquee";
import Image from "next/image";
import weaponicon from "../public/sword.png";

const Technology = () => {
  return (
    <section className="container p-4 py-7">
      <div className="overflow-hidden flex flex-col gap-4">
        {/* Heading */}
        <div className="flex justify-center items-center">
          <div className="h-[60px] w-[60px] relative inline-block scale-x-[-1]">
            <Image
              src={weaponicon}
              alt="weapon icon"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-[1.8rem] sm:text-5xl lg:text-6xl !leading-snug text-center font-medium p-6">
            Our <span className="text-secondary">Tech</span> Arsenal
          </h1>
          <div className="h-[60px] w-[60px] relative inline-block">
            <Image
              src={weaponicon}
              alt="weapon icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* Marquee */}
        <div className="py-4">
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default Technology;
