"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import "../css/navbar.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="z-30">
      <nav className="bg-theme_white-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 ">
            <div className="flex-shrink-0">
              <Link href="/" className="capitalize text-xl font-light">
                Bloxy Web Services
              </Link>
            </div>
            <div className="flex items-center">
              <div className="hidden md:block">
                <div
                  itemScope
                  itemType="https://schema.org/SiteNavigationElement"
                  className="ml-10 flex items-baseline space-x-4 "
                >
                  <Link
                    itemProp="url"
                    href="/"
                    className="nav-link  px-3 py-2 text-md font-sans font-light"
                  >
                    <span itemProp="name">Home</span>
                  </Link>

                  <Link
                    itemProp="url"
                    href="/services"
                    className="nav-link px-3 py-2 text-md font-sans font-light "
                  >
                    {" "}
                    <span itemProp="name">Services</span>
                  </Link>

                  <Link
                    itemProp="url"
                    href="/projects"
                    className="nav-link px-3 py-2 text-md font-sans font-light"
                  >
                    <span itemProp="name">Projects</span>
                  </Link>
                  <Link
                    itemProp="url"
                    href="information"
                    className="nav-link px-3 py-2 text-md font-sans font-light"
                  >
                    <span itemProp="name">About Next JS</span>
                  </Link>

                  <Link
                    itemProp="url"
                    href="contact"
                    className="nav-link px-3 py-2 text-md font-sans font-light"
                  >
                    <span itemProp="name">Contact</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center p-2 rounded-md text-theme_black-900 hover:bg-theme_dark_orange-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden z-20" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-30">
                <Link
                  href="/"
                  onClick={() => setIsOpen(!isOpen)}
                  className="nav-link  px-3 py-2 text-md font-sans font-light block"
                >
                  Home
                </Link>

                <Link
                  href="/services"
                  onClick={() => setIsOpen(!isOpen)}
                  className="nav-link px-3 py-2 text-md font-sans font-light  block"
                >
                  Services
                </Link>

                <Link
                  href="/projects"
                  onClick={() => setIsOpen(!isOpen)}
                  className="nav-link px-3 py-2 text-md font-sans font-light block"
                >
                  Projects
                </Link>
                <Link
                  href="information"
                  onClick={() => setIsOpen(!isOpen)}
                  className="nav-link px-3 py-2 text-md font-sans font-light block"
                >
                  About Next JS
                </Link>

                <Link
                  href="contact"
                  onClick={() => setIsOpen(!isOpen)}
                  className="nav-link px-3 py-2 text-md font-sans font-light block"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
