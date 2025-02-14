"use client";
import Image from "next/image";
import quotes from "@/public/leftQuote.png";
import batmanPic from "@/public/batman.png";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Testimonial = () => {
  const [isHovered, setIsHovered] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index: number) => {
    setIsHovered((prev) => prev.map((val, i) => (i === index ? true : val)));
  };

  const handleMouseExit = (index: number) => {
    setIsHovered((prev) => prev.map((val, i) => (i === index ? false : val)));
  };

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto py-14 md:max-w-1/2 space-y-14 lg:space-y-20">
        <div className="flex justify-center items-center">
          <h1 className="mx-14 text-3xl md:text-4xl xl:text-5xl text-center">
            <span className="text-primary">Love Notes</span> from Our Customers
          </h1>
        </div>
        {/* Testimonial container */}
        <div className="flex flex-col gap-2 items-center">
          {/* card */}
          <div className="relative w-4/5 lg:w-3/5 rounded-xl sm:rounded-none mx-auto">
            <div className="absolute hidden md:block right-0 top-0 transform scale-x-[-1] ">
              <Image
                className="right-0 top-0"
                src={quotes}
                alt="quotes"
                height={50}
                width={50}
              />
            </div>
            <div className="bg-secondary md:clipped-box2 text-white">
              <p className="text-center md:text-start text-xs md:text-sm p-6 md:pr-[15%] leading-loose tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                aspernatur obcaecati repellendus cupiditate. Provident hic
                incidunt distinctio dicta, modi aspernatur nesciunt cumque neque
                quasi quis ratione, voluptatibus aut sit sunt!
              </p>
            </div>
            <div className="flex justify-end items-center gap-2 mt-2">
              <div className="text-end">
                <h1 className="text-2xl">Batman</h1>
                <p className="text-xs">Tailor</p>
              </div>
              <div>
                <Image
                  src={batmanPic}
                  alt="batman"
                  height={40}
                  width={40}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          {/* Slider buttons */}
          <div className="flex gap-1">
            <div
              className="h-6 w-6 border-4 rounded-full border-secondary"
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseExit(0)}
            >
              <AnimatePresence>
                {isHovered[0] && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="bg-primary h-full w-full rounded-full border-2 border-white"
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              className="h-6 w-6 border-4 rounded-full border-secondary"
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseExit(1)}
            >
              <AnimatePresence>
                {isHovered[1] && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="bg-primary h-full w-full rounded-full border-2 border-white"
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              className="h-6 w-6 border-4 rounded-full border-secondary"
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseExit(2)}
            >
              <AnimatePresence>
                {isHovered[2] && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="bg-primary h-full w-full rounded-full border-2 border-white"
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              className="h-6 w-6 border-4 rounded-full border-secondary"
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseExit(3)}
            >
              <AnimatePresence>
                {isHovered[3] && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="bg-primary h-full w-full rounded-full border-2 border-white"
                  ></motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//
export default Testimonial;
