import Navbar from "../Layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="radial-bg flex h-screen flex-col items-center justify-center overflow-hidden text-center text-6xl">
        <h1 className="text-linear mx-4 flex h-full items-center font-bold">
          Services
        </h1>
      </section>
    </>
  );
}
