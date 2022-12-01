import { GiTronArrow } from "react-icons/gi";

import Navbar from "../../Layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="radial-bg flex h-screen flex-col items-center justify-center space-y-16 overflow-hidden text-center">
        <h1 className="text-linear p-4 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          What would you like us to craft for you?
        </h1>
        <button
          className="animate-bounce"
          onClick={() => {
            window?.scroll({
              top: 655,
              behavior: "smooth",
            });
          }}
        >
          <GiTronArrow color="white" size={50} className="rotate-[67deg]" />
        </button>
      </section>
    </>
  );
}
