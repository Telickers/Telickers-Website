import React from "react";

export default function Hero() {
  return (
    <section className="radial-bg flex h-screen flex-col items-center justify-center overflow-hidden">
      <div className="text-linear flex flex-col items-center space-y-10 text-center text-3xl md:mx-16 md:flex-row md:space-x-24 md:text-left md:text-4xl">
        <img src="/icons/hero.svg" alt="hero" />
        <p className="mx-4 font-bold">
          Telickers is a development company that aim to relate everything with
          technology. We are a team who united under the flag of of code.
        </p>
      </div>
    </section>
  );
}
