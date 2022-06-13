import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Reviews from "@/components/Slider/Reviews";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <>
      <div id="behind-the-animation">
        <Intro />
        <About />
        <Services />
        <Work />
        <Reviews />
      </div>
    </>
  );
}
