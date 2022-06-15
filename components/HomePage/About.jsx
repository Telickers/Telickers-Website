import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export default function About() {
  let [show, setShow] = useState(false);

  return (
    <section className="mx-auto w-[80%] py-10 md:w-[70%]">
      <div className="text-center">
        <img
          src="/icons/personsfull.svg"
          alt="personsfull"
          className="-mb-10 hidden md:block"
        />
        <img
          src="/icons/cloudTel.svg"
          alt="cloudTel"
          className="-mb-32 block md:hidden"
        />
        <img
          src="/icons/persons.svg"
          alt="persons"
          className="-mb-10 block md:hidden"
        />

        <article className="m-4 mt-10 rounded-2xl p-5 text-lg shadow-2xl shadow-slate-400 md:m-10 md:p-10 md:text-4xl">
          <p className="mb-5 block font-mono sm:hidden">
            Here we could put a small quate about programmin
          </p>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            architecto sint atque tempora vitae, ab aut dolor magnam beatae
            corrupti.
          </p>
        </article>
      </div>
    </section>
  );
}
