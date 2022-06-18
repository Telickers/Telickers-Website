import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="radial-bg grid h-screen grid-cols-1 px-8 lg:grid-cols-2 lg:px-20 lg:pt-5">
      <div className="flex h-full flex-col items-center justify-center lg:items-start">
        <p className="text-xl font-semibold text-cyan-300 md:text-2xl">
          Choose Smarter:
        </p>
        <div className="mt-1 h-1 w-[153px] bg-[linear-gradient(90deg,#0047FF_-7.21%,#00F0FF_123.96%)] md:w-[180px]"></div>
        <div className="min-h-[150px] bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-center text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-[4rem] sm:leading-[4.2rem] lg:text-start">
          <Typewriter
            options={{
              delay: 40,
              loop: true,
              deleteSpeed: 1,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Lorem ipsum dolor sit amet consectetur")
                .pauseFor(1200)
                .deleteAll()
                .typeString("Lorem ipsum dolor sit amet consectetur")
                .pauseFor(1200)
                .deleteAll()
                .typeString("Lorem ipsum dolor sit amet consectetur")
                .pauseFor(1200)
                .start();
            }}
          />
        </div>
        <Link href="/about" passHref>
          <div className="mt-4 flex cursor-pointer items-center space-x-2">
            <span className="text-lg text-white">FIND OUT MORE</span>{" "}
            <BsArrowRightCircle className="text-cyan-300" size={20} />
          </div>
        </Link>
      </div>
      <div className="relative hidden h-full w-full lg:block">
        <img
          src="/hero-img.png"
          className="absolute top-[15px] -right-[80px] w-[350px]"
        />
      </div>
    </section>
  );
}
