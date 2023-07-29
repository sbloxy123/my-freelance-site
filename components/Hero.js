import React from "react";
import "../css/typewriter.css";
import "../css/background-image.css";
import Image from "next/image";

const Hero = () => {
  const hats = [
    {
      prep: "",
      suffix: "Web Design",
    },
    {
      prep: "",
      suffix: "Web Development",
    },
    {
      prep: "",
      suffix: "Domain Setup",
    },
    {
      prep: "",
      suffix: "E-Commerce",
    },
  ];
  return (
    <>
      <div className="h-90">
        <div className="  relative z-0 h-fit bg-black">
          <Image
            className="opacity-50"
            src="/images/hero6.jpg"
            alt="background image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="max-w-7xl m-auto z-10 relative h-[60vh] ">
            <div className="hero-text pt-16 bg-blend-darken pl-6">
              <div className="css-typing">
                <p id="consult" className="text-slate-200 border-spacing-0">
                  CONSULT.{" "}
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
            {/* <TypeWriter hats={hats} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
