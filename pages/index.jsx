import Work from "@/components/Current/Projects";
import Services from "@/components/Current/Services";
import About from "@/components/Current/About";
import Hero from "@/components/Current/Hero";
import PageTitle from "@/components/Current/Utils/PageTitle";
import Team from "@/components/Current/Team";
import Why from "@/components/Current/Why";
import Tech from "@/components/Current/Tech";

export default function Home() {
  return (
    <>
      <PageTitle title="Telickers | Web Development" />
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
      {/* <Tech/> */}
      <Why />
    </>
  );
}
