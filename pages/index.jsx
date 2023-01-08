import Work from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <section className="w-full bg-cyan-700 py-2 text-center text-white">
        <span>
          Stay Tuned! {"We're"} re-building this website in 3D{" "}
          <a href="https://3d.telickers.net" target="_blank" rel="noreferrer" className="underline font-semibold text-yellow-500">
            here
          </a>
        </span>
      </section>
      <Hero />
      <About />
      <Services />
      <Work />
      <Team />
      <Why />
    </>
  );
}
