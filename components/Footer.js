import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-theme_black-900  py-10 w-screen bg-theme_peach-900 text-center ">
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
        <Link className="text-2xl md:text-4xl" href="/">
          Bloxy Web Services.
        </Link>
      </div>
      <p className="capitalize">Professional Website Designer and Developer</p>
      <div className="my-10  w-[100%] m-auto pb-8 mb-8">
        <span>
          Tel:{" "}
          <a
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300 px-2 py-2"
            href="tel:07806615231"
          >
            07806 615231
          </a>
        </span>
        <br />
        <span>
          Email:{" "}
          <a
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300 px-2 py-2"
            href="mailto:stuart@bloxywebservices.co.uk"
          >
            stuart@bloxywebservices.co.uk
          </a>
        </span>
      </div>
      <div className="border-b border-theme_black-900 w-[80%] m-auto mb-10"></div>
      {/* <hr className="my-10 h-1 mb-8 w-[50%] mx-auto  bg-theme_black-900"></hr> */}
      <ul className="p-0 mb-8 text-theme_black-900">
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/"
          >
            <p className="py-1 px-4">Home</p>
          </Link>
        </li>
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/services/"
          >
            <p className="py-1 px-4">Services</p>
          </Link>
        </li>
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/projects/"
          >
            <p className="py-1 px-4">Projects</p>
          </Link>
        </li>
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/information/"
          >
            <p className="py-1 px-4">About Next JS</p>
          </Link>
        </li>
        <li className="w-fit m-auto my-2">
          <Link
            className="hover:text-theme_dark_orange-900 ease-in-out duration-300"
            href="/contact/"
          >
            <p className="py-1 px-4">Get in touch</p>
          </Link>
        </li>
      </ul>
      <address>
        © Copyright SJ Bloxham Ltd -<span> Hertfordshire, UK</span>
      </address>
    </footer>
  );
};

export default Footer;
