import React from "react";
import Hero_cta from "./Hero_cta";
// import "../css/typewriter.css";
import Image from "next/image";
// import HeroServices from "./HeroServices";

const Hero = () => {
  return (
    <>
      <div className="relative z-10 h-screen bg-black">
        <Image
          className="opacity-40 bg-center"
          src="/hero6.jpg"
          alt="background image"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          placeholder="blur"
          priority
          blurDataURL="/hero6_blur.jpg"
          // objectFit="cover"
          // objectPosition="center"
        />

        <div className="absolute md:content-container h-fit pt-20 md:pt-28 lg:pt-40 z-50  px-4">
          <Hero_cta />
          {/* <HeroServices /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
