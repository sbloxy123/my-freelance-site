"use client";
import React from "react";
import Hero_cta from "./Hero_cta";
import "../css/typewriter.css";
import Image from "next/image";
import HeroServices from "./HeroServices";

const Hero = () => {
  return (
    <>
      <div className="relative z-10 h-screen bg-black">
        <div className="z-0">
          <Image
            className="opacity-40 bg-center"
            src="/images/hero6.jpg"
            alt="background image"
            fill
            priority
            // objectFit="cover"
            // objectPosition="center"
          />
        </div>
        <div className="relative md:content-container h-fit pt-20 lg:pt-48 md:pt-32 z-50  px-4">
          <Hero_cta />
          <HeroServices />
        </div>
      </div>
    </>
  );
};

export default Hero;
