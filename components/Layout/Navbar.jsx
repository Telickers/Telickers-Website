import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <LargeNavbar />
      <MobileNavbar/>
    </>
  );
}

function LargeNavbar() {
  return (
    <nav
      id="behind-the-animation"
      className="hidden md:flex w-full items-center justify-center space-x-6 py-4 "
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
    <nav className="flex items-center justify-between md:hidden py-4 pr-3">
      <Link href="/">
        <img
          src="/telickers.svg"
          alt="Telickers Logo"
          className="mx-5 w-40 cursor-pointer"
        />
      </Link>
      <p>Menu</p>
    </nav>
  );
}