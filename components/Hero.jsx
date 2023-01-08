import Image from "next/image";
import Typewriter from "typewriter-effect";
import { GiTronArrow } from "react-icons/gi";

import Navbar from "./Layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section aria-label="hero home" className="radial-bg relative h-screen">
        <section className="grid h-full grid-cols-1 px-8 lg:grid-cols-2 lg:px-20 lg:pt-5">
          <div className="flex h-full flex-col items-center justify-center lg:items-start">
            <p className="text-xl font-semibold text-cyan-300 md:text-2xl">
              Choose Smarter:
            </p>
            <div className="mt-1 h-1 w-[153px] bg-[linear-gradient(90deg,#0047FF_-7.21%,#00F0FF_123.96%)] md:w-[180px]"></div>
            <div className="text-linear min-h-[150px] py-2 text-center text-5xl leading-[1.2] tracking-tighter sm:text-[4rem] sm:leading-[4.2rem] lg:text-start xs:min-h-[110px] xs:text-3xl">
              <Typewriter
                options={{
                  delay: 32,
                  loop: true,
                  deleteSpeed: 1,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Who facilitates your presence on the web")
                    .pauseFor(1400)
                    .deleteAll()
                    .typeString(
                      "Who makes memorable sites that grow your business"
                    )
                    .pauseFor(1400)
                    .deleteAll()
                    .typeString(
                      "Who builds fun & enjoyable experiences on the web"
                    )
                    .pauseFor(1400)
                    .start();
                }}
              />
            </div>
          </div>
          <div className="relative hidden h-full w-full lg:block">
            <div className="absolute top-[15px] -right-[80px]">
              <Image
                priority={true}
                src="/general/hero-img.png"
                alt=""
                width={350}
                height={714}
              />
            </div>
          </div>
        </section>
        <div className="absolute bottom-16 flex w-full items-center justify-center">
          
        <button
          className="animate-bounce"
          onClick={() => {
            window?.scroll({
              top: 775,
              behavior: "smooth",
            });
          }}
          >
          <GiTronArrow color="white" size={50} className="rotate-[67deg]" />
        </button>
          </div>
      </section>
    </>
  );
}
