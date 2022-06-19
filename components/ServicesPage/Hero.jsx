import Navbar from "../Layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="radial-bg flex h-screen flex-col items-center justify-center overflow-hidden text-center text-6xl">
        <h1 className="text-linear p-4 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          What would you like us to craft for you?
        </h1>
      </section>
    </>
  );
}
