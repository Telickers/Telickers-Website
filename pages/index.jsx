import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Reviews from "@/components/Slider/Reviews";

export default function Home() {
  return (
    <>
      <div id="behind-the-animation">
        <About />
        <Services />
        <Work />
        <Reviews />
      </div>
    </>
  );
}
