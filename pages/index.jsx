import ClientsFeedback from "@/components/HomePage/ClientsFeedback";
import FeaturedWork from "@/components/HomePage/FeaturedWork";
import Services from "@/components/HomePage/Services";
import About from "@/components/HomePage/About";
import Hero from "@/components/HomePage/Hero";

export default function Home() {
  return (
    <>
      <div className="behind-the-animation">
        <Hero />
        <About />
        <Services />
        <FeaturedWork />
        <ClientsFeedback />
      </div>
    </>
  );
}
