import Link from "next/link";

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
    <nav className="hidden w-full items-center justify-center space-x-6 py-4 md:flex ">
      <Link href="/about" passHref>
        About Us
      </Link>
      <Link href="/services" passHref>
        Services
      </Link>
      <Link href="/">
        <img
          src="/telickers-logo.svg"
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
    <nav className="flex py-6 pl-4 md:hidden">
      <Link href="/">
        <img
          src="/telickers-logo.svg"
          alt="Telickers Logo"
          className="w-40 cursor-pointer"
        />
      </Link>
    </nav>
  );
}
