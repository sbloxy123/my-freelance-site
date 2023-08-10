import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      itemScope
      itemType="https://schema.org/Organization"
      className="text-theme_black-900  py-10 w-screen bg-theme_peach-900 text-center "
    >
      <Link href="/">
        <Image
          alt="logo"
          src="/images/icons/logo.svg"
          className="mb-6 w-fit mx-auto"
          height={100}
          width={100}
        />
      </Link>
      <br />
      <div className="mb-8">
        <Link itemProp="name" className="text-2xl md:text-4xl" href="/">
          Bloxy Web Services.
        </Link>
      </div>
      <p itemProp="description" className="capitalize">
        Professional Website Designer and Developer
      </p>
      <div className="my-10  w-[100%] m-auto pb-8 mb-8">
        <a itemProp="telephone" href="tel:07806615231">
          Tel:{" "}
          <span className="hover:text-theme_dark_orange-900 ease-in-out duration-300">
            07806 615231
          </span>
        </a>
        <br />
        <a itemProp="email" href="mailto:stuart@bloxywebservices.co.uk">
          Email:{" "}
          <span className="hover:text-theme_dark_orange-900 ease-in-out duration-300">
            stuart@bloxywebservices.co.uk
          </span>
        </a>
      </div>
      <div className="border-b border-theme_black-900 w-[80%] m-auto mb-10"></div>
      {/* <hr className="my-10 h-1 mb-8 w-[50%] mx-auto  bg-theme_black-900"></hr> */}
      <ul className="p-0 mb-8 text-theme_black-900">
        <li>
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/services/"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/projects/"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/information/"
          >
            About Next JS
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/contact/"
          >
            Get in touch
          </Link>
        </li>
      </ul>
      <address>
        © Copyright SJ Bloxham Ltd -
        <span itemProp="address"> Hertfordshire, UK</span>
      </address>
    </footer>
  );
};

export default Footer;
