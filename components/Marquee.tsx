"use client";
import React from "react";
import { motion } from "framer-motion";
import { icons } from "@/util/icons";
import Image from "next/image";

const Marquee = () => {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex flex-shrink-0 gap-16 pr-16 border-none p-2"
      >
        {icons.map((icon, index) => (
          <div key={index} className=" relative h-[80px] w-[80px] ">
            <Image
              src={icon}
              alt="icon"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex flex-shrink-0 gap-16 border-none p-2"
      >
        {icons.map((icon, index) => (
          <div key={index} className="relative h-[80px] w-[80px] ">
            <Image
              src={icon}
              alt="icon"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex flex-shrink-0 gap-16 border-none p-2"
      >
        {icons.map((icon, index) => (
          <div key={index} className="relative h-[80px] w-[80px] ">
            <Image
              src={icon}
              alt="icon"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
