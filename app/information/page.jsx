"use client";
import ContactForm from "@/components/ContactForm";
import WhyNext from "@/components/WhyNext";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <section className="bg-white-900">
      <div className="py-20 px-2">
        <h1 className="pb-20 text-4xl w-fit m-auto">About Next.js</h1>
        <div className="sm:content-container md:grid md:grid-cols-10 m-auto w-[100%] md:w-[90%]">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" text-theme_dark_orange-900 text-xl text-center md:text-left capitalize col-span-2 mb-10 "
          >
            What is Next.js and why should you consider it?
          </motion.h3>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 1 }}
            transition={{
              bounce: 0,
            }}
            className="md:pl-10 w-[95%] col-span-8 m-auto"
          >
            <p className="mb-10 m-auto">
              Next.js is like a special toolbox that helps developers like me
              create websites and applications more efficiently and with better
              results.
            </p>
            <p className="mb-4 m-auto text-xl font-semibold text-center md:text-left">
              Here's how Next.js benefits the websites I create:
            </p>

            <div className="mb-10 mx-auto">
              <WhyNext />
            </div>
            <p className="mb-20 m-auto">
              In summary, Next.js is like a toolkit that helps developers build
              faster, more secure, and beautiful websites. It ensures your
              website looks good, loads quickly, and is easy to maintain and
              improve in the long run. So, when you see a fantastic website or
              web app online, there's a good chance that it was built using
              Next.js!
            </p>
          </motion.div>
        </div>
        <hr className="w-[95%] md:w-[70%] m-auto" />
        <div className="pt-10  sm:py-20 sm:content-container md:grid md:grid-cols-10 m-auto w-[95%] lg:w-[70%]">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" text-theme_dark_orange-900 text-xl text-center md:text-left capitalize col-span-2 mb-10"
          >
            Why are Next.js websites so fast?
          </motion.h3>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 1 }}
            transition={{
              bounce: 0,
            }}
            className="md:pl-10 w-[100%] col-span-8 m-auto"
          >
            <p className="mb-10">
              Next.js uses optimized pages which require no server-side
              computation, and can be instantly streamed to the end-user from
              multiple locations. The result is an ultra fast loading experience
              for your users.
            </p>
            <p className="mb-10">
              Basically it loads only critical parts of the page, exactly when
              the visitor needs it, and not a second sooner. Once loaded,
              Next.js prefetches resources for other pages so that clicking on
              the site feels buttery smooth and responsive. Everything is
              statically generated at runtime - so your site loads as fast as
              possible.
            </p>
            <p className="">
              Unlike most traditional LAMP stack websites, the need for servers
              to perform logic and work whilst your visitors wait for the page
              to load is removed... which also ultimately removes the ways the
              website can be attacked by malicious code from hackers.
            </p>
          </motion.div>
        </div>
        <hr className="w-[95%] md:w-[70%] m-auto" />

        <div className="pt-10  sm:py-20 sm:content-container md:grid md:grid-cols-10 m-auto w-[95%] md:w-[70%]">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" text-theme_dark_orange-900 text-xl text-center md:text-left capitalize col-span-2 mb-10"
          >
            The importance of owning a fast website!
          </motion.h3>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 1 }}
            transition={{
              bounce: 0,
            }}
            className="md:pl-10 w-[100%] col-span-8 m-auto"
          >
            <p className="mb-10">
              A Google study found that{" "}
              <strong>
                “50% of mobile website visitors will leave after a three second
                page load”
              </strong>
              . In this same study, Google found that when comparing sites that
              load in 5 seconds vs sites that load in 19 seconds the sites had:
            </p>
            <ul className="pl-8 pb-10 font-semibold">
              <li>
                <span className="pr-4">🔥</span>70% longer average session
                lengths
              </li>
              <li>
                <span className="pr-4">🔥</span>35% lower bounce rates{" "}
              </li>
              <li>
                <span className="pr-4">🔥</span>25% higher ad viewability than
                their slower counterparts.{" "}
              </li>
            </ul>
            <p>
              <em>
                It’s also worth noting that Google now ranks sites higher that
                have fast performance!
              </em>
            </p>
          </motion.div>
        </div>
        <hr className="w-[95%] md:w-[70%] m-auto" />

        <div className="pt-10  sm:py-20 sm:content-container md:grid md:grid-cols-10 m-auto w-[95%] md:w-[70%]">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" text-theme_dark_orange-900 text-xl text-center md:text-left capitalize col-span-2 mb-10"
          >
            Already have a Wordpress website?{" "}
          </motion.h3>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 1 }}
            transition={{
              bounce: 0,
            }}
            className="md:pl-10 w-[100%] col-span-8 m-auto"
          >
            <p className="">
              No problem. Wordpress offers a “headless” approach which allows me
              to access your existing content. That way, you can continue to use
              what you’re familiar with for managing your content while your
              customers benefit from a fast, smooth and fully-customised
              website.. which is ultimately beneficial to your business and
              generating leads!
            </p>
          </motion.div>
        </div>
        <hr className="w-[95%] md:w-[70%] m-auto" />
        <div className="pt-10  sm:py-20 sm:content-container md:grid md:grid-cols-10 m-auto w-[95%] md:w-[70%]">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" text-theme_dark_orange-900 text-xl text-center md:text-left capitalize col-span-2 mb-10"
          >
            How about e-commerce websites?{" "}
          </motion.h3>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 1 }}
            transition={{
              bounce: 0,
            }}
            className="md:pl-10 w-[100%] col-span-8 m-auto"
          >
            <p className="mb-10">
              Headless e-commerce with Next.js provides flexibility,
              performance, and future-proofing, making it ideal for businesses
              that require a customised, scalable, and modern shopping
              experience for their customers.
            </p>
            <p className="mb-10">
              Platforms such as Shopify, Big Commerce, Swell, Medusa and
              Commerce Layer are a few options I’m familiar with but there are
              many more we can choose from. E-commerce platforms can help you
              manage everything from inventory & fulfilment to customer
              engagement and retention.{" "}
            </p>
            <p className="mb-10">
              Once we have a strong understanding of the needs of your business,
              we can go through the options that benefit you and your business
              the most.{" "}
            </p>
            <p className="mb-2 font-semibold">
              Already have an existing e-commerce store?
            </p>
            <p>
              This won’t be a problem - if you’re happy with the way your store
              management platform works for you (and depending on which platform
              you use), we can link your inventory to a new, ‘headless’,
              customer-facing website. Let’s chat 🤙{" "}
            </p>
          </motion.div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default page;
