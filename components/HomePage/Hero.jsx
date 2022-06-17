import { BsArrowRightCircle } from "react-icons/bs";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="h-screen bg-[linear-gradient(38.54deg,#0F1A29_-58.14%,#080E17_32.07%,#0F1A29_106.6%)] flex flex-col items-center justify-center">
      <p className="text-xl text-gray-400 md:text-2xl">
        Choose Smarter:
      </p>
      <div className="mx-auto w-[85%] bg-[radial-gradient(138.06%_1036.51%_at_95.25%_-2.54%,_#7ED4FD_14.06%,#709DF7_51.02%,#4D78EF_79.09%)] bg-clip-text text-5xl leading-[1.2] tracking-tighter text-transparent sm:text-center sm:text-[4rem] sm:leading-[4.75rem]">
        <Typewriter
          options={{
            loop: true,
            deleteSpeed: 1,
            delay: 40,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Who delivers the best websites ever")
              .pauseFor(1200)
              .deleteAll()
              .typeString("Who advise you for a better software experience")
              .pauseFor(1200)
              .deleteAll()
              .typeString(
                "Who tutors your first steps in programming & technology"
              )
              .pauseFor(1200)
              .start();
          }}
        />
      </div>
      <button className="mt-4 flex items-center space-x-3 rounded-full bg-sky-300 py-2 px-6 font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
        <span>FIND OUT MORE</span> <BsArrowRightCircle />
      </button>
    </section>
  );
}