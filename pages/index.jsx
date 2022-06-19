import Feedbacks from "@/components/HomePage/Feedbacks";
import Work from "@/components/HomePage/Work";
import Services from "@/components/HomePage/Services";
import About from "@/components/HomePage/About";
import Hero from "@/components/HomePage/Hero";
import SEO from "@/components/Common/SEO";

export default function Home() {
  return (
    <>
      <SEO title="Home | Telickers" />
      <Hero />
      <About />
      <Services />
      <Work />
      <Feedbacks />
    </>
  );
}
