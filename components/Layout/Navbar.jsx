import Link from "next/link";

export default function Navbar() {
  return (
    <div
      id="behind-the-animation"
      className="flex w-full justify-center py-3 text-black"
    >
      <Link href="/about" passHref>
        <a className="my-auto mx-3">About Us</a>
      </Link>
      <Link href="/services" passHref>
        <a className="my-auto mx-3">Services</a>
      </Link>
      <Link href="/" passHref>
        <a className="mx-14 text-4xl">Telickers</a>
      </Link>
      <Link href="/work" passHref>
        <a className="my-auto mx-3">Our Work</a>
      </Link>{" "}
      <Link href="/contact" passHref>
        <a className="my-auto mx-3">Contact Us</a>
      </Link>
    </div>
  );
}
