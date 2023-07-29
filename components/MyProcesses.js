"use client";
import React from "react";
// import "../css/myProcesses.css";
import Image from "next/image";
import edits from "../public/images/icons/Processes/browser.svg";
import develop from "../public/images/icons/Processes/data.svg";
import content from "../public/images/icons/Processes/folder.svg";
import launch from "../public/images/icons/Processes/rocket.svg";
import call from "../public/images/icons/Processes/telephone.svg";
import wireframe from "../public/images/icons/Processes/wireframe.svg";
import { motion } from "framer-motion";

const MyProcesses = () => {
  const processes = [
    {
      title: "1. Quick Chat",
      description:
        "I need about 15 minutes of your time to learn more about your business and where you want to take it",
      icon: { call },
    },
    {
      title: "2. Content",
      description:
        "Once a plan in in place, I will explain the details of what I need to get started on your site",
      icon: { content },
    },

    {
      title: "3. Mockup",
      description:
        "I provide you with wireframes and designs to fit your company branding and requirements we have discussed",
      icon: { wireframe },
    },
    {
      title: "4. Edits",
      description:
        "If you want to make any changes, now is a perfect time to have another chat",
      icon: { edits },
    },
    {
      title: "5. Develop",
      description:
        "Leave this bit with me! This is the part where I use my expertise to make the site interactive and functional and SEO friendly",
      icon: { develop },
    },
    {
      title: "6. Launch",
      description:
        "Time to start seeing what a difference a custom website can make!",
      icon: { launch },
    },
  ];
  return (
    <section className="py-12 px-0 bg-theme_gray-900 h-[80%] font-light tracking-wide">
      <div className="content-container">
        <motion.h3
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{
            bounce: 0,
          }}
          className="text-xl py-12 pb-6 uppercase m-auto w-[100%] tracking-widest font-extralight"
        >
          The Process.
        </motion.h3>
        <div className="sm:grid m-auto sm:grid-cols-2 md:grid-cols-3">
          {processes.map((step) => {
            let result = Object.keys(step.icon).map((key) => [
              key,
              step.icon[key],
            ]);
            const iconSrc = result[0][1].src;
            return (
              <motion.div
                key={step.title}
                className="tab text-center m-8"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  bounce: 0,
                  delay: 0.5,
                }}
              >
                <Image
                  alt="call"
                  height={100}
                  width={100}
                  className="h-16 w-16 m-6 mx-auto"
                  src={iconSrc}
                />
                <h4 className="my-2 mx-0 text-2xl">{step.title}</h4>
                <p className="text-theme_black-900">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyProcesses;
