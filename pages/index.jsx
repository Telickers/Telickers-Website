import Feedbacks from "@/components/HomePage/Feedbacks";
import Work from "@/components/HomePage/Work";
import Services from "@/components/HomePage/Services";
import About from "@/components/HomePage/About";
import Hero from "@/components/HomePage/Hero";
import Title from "@/components/Layout/Title";

export default function Home() {
  return (
    <>
      <Title title={"Home"} />
      <Hero />
      <About />
      <Services />
      <Work />
      <Feedbacks />
    </>
  );
}
