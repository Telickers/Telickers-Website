import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
} from "../node_modules/react-icons/fa";
import { AiOutlineLine } from "../node_modules/react-icons/ai";

export default function Footer() {
  return (
    <footer className="pb-20 text-center">
      <h1 className="text-6xl">Telickers</h1>
      <article className="mt-4">
        <span className="text-3xl font-bold">{"{"}</span>
        <nav className="inline">
          <Link href="">
            <a className="mx-4">Services</a>
          </Link>
          <Link href="">
            <a className="mx-4">Work</a>
          </Link>
          <Link href="">
            <a className="mx-4">About</a>
          </Link>
          <Link href="">
            <a className="mx-4">Contacts</a>
          </Link>
        </nav>
        <span className="text-3xl font-bold">{"}"}</span>
      </article>
      <div className="mt-4 flex justify-center text-black">
        <article className="mt-6 flex">
          <Link href="">
            <a>
              <FaFacebookF className=" text-xl" />
            </a>
          </Link>
          <AiOutlineLine className="mx-5 rotate-90 text-xl" />
          <Link href="">
            <a>
              <FaInstagram className=" text-xl" />
            </a>
          </Link>
          <AiOutlineLine className="mx-5 rotate-90 text-xl" />
          <Link href="">
            <a>
              <FaTwitter className=" text-xl" />
            </a>
          </Link>
          <AiOutlineLine className="mx-5 rotate-90 text-xl" />
          <Link href="">
            <a>
              <FaLinkedinIn className=" text-xl" />
            </a>
          </Link>
          <AiOutlineLine className="mx-5 rotate-90 text-xl" />
          <Link href="">
            <a>
              <FaTelegramPlane className=" text-xl" />
            </a>
          </Link>
        </article>
      </div>
      <h1 className="mt-7 text-2xl">e-mail: hello@telickers.net</h1>
      <h1 className="text-md mt-3 text-gray-300">
        © 2022 Telickers. All rights reserved
      </h1>
    </footer>
  );
}
