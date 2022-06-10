import Link from "next/link";

export default function Navbar() {
  return (
    <div
      id="behind-the-animation"
      className="flex w-full justify-center py-3 text-black"
    >
      <Link href="/" passHref>
        <a className="my-auto mx-3">Services</a>
      </Link>
      <Link href="/" passHref>
        <a className="my-auto mx-3">Services</a>
      </Link>
      <Link href="/" passHref>
        <a className="mx-14 text-4xl"> Telickers</a>
      </Link>
      <Link href="/" passHref>
        <a className="my-auto mx-3">Services</a>
      </Link>{" "}
      <Link href="/" passHref>
        <a className="my-auto mx-3">Services</a>
      </Link>
    </div>
  );
}
