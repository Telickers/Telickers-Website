import NoScrollLink from "../../Common/NoScrollLink";

export default function LargeNavbar() {
  return (
    <nav className="absolute top-3 z-50 hidden w-full items-center justify-center space-x-6 py-4 text-white md:flex">
      <NoScrollLink href="/about" passHref>
        About Us
      </NoScrollLink>
      <NoScrollLink href="/services" passHref>
        Services
      </NoScrollLink>
      <NoScrollLink href="/">
        <img
          src="/telickers-logo.svg"
          alt="Telickers Logo"
          className="mx-5 w-56 cursor-pointer"
        />
      </NoScrollLink>
      <NoScrollLink href="/work" passHref>
        Our Work
      </NoScrollLink>
      <NoScrollLink href="/contact" passHref>
        Contact Us
      </NoScrollLink>
    </nav>
  );
}
