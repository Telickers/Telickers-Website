import { useRouter } from "next/router";

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
          src="/general/telickers-logo-dark.svg"
          alt="Telickers Logo"
          className="mx-auto w-60 cursor-pointer"
        />
      </NoScrollLink>
      <section className="flex items-center justify-center pt-3">
        <span className="pr-3 font-['Poppins'] text-2xl font-medium">
          {"{"}
        </span>
        <nav className="inline-flex space-x-4">
          <Link route="/about" text="About" />
          <Link route="/services" text="Services" />
          <Link route="/work" text="Work" />
          <Link route="/contact" text="Contact" />
        </nav>
        <span className="pl-3 font-['Poppins'] text-2xl font-medium">
          {"}"}
        </span>
      </section>
      <div className="mt-4 flex justify-center text-black">
        <article className="text-md mt-6 flex space-x-5 md:text-xl lg:text-2xl">
          <a
            aria-label="Message us on Whatsapp"
            href="https://api.whatsapp.com/send?phone=+9617535302"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a
            aria-label="Like our facebook page"
            href="https://www.facebook.com/telickers"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a
            aria-label="Follow us in instagram"
            href="https://www.instagram.com/telickers"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a
            aria-label="Follow us on twitter"
            href="https://twitter.com/telickers"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a
            aria-label="Lets make a connection on linkedin"
            href="https://www.linkedin.com/in/telickers-team-5abb71242/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a
            aria-label="Message us on telegram"
            href="https://t.me/Hussein_Ali_Hassan"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegramPlane />
          </a>
        </article>
      </div>
      <p className="pt-7 text-2xl">
        e-mail: <a href="mailto:hello@telickers.net">hello@telickers.net</a>{" "}
      </p>
      <p className="pt-2 text-sm text-gray-500">
        © {new Date().getFullYear()} Telickers. All rights reserved
      </p>
    </footer>
  );
}

function Link({ route, text }) {
  const router = useRouter();
  const pathname = router.pathname;
  const isActive = route === pathname;

  return (
    <NoScrollLink href={route} passHref>
      <span
        className={`on-hover-text-linear cursor-pointer ${
          isActive && "text-linear"
        }`}
      >
        {text}
      </span>
    </NoScrollLink>
  );
}
