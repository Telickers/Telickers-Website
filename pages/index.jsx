import Feedbacks from "@/components/HomePage/Feedbacks";
import Work from "@/components/HomePage/Work";
import Services from "@/components/HomePage/Services";
import About from "@/components/HomePage/About";
import Hero from "@/components/HomePage/Hero";
import PageTitle from "@/components/Common/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle title="Telickers | Web Development" />
      <Hero />
      <About />
      <Services />
      <Work />
    </>
  );
}
