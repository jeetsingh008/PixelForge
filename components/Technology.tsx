"use client";
import React from "react";
import Marquee from "./Marquee";
import { animate, motion } from "framer-motion";

const animationVariants = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
  },
};

const Technology = () => {
  return (
    <section className="p-4 py-7 overflow-x-hidden">
      <div className="container flex flex-col gap-4 overflow-hidden">
        {/* Heading */}
        <div className="overflow-x-hidden">
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            className="flex justify-start items-center"
          >
            <h1 className="text-[1.8rem] text-black contrast-150 bg-customSecondary sm:text-5xl 2xl:text-6xl !leading-snug text-start font-medium py-2 clipped-box px-3">
              Our Tech Arsenal
            </h1>
          </motion.div>
        </div>
        <div className="flex-wrap">
          <p className="text-start text-xs sm:text-sm text-customSecondary">
            We use a modern tech stack to build seamless web, mobile, and
            desktop applications. Our frontend ensures responsive interfaces,
            while our backend provides secure and efficient processing. We also
            specialize in mobile and Java development, creating scalable and
            high-performance solutions with reliable databases and cloud
            services.
          </p>
        </div>
        {/* Marquee */}
        <div className="py-4 border-2 rounded-full px-4 bg-[#e6ebf0]/50 border-customSecondary border-x-transparent overflow-hidden">
          <Marquee />
        </div>
      </div>
    </section>
  );
};

export default Technology;
