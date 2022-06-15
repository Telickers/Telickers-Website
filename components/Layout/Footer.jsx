import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#F6F6F6] py-10 text-center">
      <Link href="/">
        <img
          src="/telickers-logo.svg"
          alt="Telickers Logo"
          className="mx-auto w-60 cursor-pointer"
        />
      </Link>
      <section className="pt-2">
        <span className="pr-4 text-2xl font-bold md:text-3xl">{"{"}</span>
        <nav className="inline-flex space-x-4">
          <Link href="/about">
            <a className="">About</a>
          </Link>
          <Link href="/services">
            <a className="">Services</a>
          </Link>
          <Link href="/work">
            <a className="">Work</a>
          </Link>
          <Link href="/contact">
            <a className="">Contacts</a>
          </Link>
        </nav>
        <span className="pl-4 text-2xl font-bold md:text-3xl">{"}"}</span>
      </section>
      <div className="mt-4 flex justify-center text-black">
        <article className="text-md mt-6 flex space-x-5 md:text-xl lg:text-2xl">
          <a>
            <FaWhatsapp />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a>
            <FaFacebookF />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a>
            <FaInstagram />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a>
            <FaTwitter />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a>
            <FaLinkedinIn />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a>
            <FaTelegramPlane />
          </a>
        </article>
      </div>
      <p className="pt-7 text-2xl">
        e-mail: <a href="mailto:hello@telickers.net">hello@telickers.net</a>{" "}
      </p>
      <p className="pt-2 text-sm text-gray-400">
        © 2022 Telickers. All rights reserved
      </p>
    </footer>
  );
}
