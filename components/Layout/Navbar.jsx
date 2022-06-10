import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <>
      <LargeNavbar />
      <MobileNavbar />
    </>
  );
}

function LargeNavbar() {
  return (
    <nav
      id="behind-the-animation"
      className="hidden w-full items-center justify-center space-x-6 py-4 md:flex "
    >
      <Link href="/about" passHref>
        About Us
      </Link>
      <Link href="/services" passHref>
        Services
      </Link>
      <Link href="/">
        <img
          src="/telickers.svg"
          alt="Telickers Logo"
          className="mx-5 w-56 cursor-pointer"
        />
      </Link>
      <Link href="/work" passHref>
        Our Work
      </Link>
      <Link href="/contact" passHref>
        Contact Us
      </Link>
    </nav>
  );
}

function MobileNavbar() {
  return (
    <nav  id="behind-the-animation" className="flex items-center justify-between p-4 pr-6 md:hidden">
      <Link href="/">
        <img
          src="/telickers.svg"
          alt="Telickers Logo"
          className="w-40 cursor-pointer"
        />
      </Link>
      <MobileDropDown />
    </nav>
  );
}

function MobileDropDown() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="relative">
      <nav className={`nav ${toggleMenu && "active"}`}>
        <p
          className="-mb-3 rotate-90 cursor-pointer text-2xl font-bold"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {"{"}
        </p>

        <ul>
          <li>
            <Link href="/about" passHref>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" passHref>
              Services
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/work" passHref>
              Work
            </Link>
          </li>
          <li>
            {" "}
            <Link href="/contact" passHref>
              Contact
            </Link>
          </li>
        </ul>

        <p
          onClick={() => setToggleMenu(!toggleMenu)}
          className="line2 rotate-90 cursor-pointer text-2xl font-bold"
        >
          {"}"}
        </p>
      </nav>
    </div>
  );
}
