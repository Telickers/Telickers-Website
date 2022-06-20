import Navbar from "../Layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <header
        aria-labelledby="hero-text"
        className="radial-bg flex h-screen flex-col items-center justify-center overflow-hidden text-center text-6xl"
      >
        <h1
          id="hero-text"
          className="text-linear p-4 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
        >
          We work to sustain you. <br /> Believing in your success
        </h1>
      </header>
    </>
  );
}
