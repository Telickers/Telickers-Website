import React from "react";

export default function Hero() {
  return (
    <section className="radial-bg flex h-screen flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center text-center text-3xl md:mx-16 md:flex-row md:space-x-24 md:text-left md:text-4xl">
        <img src="/icons/hero.svg" alt="hero" className="hidden lg:block" />
        <p className="mx-4 bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text font-bold text-transparent">
          Telickers; A Team United Under The Flag of Code.
        </p>
      </div>
    </section>
  );
}
