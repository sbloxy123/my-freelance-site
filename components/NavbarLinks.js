import React from "react";
import Link from "next/link";
const NavbarLinks = () => {
  return (
    <div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link href="/services/" className="nav-link">
            Services
          </Link>
        </li>
        <li className="nav-item active">
          <Link href="/my-work/" className="nav-link">
            My Work
          </Link>
        </li>
        <li className="nav-item active">
          <Link href="/information/" className="nav-link">
            Information
          </Link>
        </li>
        <li className="nav-item active">
          <Link href="/contact/" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
