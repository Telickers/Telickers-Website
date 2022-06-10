import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      id="behind-the-animation"
      className="flex w-full items-center justify-center space-x-6 py-4 text-black"
    >
      <Link href="/about" passHref>
        About Us
      </Link>
      <Link href="/services" passHref>
        Services
      </Link>
      <Link href="/">
        <img src="/telickers.svg" alt="Telickers Logo" className="cursor-pointer mx-5 w-56" />
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
