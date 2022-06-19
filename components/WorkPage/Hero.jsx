import Navbar from "../Layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="radial-bg flex h-screen flex-col items-center justify-center overflow-hidden text-center text-6xl">
        <h1 className="p-4 text-linear text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          We work to sustain you. <br /> Believing in your success
        </h1>
      </section>
    </>
  );
}
