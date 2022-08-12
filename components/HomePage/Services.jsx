import { motion } from "framer-motion";

import { services } from "data";
import NoScrollLink from "../Common/NoScrollLink";

export default function Services() {
  return (
    <section aria-labelledby="services-section" className="py-24">
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true, amount: 0.7 }}
          id="services-section"
          className="xs:text-4xl text-center text-5xl font-bold"
        >
          What We Do
        </motion.h2>
        <motion.p
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: { delay: 0.2, duration: 0.6 },
          }}
          viewport={{ once: true, amount: 0.7 }}
          className="mx-auto mt-3 px-4  pb-16 text-center xs:text-xl text-2xl font-extralight lg:px-0"
        >
          Clear & Accurate: We Build{" "}
          <span className="font-semibold text-cyan-700">Blazing Fast</span>,{" "}
          <span className="font-semibold text-cyan-700">Modern</span> &{" "}
          <span className="font-semibold text-cyan-700">Responsive</span>{" "}
          websites!
        </motion.p>
        <div className="grid w-screen grid-cols-1 gap-y-20 md:grid-cols-2 mt-6">
          {services.map((serv) => (
            <motion.article
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              viewport={{ once: true, amount: 0.7 }}
              key={serv.title}
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white p-4 shadow-md">
                {serv.Icon}
              </div>
              <div className="text pt-3 text-center">
                <span className="block pb-1 text-2xl font-bold tracking-wider">
                  {serv.title}
                </span>
                <p className="mx-auto xs:px-2 px-4 md:px-0 max-w-[45ch] text-sm">{serv.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          rotateY: [0, 24, 90, 0],
          scale: 1,
          opacity: 1,
          transition: { duration: 0.6 },
        }}
        viewport={{ once: true, amount: 0.7 }}
        className="mt-20 flex justify-center w-full"
      >
        <NoScrollLink href="/services" passhref>
          <span className="text-nowrap btn-primary">Learn More</span>
        </NoScrollLink>
      </motion.div>
    </section>
  );
}
