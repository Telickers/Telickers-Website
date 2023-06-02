import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { AiOutlineLine } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-6 pt-14 text-center">
      <Link href="/">
        <img
          src="/general/telickers-logo-dark.svg"
          alt="Telickers Logo"
          className="mx-auto w-60 cursor-pointer"
        />
      </Link>
      <div className="mt-4 flex justify-center text-black">
        <article className="text-md mt-6 flex space-x-4 md:text-xl lg:text-2xl xs:space-x-3">
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
            aria-label="Like our facebook page"
            href="https://www.facebook.com/telickers"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <AiOutlineLine className="rotate-90 " />
          <a
            aria-label="Message us on Whatsapp"
            href="https://wa.me/+96176681348"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </article>
      </div>
      <p className="pt-7 text-2xl xs:text-xl">
        e-mail: <a href="mailto:hello@telickers.net">hello@telickers.net</a>{" "}
      </p>
      <p className="pt-2 text-sm text-gray-500">
        © 2022 - {new Date().getFullYear()} Telickers. All rights reserved
      </p>
    </footer>
  );
}
