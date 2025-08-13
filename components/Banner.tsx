"use client";
import Image from "next/image";
import React from "react";
import bannerImage from "../public/heroimg.jpg";
import pic1 from "../public/paint-palette.png";
import pic2 from "../public/fast-time.png";
import pic3 from "../public/book.png";
import pic4 from "../public/headset.png";

const Features = [
  {
    id: 1,
    text: "Custom Designs Tailored to Your Brand",
    pic: pic1,
  },
  {
    id: 2,
    text: "Agile Development Process for Quick Turnarounds",
    pic: pic2,
  },
  {
    id: 3,
    text: "Transparent Pricing with No Hidden Fees",
    pic: pic3,
  },
  {
    id: 4,
    text: "Ongoing Support and Maintenance",
    pic: pic4,
  },
];

const Banner = () => {
  return (
    <section className="overflow-x-hidden">
      <div
        className="container relative overflow-hidden bg-gradient-to-r from-[#f0f4f8] via-[#d9e2ec] to-[#f0f4f8]
 text-dark py-14 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:space-y-6 md:space-y-0"
      >
        {/* Banner image */}
        <div className="flex justify-center items-center">
          <div className="w-[800px] md:w-[1200px]">
            <Image
              src={bannerImage}
              alt="banner image"
              layout="responsive"
              className="contrast-125 hover:drop-shadow-md  duration-300 rounded-full"
            />
          </div>
        </div>
        {/* Banner text */}
        <div className="flex flex-col gap-8 justify-center items-center relative z-30 cursor-pointer">
          <div>
            <h1 className="text-6xl md:text-5xl lg:text-6xl font-semibold text-center md:text-start">
              Your{" "}
              <span className="text-customPrimary hover:animate-pulse cursor-grab">
                Vision
              </span>
              , Our{" "}
              <span className="text-customSecondary hover:animate-pulse  cursor-grab">
                Code
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4">
            {Features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col gap-4 justify-center items-center bg-[#ffffff] rounded-2xl hover:scale-105 hover:bg-white hover:shadow-2xl group duration-200 ease-in-out py-5 p-6"
              >
                <div className="h-6 w-6 group-hover:animate-ping">
                  <Image src={feature.pic} alt="icon" layout="fixed" />
                </div>
                <p className="text-center px-2">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
