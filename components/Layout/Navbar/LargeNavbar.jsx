import { useRouter } from "next/router";

import NoScrollLink from "../../Common/NoScrollLink";

export default function LargeNavbar() {
  return (
    <nav className="absolute top-3 z-50 hidden w-full items-center justify-center space-x-6 py-4 text-white md:flex">
      <Link route="/about" text="About Us" />
      <Link route="/services" text="Services" />
      <NoScrollLink href="/">
        <img
          src="/general/telickers-logo.svg"
          alt="Telickers Logo"
          className="mx-5 w-56 cursor-pointer"
        />
      </NoScrollLink>
      <Link route="/work" text="Our Work" />
      <Link route="/contact" text=" Contact Us" />
    </nav>
  );
}

function Link({ route, text }) {
  const router = useRouter();
  const pathname = router.pathname;
  const isActive = route === pathname;

  return (
    <NoScrollLink href={route} passHref>
      <span
        className={`cursor-pointer border-b border-transparent transition-all duration-300 ease-in-out hover:border-b-white ${
          isActive && "border-b-white font-semibold"
        }`}
      >
        {text}
      </span>
    </NoScrollLink>
  );
}
