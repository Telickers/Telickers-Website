import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";

import NoScrollLink from "../Common/NoScrollLink";

export default function Footer() {
  return (
    <footer className="pb-6 pt-14 text-center">
      <NoScrollLink href="/" passhref>
        <img
          src="/telickers-logo-dark.svg"
          alt="Telickers Logo"
          className="mx-auto w-60 cursor-pointer"
        />
      </NoScrollLink>
      <section className="pt-2">
        <span className="pr-4 text-2xl font-bold md:text-3xl">{"{"}</span>
        <nav className="inline-flex space-x-4">
          <NoScrollLink href="/about" passhref>
            <a className="">About</a>
          </NoScrollLink>
          <NoScrollLink href="/services" passhref>
            <a className="">Services</a>
          </NoScrollLink>
          <NoScrollLink href="/work" passhref>
            <a className="">Work</a>
          </NoScrollLink>
          <NoScrollLink href="/contact" passhref>
            <a className="">Contact</a>
          </NoScrollLink>
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
