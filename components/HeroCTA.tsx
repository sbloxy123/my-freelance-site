"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroCTA = () => {
  return (
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
        <div className="py-3 md:px-15 w-full text-center mb-6 rounded-sm text-lg bg-theme_green-900 hover:bg-theme_black-900 hover:text-theme_green-900 capitalize border border-theme_black-900 hover:border-2 hover:border-theme_green-900 ease-in-out duration-300 cursor-pointer">
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
        <div className="py-3 md:px-15 capitalize w-full text-center mb-6 rounded-sm border-2 border-theme_dark_orange-900 text-theme_dark_orange-900 font-semibold text-lg hover:text-theme_black-900 hover:bg-theme_light_orange-900 ease-in-out duration-300 cursor-pointer">
          <Link type="button" href="/information/">
            What is NEXT.jS?
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroCTA;
