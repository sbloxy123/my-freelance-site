"use client";
import React from "react";
// import "../css/myIntro.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MyIntro = () => {
  return (
    <section
      itemScope
      itemType="https://schema.org/CreativeWork"
      className="my-intro"
    >
      <div className="max-w-7xl m-auto">
        <div className="my-10 w-[85%] m-auto">
          <div className="flex flex-col-reverse md:flex md:flex-row gap-10 md:gap-20">
            <div className="my-auto md:w-[70%]">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                itemProp="about"
                className="md:text-3xl md:pb-6 md:text-left text-2xl text-center font-extralight"
              >
                Freelance Web Designer and Developer building incredibly fast
                websites using <span id="emph"> Next.js </span> and
                <span id="emph"> React</span>.
              </motion.h1>
              {/* <!-- BUTTONS --> */}
              <div className="action-buttons md:flex gap-6 mt-6 capitalize">
                <motion.div
                  className="md:w-[50%]"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    bounce: 0,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    type="button"
                    className="py-3 md:px-15 w-full text-center mb-6 rounded-sm bg-theme_green-900 hover:bg-theme_black-900 hover:text-theme_green-900 uppercase font-medium hover:border-2 hover:border-theme_green-900"
                    href="/projects/"
                  >
                    Projects
                  </Link>
                </motion.div>
                <motion.div
                  className="md:w-[50%]"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    bounce: 0,
                    delay: 0.4,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    type="button"
                    className="py-3 md:px-15 w-full text-center mb-6 rounded-sm border border-theme_dark_orange-900 text-theme_dark_orange-900
                  hover:text-theme_black-900
                  hover:bg-theme_light_orange-900
                  "
                    href="/information/"
                  >
                    What is Next.js?
                  </Link>
                </motion.div>
              </div>{" "}
            </div>
            {/* <!-- PORTRAIT IMG --> */}

            <div className="">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.3,
                }}
                className=""
              >
                <Image
                  className="rounded-full md:my-8 mx-auto "
                  src="/images/me.jpg"
                  alt="my profile avatar image"
                  placeholder="tracedSVG"
                  width={300}
                  height={300}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyIntro;
