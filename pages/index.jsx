import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";
import Feedbacks from "@/components/Feedbacks";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <>
      <div className="behind-the-animation">
        <Intro />
        <About />
        <Services />
        <Work />
        <Feedbacks />
      </div>
    </>
  );
}
