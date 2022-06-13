import { BsArrowRightCircle } from "../node_modules/react-icons/bs";
import { AiOutlineLine } from "../node_modules/react-icons/ai";

export default function Intro() {
  return (
    <section className="relative flex flex-col items-center justify-center bg-black py-72 text-white">
      <div className="content">
        <h2 className="text-6xl font-bold">
          Move Your Business Into <br /> the New World Of Technology.
        </h2>
        <div className="mt-6 flex items-center space-x-2">
          <button className="flex items-center space-x-3 text-xl">
            <span>FIND OUT MORE</span> <BsArrowRightCircle />
          </button>
          <AiOutlineLine className="rotate-90" />
          <button className="text-md rounded-3xl bg-white p-1 px-2 text-black">
            Request a meeting
          </button>
        </div>
      </div>
      <div className="triangle">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
