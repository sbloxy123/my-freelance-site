"use client";
import Image from "next/image";
import projectData from "../data/projectData";
import { motion } from "framer-motion";
import ProjectTags from "./projectTags";

const ProjectTwo = () => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section className="md:content-container font-sans">
      {projectData.projects.map((project) => {
        const { id, title, summary, date_completed, preview_img, tags } =
          project;

        return (
          <div
            key={id}
            className={`${
              id % 2 === 0 && "md:flex-row-reverse"
            } mx-auto text-theme_white-900 w-[90%] md:flex justify-items-center justify-center py-12 md:py-16`}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5,
              }}
              viewport={{ once: true }}
              className="md:w-[50%] h-fit my-auto"
            >
              <div className="uppercase flex justify-between border-b border-theme_white-900 mb-12">
                <p>{title}</p>
                <p>
                  <span className="font-medium pr-2">year:</span>{" "}
                  {date_completed}
                </p>
              </div>
              <div
                className={`${
                  id % 2 === 0 && "md:ml-auto md:text-right"
                } md:w-[80%] mb-10 md:mb-0`}
              >
                {summary.map((para) => (
                  <p className="pb-4" key={para}>
                    {para}
                  </p>
                ))}
                <h3 className="pt-2 pb-2 mb-4 border-b border-theme_yellow-900 capitalize text-theme_yellow-900 ">
                  Services provided:
                </h3>
                <div className="flex gap-1 flex-wrap">
                  {tags.map((tagName, index) => {
                    let tagColor;
                    // E-Commerce", "Design", "Development", "Next.js", "Hosting", Strapi CMS (Content Management System)
                    if (tagName == "E-Commerce") {
                      tagColor = "bg-blue-200";
                    }
                    if (tagName == "Design") {
                      tagColor = "bg-green-200";
                    }
                    if (tagName === "Development") {
                      tagColor = "bg-orange-200";
                    }
                    if (tagName === "Next.js") {
                      tagColor = "bg-yellow-200";
                    }
                    if (tagName === "Hosting") {
                      tagColor = "bg-purple-200";
                    }
                    if (tagName === "Strapi CMS (Content Management System)") {
                      tagColor = "bg-cyan-200";
                    }
                    if (tagName === "Gatsby.js") {
                      tagColor = "bg-gray-200";
                    }

                    return (
                      <motion.p
                        key={tagName}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        viewport={{ once: true }}
                        className={`${tagColor} py-1 w-fit border-2 border-black px-2 uppercase text-sm text-theme_black-900`}
                      >
                        {tagName}
                      </motion.p>
                    );
                  })}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.2,
              }}
              viewport={{ once: true }}
              className="md:my-auto h-fit"
            >
              <Image
                className="w-auto h-auto"
                src={preview_img}
                alt="lce"
                width={500}
                height={500}
                priority={false}
              />
            </motion.div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectTwo;
