import Services from "@/components/Services";
import About from "@/components/About";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <div id="behind-the-animation" className=" ">
        <About />
        <Services />
        <Work />
      </div>
    </>
  );
}
