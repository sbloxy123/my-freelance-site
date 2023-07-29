"use client";
import React from "react";
import Image from "next/image";
import cms from "../public/images/icons/Services/monitor.svg";
import design from "../public/images/icons/Services/sketch.svg";
import branding from "../public/images/icons/Services/branding.svg";
import seo from "../public/images/icons/Services/seo-search-symbol.svg";
import support from "../public/images/icons/Services/support.svg";
import code from "../public/images/icons/Services/code.svg";
import { motion } from "framer-motion";

const MyServices = () => {
  const services = [
    {
      title: "Design",
      description:
        "Website design is an important part of your online presence. The design is the first thing your audience will see and it provides them with an insight into how you view them as a customer and how much they can trust you.",
      icon: { design },
    },
    {
      title: "CMS (Content Management Service) integration",
      description:
        "CMSs offer a fantastic way to manage your content by yourself. Perhaps you have heard of Wordpress?.. this is a CMS. I can integrate a number of these great services such as Contentful, Strapi and Wordpress to your Gatsby Site - all with excellent performance results.",
      icon: { cms },
    },

    {
      title: "Website Development",
      description:
        "By using modern technologies, I'm able to build fast and interactive sites that your audience will enjoy visiting. Nobody likes to visit a clunky, slow website and it can be detrimental you your business.",
      icon: { code },
    },
    {
      title: "SEO (Search Engine Optimisation)",
      description:
        "A website sitting higher in Search Engine results is a great way to bring in warm leads from people searching for terms that directly relate to your business.",
      icon: { seo },
    },
    {
      title: "Branding & Marketing Material",
      description:
        "You might want to think about branding your email templates, leaflets, business cards etc to match with your new website.",
      icon: { branding },
    },
    {
      title: "Support & Hosting",
      description:
        "Choosing the right hosting platform can be complicated so I can recommend where to host your site to provide you with reliability and performance. Once you're happy with your new site you're good to go. For a small retainer, I can provide you with ongoing support.",
      icon: { support },
    },
  ];

  return (
    <section itemscope itemtype="https://schema.org/CreativeWork">
      <div className="bg-theme_peach-900 py-10 font-light tracking-wide">
        <div className="m-4 medium:content-container">
          <motion.h3
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{
              bounce: 0,
            }}
            className="uppercase tracking-widest text-xl md:py-12 pb-6 m-auto w-[100%] font-extralight"
          >
            Services.
          </motion.h3>

          <div className="md:content-container sm:grid grid-cols-2 my-4 mx-auto gap-6">
            {/* ============================ */}

            {services.map((service) => {
              let result = Object.keys(service.icon).map((key) => [
                key,
                service.icon[key],
              ]);
              const iconSrc = result[0][1].src;

              return (
                <motion.div
                  key={service.title}
                  className="md:grid my-4 py-4 grid-cols-4"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    bounce: 0,
                    delay: 0.5,
                  }}
                >
                  <Image
                    className="md:col-span-1 h-16 w-16 md:my-0 mb-4 mx-auto"
                    alt={service.title}
                    src={iconSrc}
                    width={100}
                    height={100}
                  />
                  <div className="md:col-span-3 text-center mb-5 md:text-left">
                    <div className="h-10 mb-5 sm:mb-10 md:mb-14 lg:mb-8">
                      <h4 className="text-xl">{service.title}</h4>
                    </div>
                    <div className="service-text">
                      <p>{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* ============================ */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
