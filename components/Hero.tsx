"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import blob from "../public/blob.png";
import heropng from "../public/Heropng.png";
import { motion } from "framer-motion";
import { BackgroundLines } from "./ui/background-lines";

const Hero = () => {
  return (
    <BackgroundLines
      className="overflow-hidden bg-gradient-to-r from-[#f4f6f8] via-[#eef2f6] to-[#f7f9fb]
 rounded-b-md relative"
    >
      {/* <div className="absolute">
        <Image src={bg} alt="background image" layout="fixed"/>
      </div> */}
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
              className="text-4xl contrast-150 md:text-5xl lg:text-[3.2rem] font-bold !leading-snug"
            >
              We Build{" "}
              <span className="text-customcustomSecondary">Websites</span> That
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
              <button className="primary-btn rounded-3xl flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 duration-200 ease-in-out" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
            className="w-[350px] md:w-[400px] xl:w-[450px] relative z-10"
          >
            <Image
              src={heropng}
              alt="A boy with a computer pic"
              layout="responsive"
              className="drop-shadow"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            className="absolute -bottom-10 md:-bottom-0 lg:-bottom-6 xl:-bottom-14 w-[540px] md:w-[620px] lg:w-[700px] xl:w-[750px] z-[1] hidden md:block"
          >
            <Image src={blob} alt="blog pic" layout="responsive" />
          </motion.div>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default Hero;
