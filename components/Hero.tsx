"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import blob from "../public/blob.png";
import heropng from "../public/Heropng.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-light relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[640px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-8 lg:max-w-[400px]">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
                ease: ["easeIn", "easeOut"],
                duration: 0.5,
              }}
              className="text-4xl md:text-5xl font-bold !leading-snug"
            >
              We Build <span className="text-secondary">Websites</span> That
              Build Your Business
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
                ease: ["easeIn", "easeOut"],
                duration: 0.5,
              }}
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 group-hover:-rotate-45 duration-200 ease-in-out" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex justify-center items-center">
          <div className="w-[350px] md:w-[400px] xl:w-[500px] relative z-10">
            <Image
              src={heropng}
              alt="A boy with a computer pic"
              layout="responsive"
              className="drop-shadow"
            />
          </div>
          <div className="absolute -bottom-10 lg:-bottom-6 xl:-bottom-14 w-[540px] md:w-[620px] lg:w-[700px] xl:w-[820px] z-[1] hidden md:block">
            <Image src={blob} alt="blog pic" layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
