import { motion } from "framer-motion";

import { services } from "data";
import NoScrollLink from "../Common/NoScrollLink";

export default function Services() {
  return (
    <section aria-labelledby="services-section" className="bg-brand py-24">
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
          viewport={{ once: true, amount: 0.7 }}
          id="services-section"
          className="pb-16 text-center text-5xl font-bold"
        >
          Our Services
        </motion.h2>
        <div className="grid w-screen grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
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
                {serv.desc.map((d, i) => (
                  <p className="text-sm" key={i}>
                    {d}
                  </p>
                ))}
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
        className="mt-20 flex justify-center"
      >
        <NoScrollLink href="/services" passhref>
          <span className="btn-primary">Read More</span>
        </NoScrollLink>
      </motion.div>
    </section>
  );
}
