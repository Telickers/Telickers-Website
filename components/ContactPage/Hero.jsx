import { BiChevronsDown } from "react-icons/bi";

import Navbar from "../Layout/Navbar";

export default function ContactHero() {
  return (
    <>
      <Navbar />
      <section
        aria-labelledby="contact-title"
        className="radial-bg flex h-screen flex-col items-center justify-center text-white lg:items-start lg:px-32"
      >
        <h1
          id="contact-title"
          className="text-linear text-left text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl"
        >
          GET IN TOUCH
        </h1>
        <div className="flex w-full flex-col items-center justify-between space-y-7 lg:flex-row">
          <div className="flex flex-col items-center lg:items-start">
            <p className="mt-4 text-xl font-bold md:text-2xl lg:mt-10">
              Interested in hiring us?
            </p>
            <p className="-mt-1 text-xl font-thin md:text-2xl lg:mt-1">
              Contact us and let&apos;s talk it over.
            </p>
          </div>
          <div>
            <button
              className="btn-secondary flex items-center justify-center"
              onClick={() => {
                window?.scroll({
                  top: 650,
                  behavior: "smooth",
                });
              }}
            >
              <span>Say Hello</span>
              <span>
                <BiChevronsDown size={25} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
