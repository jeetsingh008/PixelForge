"use client";
import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";
import { motion } from "framer-motion";

const movingAnimationVariant = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: 0,
  },
};

const ServicesData = [
  {
    id: 1,
    title: "Web Development",
    link: "",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Mobile Development",
    link: "",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Software Development",
    link: "",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Satisfied Clients",
    link: "",
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "SEO Optimizations",
    link: "",
    icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "24/7 Support",
    link: "",
    icon: <BiSupport />,
    delay: 0.7,
  },
];

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <div className="overflow-x-hidden">
          <motion.div
            variants={movingAnimationVariant}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            className="bg-secondary contrast-150 mb-10 p-4 clipped-box w-full sm:w-2/3 lg:w-2/4 xl:w-1/3"
          >
            <h1 className="text-2xl text-black font-semibold contrast-150 text-left">
              Services we provide
            </h1>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <Link
              href={service.link}
              key={service.id}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-200 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="text-center px-3">{service.title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
