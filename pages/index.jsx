import Work from "@/components/Current/Projects";
import Services from "@/components/Current/Services";
import About from "@/components/Current/About";
import Hero from "@/components/Current/Hero";
import PageTitle from "@/components/Current/Utils/PageTitle";
import Team from "@/components/Current/Team";
import Why from "@/components/Current/Why";

export default function Home() {
  return (
    <>
      <PageTitle title="Telickers | Web Development" />
      <Hero />
      <About />
      <Services />
      <Work />
      <Team />
      <Why />
    </>
  );
}
