import Feedbacks from "@/components/HomePage/Feedbacks";
import Work from "@/components/HomePage/Work";
import Services from "@/components/HomePage/Services";
import About from "@/components/HomePage/About";
import Hero from "@/components/HomePage/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Feedbacks />
    </>
  );
}
