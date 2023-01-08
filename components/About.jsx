import { motion } from "framer-motion";

export default function About() {
  return (
    <section aria-label="about-section" className=" bg-brand  py-20">
      <div className="mx-auto w-[90%] text-center md:w-[70%]">
        <img
          src="/icons/personsfull.svg"
          alt="personsfull"
          className="-mb-10 hidden md:block"
        />
        <img
          src="/icons/cloudTel.svg"
          alt="cloudTel"
          className="-mb-24 block md:hidden"
        />
        <img
          src="/icons/persons.svg"
          alt="persons"
          className="-mb-10 block md:hidden"
        />
        <motion.article
          whileInView={{
            x: [-7, 0, 7, -7, 0, 7],
            transition: { duration: 0.3, type: "spring", stiffness: 180 },
          }}
          viewport={{ once: false, amount: 0.7 }}
          className="m-4 mt-10 rounded-2xl p-5 text-lg shadow-2xl shadow-slate-400 md:m-10 md:p-10 xs:mx-0"
        >
          <p className="mb-5 font-bold md:text-3xl xs:text-lg">
            &quot;Great things in business are never done by one person.
            They&apos;re done by a team of people.&quot;
          </p>
          <p className="text-gray-600 md:text-2xl">
            We are a team of{" "}
            <span className="font-semibold text-cyan-700">
              professional designers
            </span>{" "}
            and{" "}
            <span className="font-semibold text-cyan-700">
              expert web developers
            </span>
            , having a structure and the motivation for researching, prototyping
            and building fast and cutting-edge websites.
          </p>
        </motion.article>
      </div>
    </section>
  );
}
