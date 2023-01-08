import { Link } from "react-scroll";

export default function LargeNavbar() {
  return (
    <nav className="absolute top-12 z-50 hidden w-full items-center justify-center space-x-6 py-4 text-white md:flex">
      <Link
        to="about"
        smooth={true}
        className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in-out hover:border-b-white"
      >
        About Us
      </Link>
       <Link
        to="services"
        smooth={true}
        className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in-out hover:border-b-white"
      >
        Our Services
      </Link>
      <img
        src="/general/telickers-logo.svg"
        alt="Telickers Logo"
        className="mx-5 w-56 cursor-pointer"
      />
       <Link
        to="work"
        smooth={true}
        className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in-out hover:border-b-white"
      >
        Our Work
      </Link>
       <Link
        to="contact"
        smooth={true}
        className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in-out hover:border-b-white"
      >
        Contact Us
      </Link>
    </nav>
  );
}
