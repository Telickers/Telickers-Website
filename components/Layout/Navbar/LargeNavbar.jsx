import Link from "next/link";

export default function LargeNavbar() {
  return (
    <nav className="absolute top-3 z-50 hidden w-full items-center justify-center space-x-6 py-4 text-gray-300 md:flex">
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
