import React from "react";

export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center bg-[linear-gradient(38.54deg,#0F1A29_-58.14%,#080E17_32.07%,#0F1A29_106.6%)]">
      <div className="flex flex-col items-center space-y-10 text-center text-3xl text-[#00D1FF] md:mx-16 md:space-x-24 md:text-left md:text-4xl lg:flex-row">
        <img src="/abouticons/hero.svg" alt="hero" />
        <p>
          Telickers is a development company that aim to relate everything with
          technology. We are a team who united under the flag of of code.
        </p>
      </div>
    </section>
  );
}
