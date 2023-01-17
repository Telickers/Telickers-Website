import Work from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Team />
      <Why />
    </>
  );
}
