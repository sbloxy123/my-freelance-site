import Link from "next/link";
import { motion } from "framer-motion";

const Hero_cta = () => {
  return (
    <div className="h-fit z-50 relative lg:w-[70%] md:w-[80%]">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        itemProp="about"
        className="text-4xl lg:text-6xl md:text-5xl  z-10 text-center md:text-left font-thin text-theme_white-900"
      >
        Freelance Web Designer and Developer building incredibly fast websites
        using{" "}
        <span className="text-theme_peach-900 font-normal"> Next.js </span> and
        <span className="text-theme_green-900 font-normal"> React</span>
      </motion.h1>
      <div className="action-buttons md:flex gap-6 mt-16 capitalize w-[80%] lg:mt-26 mx-auto md:mr-[100%]">
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
          <Link
            type="button"
            className="py-3 md:px-15 w-full text-center mb-6 rounded-sm text-lg bg-theme_green-900 hover:bg-theme_black-900 hover:text-theme_green-900 uppercase border border-theme_black-900 hover:border-2 hover:border-theme_green-900"
            href="/projects/"
          >
            My Work
          </Link>
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
          <Link
            type="button"
            className="py-3 md:px-15 uppercase w-full text-center mb-6 rounded-sm border-2 border-theme_dark_orange-900 text-theme_dark_orange-900 font-semibold text-lg
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
  );
};

export default Hero_cta;
