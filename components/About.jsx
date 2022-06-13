import { IoIosArrowDown, IoIosArrowUp } from "../node_modules/react-icons/io";
import { useState } from "react";

export default function About() {
  let [show, setShow] = useState(false);

  return (
    <section className="py-4">
      <div className="text-center">
        <h2 className="pb-16 text-center text-5xl font-bold">Who we are?</h2>
        <p className="mx-auto mb-14 flex w-1/3 justify-center text-center text-5xl">
          Telickers team involved in software technology
        </p>
        <p className="mx-auto h-0.5 w-1/5 bg-orange-600"></p>

        {show === true ? (
          <>
            <div className="text mt-4">
              <h3 className="text-5xl font-light">
                “Here we could put a small quote about programming that attracts
                customer”
              </h3>
              <p className="mx-auto mt-8 w-2/3 text-4xl font-extralight">
                A short description about who we are and how we are involved in
                programmiong, and we are a team of designers and programmers and
                how we are expecting to reach new records or we are expecting to
                be worldwide..
              </p>
            </div>
            <p className="mx-auto mt-10 h-0.5 w-1/5 bg-orange-600"></p>
          </>
        ) : null}

        <button
          className="mx-auto text-5xl"
          onClick={() => setShow(!show)}
        >
          {show === true ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
    </section>
  );
}
