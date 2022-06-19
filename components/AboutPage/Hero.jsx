import React from "react";
import Navbar from "../Layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="radial-bg flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center text-center text-3xl md:mx-16 md:flex-row md:space-x-24 md:text-left md:text-4xl">
          <img src="/icons/hero.svg" alt="hero" className="hidden lg:block" />
          <h1 className="text-linear mx-4 text-4xl font-bold p-2">
            A Team United Under The Flag of Code.
          </h1>
        </div>
      </section>
    </>
  );
}
