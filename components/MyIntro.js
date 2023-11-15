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
          <div className="flex flex-col-reverse md:flex md:flex-row gap-2 md:gap-6">
            <div className="my-auto md:w-[70%]">
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  bounce: 0,
                  delay: 0.5,
                }}
                viewport={{ once: true }}
                itemProp="about"
                className="md:text-xl md:pb-6 md:text-left text-2xl text-center font-extralight pt-4 md:pt-0"
              >
                <span className="font-normal">
                  Hello! I&apos;m Stuart Bloxham.
                </span>{" "}
                I&apos;m a dedicated Freelance Web Designer and Developer with a
                passion revolved around crafting{" "}
                <span className="font-normal">
                  fast, fluid, and high-performing
                </span>{" "}
                websites and web applications, all powered by the dynamic
                capabilities of React, with a specific focus on{" "}
                <span className="font-normal">Next Js</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  bounce: 0,
                  delay: 0.5,
                }}
                viewport={{ once: true }}
                itemProp="about"
                className="md:text-xl md:pb-6 md:text-left text-2xl text-center font-extralight pt-4 md:pt-0"
              >
                With a strong combination of design and development expertise, I
                can help guide you throughout the entire process. Whether
                it&apos;s from the ground up, starting with{" "}
                <span className="font-normal">
                  wireframes, design, and development
                </span>
                , or refining an existing design into a meticulously crafted
                website with thoughtful enhancements .{" "}
              </motion.p>
              {/* <!-- BUTTONS --> */}
              <div className="action-buttons md:flex gap-6 mt-6 capitalize ">
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
                    className="py-3 md:px-15 w-full text-center border-theme_black-900 border mb-6 rounded-sm bg-theme_green-900 hover:bg-theme_black-900 hover:text-theme_green-900 uppercase font-medium hover:border-2 hover:border-theme_green-900 ease-in-out duration-300"
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
                  hover:bg-theme_light_orange-900 ease-in-out duration-300
                  "
                    href="/information/"
                  >
                    What is Next.js?
                  </Link>
                </motion.div>
              </div>{" "}
            </div>
            {/* <!-- PORTRAIT IMG --> */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.4,
              }}
              className="h-fit my-auto md:pb-20"
            >
              <Image
                className="rounded-full align-middle mx-auto w-[50%] md:w-full"
                src="/images/me.jpg"
                alt="my profile avatar image"
                placeholder="tracedSVG"
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyIntro;
