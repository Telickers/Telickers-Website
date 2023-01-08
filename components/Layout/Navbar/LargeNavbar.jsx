export default function LargeNavbar() {
  return (
    <nav className="absolute top-12 z-50 hidden w-full items-center justify-center space-x-6 py-4 text-white md:flex">
      <span
        className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in-out hover:border-b-white"
        onClick={() =>
          document &&
          document.querySelector(`#about`)?.scrollIntoView({ inline: "start", behavior: "smooth" })
        }
      >
        About Us
      </span>
      <span
        className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in-out hover:border-b-white"
        onClick={() =>
          document &&
          document
            .querySelector(`#services`)
            ?.scrollIntoView({ inline: "start", behavior: "smooth" })
        }
      >
        Our Services
      </span>
      <img
        src="/general/telickers-logo.svg"
        alt="Telickers Logo"
        className="mx-5 w-56 cursor-pointer"
      />
      <span
        className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in-out hover:border-b-white"
        onClick={() =>
          document &&
          document.querySelector(`#work`)?.scrollIntoView({ inline: "start", behavior: "smooth" })
        }
      >
        Our Work
      </span>
      <span
        className="cursor-pointer border-b border-transparent transition-all duration-300 ease-in-out hover:border-b-white"
        onClick={() =>
          document &&
          document
            .querySelector(`#contact`)
            ?.scrollIntoView({ inline: "start", behavior: "smooth" })
        }
      >
        Contact Us
      </span>
    </nav>
  );
}
