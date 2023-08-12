"use client";

import Image from "next/image";
import Link from "next/link";
import blur from "@/public/images/blur.png";
// import Typed from "react-typed";
import { motion } from "framer-motion";

import { Courier_Prime } from "next/font/google";

const courier = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier",
});
const NewHero = () => {
  return (
    <div className={` ${courier.variable} h-screen  bg-[#ecf0f3] relative`}>
      <Image
        src={blur}
        alt="blur"
        fill
        sizes="auto"
        quality={60}
        priority
        className="absolute cover animate-pulse"
      />
      {/* Main Text */}
      <div className="flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-28 md:pt-28">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-normal z-20 w-[90vw]">
          Freelance Web Designer and Developer building incredibly fast, smooth
          & performant websites with{" "}
        </h1>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-normal z-20 w-[70vw]">
          <span className="bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text">
            Next.js
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-[#ff781f] to-[#ffaf7a] text-transparent bg-clip-text">
            React
          </span>
        </h1>
        {/* buttons */}
        <div className="relative action-buttons md:flex justify-center gap-6 mt-36 capitalize w-[80%] lg:mt-26 mx-auto ">
          <motion.div
            className="md:w-[50%]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              bounce: 0,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="py-3 md:px-15 w-full text-center mb-6 rounded-sm text-lg bg-theme_green-900 hover:bg-theme_black-900 hover:text-theme_green-900 capitalize border border-theme_black-900 hover:border-2 hover:border-theme_green-900 ease-in-out duration-300">
              <Link type="button" href="/projects/">
                Projects
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="md:w-[50%]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              bounce: 0,
              delay: 0.4,
            }}
            viewport={{ once: true }}
          >
            <div className="py-3 md:px-15 capitalize w-full text-center mb-6 rounded-sm border-2 border-theme_dark_orange-900 text-theme_dark_orange-900 font-semibold text-lg hover:text-theme_black-900 hover:bg-theme_light_orange-900 ease-in-out duration-300">
              <Link type="button" href="/information/">
                What is NEXT.jS?
              </Link>
            </div>
          </motion.div>
        </div>{" "}
        {/* ====== typed ===== */}
        {/* <h2 className="font-courier text-3xl sm:text-4xl mt-10">
          {" "}
          <Typed
            strings={["CONSULT.   DESIGN.   DEVELOP"]}
            typeSpeed={150}
            startDelay={800}
            // backSpeed={100}
            // loop
          />{" "}
        </h2> */}
      </div>
    </div>
  );
};

export default NewHero;
