import Navbar from "@/components/Layout/Navbar";

export default function Header({ name, description, url }) {
  return (
    <>
      <Navbar />
      <header className="radial-bg flex h-screen flex-col justify-center px-12 lg:px-20">
        <h1 className="text-linear p-4 text-4xl font-bold italic sm:text-5xl md:text-6xl lg:text-8xl">
          {name}
        </h1>
        <p className="max-w-[50ch] text-lg text-white">{description} </p>
        {url && 
        <p className="pt-6 text-white/70">
          Check out the live site{" "}
          <a
            className="text-linear"
            href={url}
            target="_blank"
            rel="noreferrer"
            >
            here
          </a>
          .
        </p>
          }
      </header>
    </>
  );
}
