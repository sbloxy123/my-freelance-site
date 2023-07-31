"use client";
import React from "react";
import Hero_cta from "./Hero_cta";
import "../css/typewriter.css";
import Image from "next/image";
import HeroServices from "./HeroServices";

const Hero = () => {
  return (
    <>
      <div className="h-[100vh]">
        <div className="relative z-0 h-screen bg-black ">
          <Image
            className="opacity-40 bg-center cover"
            src="/images/hero6.jpg"
            alt="background image"
            fill
            priority
            // objectFit="cover"
            // objectPosition="center"
          />
          <div className="md:content-container h-fit pt-20 lg:pt-48 md:pt-32 z-50 relative px-4">
            <Hero_cta />
            <HeroServices />
          </div>

          {/* <div className="max-w-7xl m-auto z-10 relative h-[60vh] ">
            <div className="hero-text pt-16 bg-blend-darken pl-6">
              <div className="css-typing">
                <p id="consult" className="text-slate-200 border-spacing-0">
                  CONSULT.
                </p>
                <p id="design" className="text-theme_peach-900">
                  DESIGN.
                </p>

                <p
                  id="develop"
                  className="text-theme_green-900 border-spacing-0"
                >
                  DEVELOP.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
